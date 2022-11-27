import React from "react";
import styled from "styled-components";
import CustomInput from "../../general/customInput";
import Button from "../../general/button";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../context/userContext";
import { useFormik } from "formik";
import { contactSchema } from "../../schema";

export default function Contacts() {
  const navigate = useNavigate();
  const { state, dispatch } = useUser();

  const onSubmit = async (values, actions) => {
    dispatch({ type: "SET_MOBILEN", payload: values.mobileNumber });
    dispatch({ type: "SET_MAIL", payload: values.email });
    dispatch({ type: "SET_ADDRESS", payload: values.address });
    dispatch({ type: "SET_PHONEN", payload: values.phoneNubmer });
    dispatch({ type: "SET_SIGN_LEVEL", payload: 4 });
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
      mobileNumber: "",
      email: "",
      address: "",
      phoneNubmer: "",
    },
    validationSchema: contactSchema,
    onSubmit,
  });
  return (
    <>
      {state.signInLevel === 3 ? (
        <form onSubmit={handleSubmit} autoComplete="off">
          <Container>
            <Title>۳. اطلاعات تماس خود را بنویسید:</Title>
            <Form>
              <CustomInput
                label="شمارۀ همراه"
                back="#ffffff"
                value={values.mobileNumber}
                onChange={handleChange}
                id="mobileNumber"
              />
              {errors.mobileNumber && touched.mobileNumber && (
                <ErrorText>{errors.mobileNumber}</ErrorText>
              )}
              <CustomInput
                label=" ایمیل"
                back="#ffffff"
                value={values.email}
                onChange={handleChange}
                id="email"
              />
              {errors.email && touched.email && (
                <ErrorText>{errors.email}</ErrorText>
              )}
              <CustomInput
                label=" نشانی"
                back="#ffffff"
                value={values.address}
                onChange={handleChange}
                id="address"
              />
              {errors.address && touched.address && (
                <ErrorText>{errors.address}</ErrorText>
              )}
              <CustomInput
                label=" شمارۀ ثابت"
                back="#ffffff"
                value={values.phoneNubmer}
                onChange={handleChange}
                id="phoneNubmer"
              />
              {errors.phoneNubmer && touched.phoneNubmer && (
                <ErrorText>{errors.phoneNubmer}</ErrorText>
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
          <Title>۳. اطلاعات تماس خود را بنویسید:</Title>
          <Form>
            <CustomInput
              label="شمارۀ همراه"
              back="#ffffff"
              value={state.mobileNumber}
            />

            <CustomInput label=" ایمیل" back="#ffffff" value={state.email} />

            <CustomInput label=" نشانی" back="#ffffff" value={state.address} />

            <CustomInput
              label=" شمارۀ ثابت"
              back="#ffffff"
              value={state.phoneNubmer}
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
