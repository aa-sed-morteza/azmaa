import React from "react";
import styled from "styled-components";
import CustomInput from "../../general/customInput";
import Button from "../../general/button";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../context/userContext";
import { useFormik } from "formik";
import { selectAreaSchema } from "../../schema";
import Select from "../../general/select";
import SelectNumber from "../../general/selectNumber";

export default function SelectionArea() {
  const navigate = useNavigate();
  const { state, dispatch } = useUser();
  const areaName = ["تهران", "پردیس", "دماوند", "شهر ری"];
  const commission = ["امنیت ملی", "سلامت", "ورزش", "عمران"];

  const onSubmit = async (values, actions) => {
    dispatch({ type: "SET_AREA_NAME", payload: values.areaName });
    dispatch({ type: "SET_COMMISSION", payload: values.commission });
    dispatch({ type: "SET_VOTE_NUMBER", payload: values.voteNumber });
    dispatch({ type: "SET_SIGN_LEVEL", payload: 5 });
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
      areaName: "",
      voteNumber: 0,
      commission: "",
    },
    validationSchema: selectAreaSchema,
    onSubmit,
  });

  console.log("cal", values);
  return (
    <>
      {state.signInLevel === 4 ? (
        <form onSubmit={handleSubmit} autoComplete="off">
          <Container>
            <Title>۴. اطلاعات حوزۀ انتخابیه را وارد کنید:</Title>
            <Form>
              <Select
                label="نام حوزه"
                background="#FFFFFF"
                value={values.areaName}
                onChange={handleChange}
                options={areaName}
                id="areaName"
              />
              {errors.areaName && touched.areaName && (
                <ErrorText>{errors.areaName}</ErrorText>
              )}

              <SelectNumber
                label="تعداد آراء"
                background="#FFFFFF"
                id="voteNumber"
                name="voteNumber"
                value={values.voteNumber}
                onChange={handleChange}
              />
              {errors.voteNumber && touched.voteNumber && (
                <ErrorText>{errors.voteNumber}</ErrorText>
              )}

              <Select
                label="نام کمیسیون"
                background="#FFFFFF"
                value={values.commission}
                onChange={handleChange}
                options={commission}
                id="commission"
              />
              {errors.commission && touched.commission && (
                <ErrorText>{errors.commission}</ErrorText>
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
      ) : (
        <Container>
          <Title>۴. اطلاعات حوزۀ انتخابیه را وارد کنید:</Title>
          <Form>
            <Select
              label="نام حوزه"
              background="#FFFFFF"
              value={state.areaName}
              options={areaName}
            />

            <SelectNumber
              label="تعداد آراء"
              background="#FFFFFF"
              value={state.voteNumber}
            />

            <Select
              label="نام کمیسیون"
              background="#FFFFFF"
              value={state.commission}
              options={commission}
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
  margin-top: 15px;
  @media (min-width: 480px) {
    padding: 2.604vw;
  }
`;
const Title = styled.h2`
  padding-right: 36px;
  margin: 0;
  color: #9f9f9f;
  font-size: 4.651vw;
  font-weight: 300;
  margin-bottom: 10px;
  @media (min-width: 480px) {
    font-size: 1.458vw;
    margin-bottom: 1.302vw;
  }
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  @media (min-width: 480px) {
    width: 65%;
    gap: 1.302vw;
  }
`;

const Box = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 15px;
  @media (min-width: 480px) {
    width: 65%;
    gap: 1.042vw;
    margin: 1.042vw auto;
  }
`;

const ErrorText = styled.p`
  color: #fc8181;
  font-size: 0.75rem;
  width: 100%;
  text-align: right;
  margin: 0;
  margin-right: 2%;
  margin-top: 2%;
  @media (min-width: 480px) {
    margin-top: 0;
    font-size: 1.042vw;
  }
`;
