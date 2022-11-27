import React, { useState } from "react";
import styled from "styled-components";
import wellcome from "../../assets/welcome.webp";
import Button from "../general/button";
import login from "../../assets/log.webp";
import signin from "../../assets/signin.webp";
import CustomInput from "../general/customInput";
import profile from "../../assets/profile.webp";
import lock from "../../assets/lock.webp";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { useUser } from "../context/userContext";
import { logInSchema } from "../schema";

export default function LogIn() {
  const { state, dispatch } = useUser();
  const navigate = useNavigate();

  const onSubmit = async () => {
    dispatch({ type: "SET_LOGGED_IN", payload: true });
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
      userName: "",
      password: "",
    },
    validationSchema: logInSchema,
    onSubmit,
  });

  return (
    <Container>
      <Content>
        <Header></Header>
        <Form onSubmit={handleSubmit} autoComplete="off">
          <CustomInput
            label="نام کاربری"
            icon={profile}
            back="#f5f5f5"
            id="userName"
            value={values.userName}
            onChange={handleChange}
          />
          {errors.userName && touched.userName && (
            <ErrorText>{errors.userName}</ErrorText>
          )}
          <CustomInput
            label="رمز عبور"
            icon={lock}
            back="#f5f5f5"
            id="password"
            value={values.usepasswordrName}
            onChange={handleChange}
          />
          {errors.password && touched.password && (
            <ErrorText>{errors.password}</ErrorText>
          )}
          <Button
            text="ورود"
            background="#095644"
            textColor="#FFFFFF"
            icon={login}
            type="submit"
          />
          <Button
            text="ثبت‌نام"
            background="#inherit"
            borderColor="#095644"
            textColor="#095644"
            icon={signin}
            click={() => {
              navigate("/sign-in");
            }}
          />
        </Form>
        <Link>رمز عبور خود را فراموش کرده‌اید؟</Link>
      </Content>
    </Container>
  );
}

const Container = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  jusctify-content: center;
  overflow: hidden;
`;

const Content = styled.div`
  margin: auto;
  width: 86%;
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
`;

const Header = styled.div`
  background-image: url(${wellcome});
  background-size: contain;
  background-repeat: no-repeat;
  width: 192px;
  height: 41px;
  margin-bottom: 4px;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Link = styled.p`
  margin: 0;
  color: #ffaa00;
  font-weight: 300;
  font-size: 3.721vw;
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
