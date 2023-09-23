import React, { useEffect } from "react";
import styled from "styled-components";
// import wellcome from "../../assets/welcome.webp";
import wellcome from "../assets/well.svg";
import Button from "../components/general/button";
import loginimg from "../assets/log.webp";
import signin from "../assets/signin.webp";
import CustomInput from "../components/general/customInput";
import profile from "../assets/user-log.svg";
import lock from "../assets/lock.webp";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { useUser } from "../components/../context/userContext";
import { logInSchema } from "../components/schema";
import axios from "axios";
import { BaseBackURL } from "../constant/api";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";
import useWidth from "../hook/useWidth";
import { useDispatch, useSelector } from "react-redux";
import { login , logout } from "../redux/slices/isLoginSlice";
import {togglmenu , openmenu , closemenu} from "../redux/slices/menuOpenSlice";

export default function LogIn() {
  const { state, dispatch } = useUser();
  const width = useWidth();
  const navigate = useNavigate();

  const dispatchRedux = useDispatch();

  const islogin = useSelector(state => state.islogin.islogin);
  const ismenuopen = useSelector(state => state.ismenuopen.ismenuopen);

  const onSubmit = (values) => {
    const data = new FormData();
    data.append("username", values.userName);
    data.append("password", values.password);

    let config = {
      method: "post",
      url: `${BaseBackURL}api/v1/accounts/login/`,

      // withCredentials: true,
      data: data,
    };

    axios(config)
      .then((res) => {
        // console.log(res);
        if (res.data.id) {
          toast.success("ورود با موفقیت انجام شد!", {
            position: toast.POSITION.TOP_RIGHT,
          });
          Cookies.set("userId", res.data.id);
          Cookies.set("userName", values.userName);
          // dispatch({ type: "SET_LOGGED_IN", payload: true });
            dispatchRedux(login());
          dispatch({ type: "SET_LOGIN_INFO", payload: { ...res.data } });
          dispatch({ type: "SET_USERNAME", payload: values.userName });
          getToken(values);
          if (res.data.electoral_district_name === null) {
            dispatch({ type: "SET_TYPE_USER", payload: "superviser" });
            Cookies.set("userType", "superviser");
          } else {
            dispatch({ type: "SET_TYPE_USER", payload: "envoy" });
            Cookies.set("userType", "envoy");
          }

          navigate("/dashboard");
          // dispatch({ type: "OPEN_MENU", payload: true });
          dispatchRedux(openmenu());
        } else if (res.data.code === -1) {
          toast.error("نام کاربری یا رمز عبور اشتباه است!", {
            position: toast.POSITION.TOP_RIGHT,
          });
        }
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

  const getToken = (values) => {
    const data = new FormData();
    data.append("username", values.userName);
    data.append("password", values.password);

    let config = {
      method: "post",
      url: `${BaseBackURL}api/token/`,
      data: data,
    };

    axios(config)
      .then((response) => {
        // console.log(JSON.stringify(response.data));
        dispatch({ type: "SET_TOKEN", payload: response.data.access });
        dispatch({ type: "SET_REFRESH_TOKEN", payload: response.data.refresh });
        Cookies.set("refreshToken", response.data.refresh);
        Cookies.set("token", response.data.access);
      })
      .catch((error) => {
        console.log(error);
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
    setFieldValue,
  } = useFormik({
    initialValues: {
      userName: "",
      password: "",
    },
    validationSchema: logInSchema,
    onSubmit,
  });

  // Convert persianNumber to englishNumber
  useEffect(() => {
    setFieldValue(
      "userName",
      values.userName
        .replace(/[٠-٩]/g, (d) => "٠١٢٣٤٥٦٧٨٩".indexOf(d))
        .replace(/[۰-۹]/g, (d) => "۰۱۲۳۴۵۶۷۸۹".indexOf(d))
    );
  }, [values.userName]);

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
            type="password"
            icon={lock}
            back="#f5f5f5"
            id="password"
            value={values.usepasswordrName}
            onChange={handleChange}
            show={true}
          />
          {errors.password && touched.password && (
            <ErrorText>{errors.password}</ErrorText>
          )}
          <Box>
            <Button
              text="ورود"
              background="#095644"
              textColor="#FFFFFF"
              icon={loginimg}
              type="submit"
            />
            <Button
              text="ثبت‌نام"
              background="#inherit"
              borderColor="#095644"
              textColor="#095644"
              simple={true}
              icon={signin}
              click={() => {
                navigate("/sign-in");
              }}
            />
          </Box>
        </Form>
        <Link to="/forget">رمز عبور خود را فراموش کرده‌اید؟</Link>
      </Content>
    </Container>
  );
}

const Container = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
    gap: 1.5vw;
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
