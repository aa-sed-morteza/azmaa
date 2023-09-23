import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CustomInput from "../../general/customInput";
import mobile from "../../../assets/mobile.webp";
import Button from "../../general/button";
import { useFormik } from "formik";
import { useUser } from "../../../context/userContext";
import { phoneSchema } from "../../schema";
import { useNavigate } from "react-router-dom";
import Timer from "../../general/countdown";
import axios from "axios";
import { BaseBackURL } from "../../../constant/api";
import { toast } from "react-toastify";
import Select from "../../general/select";
import Cookies from "js-cookie";

import { useDispatch, useSelector } from "react-redux";
import { timeout , notimeout } from "../../../redux/slices/seTimOutSlice";


export default function SetMobileNumber() {
  const { state, dispatch } = useUser();
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [validate, setValidate] = useState(0);
  const [code, setCode] = useState("");
  const [update, setUpdate] = useState(false);
  const [type, setType] = useState(["نماینده", "ناظر"]);
  const [password, setPassword] = useState("");

  const dispatchRedux = useDispatch();
  const istimeout = useSelector(state => state.istimeout.istimeout);
  

  const checkCode = (e) => {
    e.preventDefault();

    if (code.length === 0) {
      setValidate(2);
    } else {
      const data = new FormData();
      data.append("phone", state.userName);
      if (state.userType == "envoy") {
        data.append("type", "parliament_member");
      } else {
        data.append("type", state.userType);
      }

      data.append("code", code);
      data.append("password", password);

      let config = {
        method: "post",
        url: `${BaseBackURL}api/v1/accounts/signup/`,
        data: data,
      };

      axios(config)
        .then((res) => {
          // console.log(res);
          setValidate(0);
          dispatch({ type: "SET_ID", payload: res.data.id });
          navigate(`/sign-in/${state.userType}`);
          setStep(1);
          getToken(password, state.userName);
        })
        .catch((err) => {
          // console.log(err.response.data);
          if (err.response.data.code) {
            setValidate(0);
            toast.error(err.response.data.code, {
              position: toast.POSITION.TOP_RIGHT,
            });
          } else if (err.response.data.phone) {
            setValidate(0);
            toast.error(err.response.data.phone, {
              position: toast.POSITION.TOP_RIGHT,
            });
          } else {
            setValidate(0);
            toast.error("خطا در ثبت اطلاعات", {
              position: toast.POSITION.TOP_RIGHT,
            });
          }
        });
    }
  };

  const getToken = (pass, user) => {
    const data = new FormData();
    data.append("username", user);
    data.append("password", pass);

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

  useEffect(() => {
    if (state.loggedIn === false) {
      setStep(1);
    }
  }, []);

  useEffect(() => {
    if (state.timeOut) {
      setUpdate(true);
    } else {
      setUpdate(false);
    }
  }, [state.timeOut]);

  const onSubmit = async (values, actions) => {
    dispatch({ type: "SET_USERNAME", payload: values.phoneNember });
    if (values.type == "نماینده") {
      dispatch({ type: "SET_TYPE_USER", payload: "envoy" });
    } else {
      dispatch({ type: "SET_TYPE_USER", payload: "supervisor" });
    }
    // dispatch({ type: "SET_TIME_OUT", payload: false });
    dispatchRedux(notimeout());
    

    const data = new FormData();
    data.append("phone", values.phoneNember);

    let config = {
      method: "post",
      url: `${BaseBackURL}api/v1/accounts/signup/init/`,
      data: data,
    };

    axios(config)
      .then((res) => {
        // console.log(res);
        if (res.data.msg === "otp sent") {
          toast.success("کد ثبت نام برای شما ارسال شد!", {
            position: toast.POSITION.TOP_RIGHT,
          });
          setStep(2);
          actions.resetForm();
        } else if (res.data.msg === "not athurized!") {
          toast.error("شماره شما در سیستم تأیید نشده است.", {
            position: toast.POSITION.TOP_RIGHT,
          });
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error("لطفا دوباره سعی کنید", {
          position: toast.POSITION.TOP_RIGHT,
        });
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
      phoneNember: "",
      type: "",
    },
    validationSchema: phoneSchema,
    onSubmit,
  });

  // Convert persianNumber to englishNumber
  useEffect(() => {
    setFieldValue(
      "phoneNember",
      values.phoneNember
        .replace(/[٠-٩]/g, (d) => "٠١٢٣٤٥٦٧٨٩".indexOf(d))
        .replace(/[۰-۹]/g, (d) => "۰۱۲۳۴۵۶۷۸۹".indexOf(d))
    );
  }, [values.phoneNember]);

  return (
    <Container>
      {step === 1 ? (
        <Form onSubmit={handleSubmit} autoComplete="off">
          <h1>برای ثبت‌نام، شمارۀ همراه خود را وارد کنید.</h1>
          <CustomInput
            label="شمارۀ همراه"
            icon={mobile}
            back="#F5F5F5"
            value={values.phoneNember}
            onChange={handleChange}
            id="phoneNember"
          />
          {errors.phoneNember && touched.phoneNember && (
            <ErrorText>{errors.phoneNember}</ErrorText>
          )}
          <Select
            label="نوع کاربر"
            background="#F5F5F5"
            value={values.type}
            onChange={handleChange}
            options={type}
            white={true}
            id="type"
          />
          {errors.type && touched.type && <ErrorText>{errors.type}</ErrorText>}
          <Box>
            <Button
              text="ثبت"
              textColor="#FFFFFF"
              background="#095644"
              disabled={isSubmitting}
              type="submit"
            />
          </Box>
        </Form>
      ) : (
        <Form onSubmit={checkCode} autoComplete="off">
          {update ? (
            <h1>کد بازیابی به شمارۀ همراه شما فرستاده خواهد شد.</h1>
          ) : (
            <h1>کد بازیابی فرستاده‌شده را وارد کنید.</h1>
          )}

          <CustomInput
            label="کد بازیابی"
            icon={mobile}
            back="#F5F5F5"
            value={code}
            onChange={(e) => {
              setCode(e.target.value);
            }}
          />
          <CustomInput
            label="رمز عبور"
            // icon={mobile}
            back="#F5F5F5"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          {validate === 1 && <ErrorText>کد وارد شده صحیح نیست.</ErrorText>}
          {validate === 2 && (
            <ErrorText>لطفا کد ارسالی را وارد کنید.</ErrorText>
          )}

          {update ? (
            <Box>
              <Button
                text="ارسال کد"
                textColor="#FFFFFF"
                background="#095644"
                type="submit"
                click={() => {
                  // dispatch({ type: "SET_TIME_OUT", payload: false });
                  dispatchRedux(notimeout());
                }}
              />
            </Box>
          ) : (
            <Box>
              <Button
                text="ثبت"
                textColor="#FFFFFF"
                background="#095644"
                type="submit"
              />
            </Box>
          )}

          <Timer />
        </Form>
      )}
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 371px;
  margin: auto;
  gap: 15px;
  h1 {
    margin: 0;
    font-weight: 300;
    font-size: 4.651vw;
    color: #707070;
    max-width: 278px;
    text-align: center;
  }
  @media (min-width: 480px) {
    width: 20%;
    max-width: none;
    gap: 1.302vw;
    h1 {
      font-size: 1.25vw;
      max-width: none;
      margin-bottom: 1.302vw;
    }
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
  @media (min-width: 480px) {
    display: flex;
    & > * {
      margin: auto;
    }
  }
`;
