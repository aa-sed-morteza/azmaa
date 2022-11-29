import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CustomInput from "../../../../general/customInput";
import Button from "../../../../general/button";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { useUser } from "../../../../context/userContext";
import { infoSchema } from "../../../../schema";
import CustomDatePicker from "../../../../general/datePicker";
import calendar from "../../../../../assets/calendar.webp";

export default function EditPersonalInformation() {
  const navigate = useNavigate();
  const { state, dispatch } = useUser();
  const [order, setOrder] = useState(false);

  const onSubmit = async (values, actions) => {
    dispatch({ type: "SET_FNAME", payload: values.firstName });
    dispatch({ type: "SET_LNAME", payload: values.lastName });
    dispatch({ type: "SET_BIRTH_PLACE", payload: values.birthPlace });
    dispatch({ type: "SET_PERSONALCODE", payload: values.personalCode });
    dispatch({ type: "SET_BIRTH_DAY", payload: values.birthDay });
    navigate("/dashboard");
    actions.resetForm();
  };



  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue,
  } = useFormik({
    initialValues: {
      firstName: state.firstName,
      lastName: state.lastName,
      birthPlace: state.birthPlace,
      personalCode: state.personalCode,
      birthDay: state.birthDay
    },
    validationSchema: infoSchema,
    onSubmit,
  });

  return (
    <Wraper>
      <FirstTitle>
        <p className="home">پنل / </p>
        <p className="component"> ویرایش اطلاعات شخصی </p>
      </FirstTitle>

      <form onSubmit={handleSubmit} autoComplete="off">
        <Container>
          <Title>۱. اطلاعات شخصی خود را اصلاح کنید:</Title>
          <Form>
            <CustomInput
              label="نام"
              back="#ffffff"
              value={values.firstName}
              onChange={handleChange}
              id="firstName"
            />
            {errors.firstName && touched.firstName && (
              <ErrorText>{errors.firstName}</ErrorText>
            )}
            <CustomInput
              label="نام خانوادگی"
              back="#ffffff"
              value={values.lastName}
              onChange={handleChange}
              id="lastName"
            />
            {errors.lastName && touched.lastName && (
              <ErrorText>{errors.lastName}</ErrorText>
            )}
            <CustomInput
              label="محل تولد"
              back="#ffffff"
              value={values.birthPlace}
              onChange={handleChange}
              id="birthPlace"
            />
            {errors.birthPlace && touched.birthPlace && (
              <ErrorText>{errors.birthPlace}</ErrorText>
            )}
            <CustomInput
              label="کد ملی"
              back="#ffffff"
              value={values.personalCode}
              onChange={handleChange}
              id="personalCode"
            />
            {errors.personalCode && touched.personalCode && (
              <ErrorText>{errors.personalCode}</ErrorText>
            )}

            <CustomDatePicker
              label="از تاریخ "
              background="#FFFFFF"
              icon={calendar}
              placeholder="انتخاب کنید"
              id="birthDay"
              value={values.birthDay}
              onChange={setFieldValue}
            />
            {errors.birthDay && touched.birthDay && (
              <ErrorText>{errors.birthDay}</ErrorText>
            )}
          </Form>
        </Container>
        <Box>
          <Button
            text="لغو"
            textColor="#095644"
            borderColor="#095644"
            width="35%"
            click={() => {
              navigate("/");
            }}
          />
          <Button
            text="ثبت"
            textColor="#FFFFFF"
            background="#095644"
            width="62%"
            type="submit"
          />
        </Box>
      </form>
    </Wraper>
  );
}

const Wraper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 20px;
`;

const FirstTitle = styled.div`
  display: flex;
  margin-bottom: 12px;
  .home {
    font-size: 3.721vw;
    font-weight: 700;
    margin: 0;
    color: rgba(0, 0, 0, 0.2);
  }
  .component {
    font-size: 3.721vw;
    font-weight: 700;
    margin: 0;
    color: rgba(112, 112, 112, 1);
  }
  @media (min-width: 480px) {
    margin-bottom: 25px;
    padding-right: 10%;
    .home,
    .component {
      font-size: 1.25vw;
    }
  }
`;

const Container = styled.div`
  background: #ffffff;
  border-radius: 4px;
  padding: 14px 10px 11px;
`;
const Title = styled.h2`
  padding-right: 36px;
  margin: 0;
  color: #9f9f9f;
  font-size: 4.651vw;
  font-weight: 300;
  margin-bottom: 10px;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
const Box = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 15px;
`;

const ErrorText = styled.p`
  color: #fc8181;
  font-size: 0.75rem;
  width: 100%;
  text-align: right;
  margin: 0;
  margin-right: 2%;
  margin-top: 2%;
`;