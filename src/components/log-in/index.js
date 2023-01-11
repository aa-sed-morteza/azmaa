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
import axios from "axios";
import { BaseBackURL } from "../../constant/api";
import { toast } from "react-toastify";

export default function LogIn() {
  const { state, dispatch } = useUser();
  const navigate = useNavigate();

  const onSubmit = (values) => {
    const data = new FormData();
    data.append("username", values.userName);
    data.append("password", values.password);

    let config = {
      method: "post",
      url: `${BaseBackURL}api/v1/accounts/login/`,
      data: data,
    };

    axios(config)
      .then((response) => {
        toast.success("ورود با موفقیت انجام شد!", {
          position: toast.POSITION.TOP_RIGHT,
        });
        console.log(JSON.stringify(response.data));
        dispatch({ type: "SET_LOGGED_IN", payload: true });
        navigate("/dashboard");
      })
      .catch((error) => {
        console.log(error);
        if (error.response.data.msg === "authentication failed") {
          toast.error("احراز هویت ناموفق بود", {
            position: toast.POSITION.TOP_RIGHT,
          });
        } else {
          toast.error("ایمیل یا رمز عبور اشتباه است!", {
            position: toast.POSITION.TOP_RIGHT,
          });
        }
      });
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
          <Box>
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
          </Box>
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
  @media (min-width: 480px) {
    width: 40%;
    gap: 1.302vw;
  }
`;

const Header = styled.div`
  background-image: url(${wellcome});
  background-size: contain;
  background-repeat: no-repeat;
  width: 192px;
  height: 41px;
  margin-bottom: 4px;
  @media (min-width: 480px) {
    width: 13.333vw;
    height: 2.865vw;
  }
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
  @media (min-width: 480px) {
    gap: 1.302vw;
  }
`;

const Link = styled.p`
  margin: 0;
  color: #ffaa00;
  font-weight: 300;
  font-size: 3.721vw;
  @media (min-width: 480px) {
    font-size: 1.25vw;
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

const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  @media (min-width: 480px) {
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`;
