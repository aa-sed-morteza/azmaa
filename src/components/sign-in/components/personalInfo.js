import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CustomInput from "../../general/customInput";
import Button from "../../general/button";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { useUser } from "../../context/userContext";
import { infoSchema } from "../../schema";

export default function PersonalInformation() {
  const navigate = useNavigate();
  const { state, dispatch } = useUser();
  const [order, setOrder] = useState(false);

  const onSubmit = async (values, actions) => {
    dispatch({ type: "SET_FNAME", payload: values.firstName });
    dispatch({ type: "SET_LNAME", payload: values.lastName });
    dispatch({ type: "SET_BIRTH_PLACE", payload: values.birthPlace });
    dispatch({ type: "SET_PERSONALCODE", payload: values.personalCode });
    dispatch({ type: "SET_BIRTH_DAY", payload: values.birthDay });
    dispatch({ type: "SET_SIGN_LEVEL", payload: 2 });
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
  } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      birthPlace: "",
      personalCode: "",
      birthDay: "",
    },
    validationSchema: infoSchema,
    onSubmit,
  });

  return (
    <>
    {state.signInLevel ===1 ?(
      <form onSubmit={handleSubmit} autoComplete="off">
      <Container>
        <Title>۱. اطلاعات شخصی خود را بنویسید:</Title>
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
          <CustomInput
            label="تاریخ تولد"
            back="#ffffff"
            value={values.birthDay}
            onChange={handleChange}
            id="birthDay"
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
    ):(
      <Container>
        <Title>۱. اطلاعات شخصی خود را بنویسید:</Title>
        <Form>
          <CustomInput
            label="نام"
            back="#ffffff"
            value={state.firstName}
            id="firstName"
          />
         
          <CustomInput
            label="نام خانوادگی"
            back="#ffffff"
            value={state.lastName}
            id="lastName"
          />
         
          <CustomInput
            label="محل تولد"
            back="#ffffff"
            value={state.birthPlace}
            id="birthPlace"
          />
         
          <CustomInput
            label="کد ملی"
            back="#ffffff"
            value={state.personalCode}
            id="personalCode"
          />
         
          <CustomInput
            label="تاریخ تولد"
            back="#ffffff"
            value={state.birthDay}
            id="birthDay"
          />
        
        </Form>
      </Container>
    
    )}
   </>
  );
}

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
