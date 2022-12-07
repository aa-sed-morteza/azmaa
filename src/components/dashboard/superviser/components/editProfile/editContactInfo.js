import React from "react";
import styled from "styled-components";
import CustomInput from "../../../../general/customInput";
import Button from "../../../../general/button";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../../../context/userContext";
import { useFormik } from "formik";
import { contactSchema } from "../../../../schema";

export default function EditContactInformation() {
  const navigate = useNavigate();
  const { state, dispatch } = useUser();

  const onSubmit = async (values, actions) => {
    dispatch({ type: "SET_MOBILEN", payload: values.mobileNumber });
    dispatch({ type: "SET_MAIL", payload: values.email });
    dispatch({ type: "SET_ADDRESS", payload: values.address });
    dispatch({ type: "SET_PHONEN", payload: values.phoneNubmer });
    dispatch({ type: "SET_SIGN_LEVEL", payload: 1 });
    dispatch({ type: "SET_LOGGED_IN", payload: true });
    actions.resetForm();
    navigate("/dashboard");
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
      mobileNumber: state.mobileNumber,
      email: state.email,
      address: state.address,
      phoneNubmer: state.phoneNubmer,
    },
    validationSchema: contactSchema,
    onSubmit,
  });
  return (
    <Wraper>
      <FirstTitle>
        <p className="home">پنل / </p>
        <p className="component"> ویرایش اطلاعات تماس </p>
      </FirstTitle>
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
              navigate(-1);
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
  margin-top: 15px;
  @media(min-width:480px){
    padding:2.083vw 2.604vw;
  }
`;
const Title = styled.h2`
  padding-right: 36px;
  margin: 0;
  color: #9f9f9f;
  font-size: 4.651vw;
  font-weight: 300;
  margin-bottom: 10px;
  @media(min-width:480px){
    font-size:1.250vw;
    margin-bottom:1.042vw;
  }
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  @media(min-width:480px){
    width:90%;
    gap:1.302vw;
  }
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
