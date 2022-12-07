import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CustomInput from "../../general/customInput";
import mobile from "../../../assets/mobile.webp";
import Button from "../../general/button";
import { useFormik } from "formik";
import { useUser } from "../../context/userContext";
import { phoneSchema } from "../../schema";
import { useNavigate } from "react-router-dom";
import Timer from "../../general/countdown";

export default function SetMobileNumber() {
  const { state, dispatch } = useUser();
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [validate, setValidate] = useState(0);
  const [code, setCode] = useState("");
  const [update, setUpdate] = useState(false);

  const checkCode = (e) => {
    e.preventDefault();

    if (code.length === 0) {
      setValidate(2);
    }
    if (code !== state.sms) {
      setValidate(1);
    }

    if (code === state.sms && state.userName === "09126897522") {
      setValidate(0);
      dispatch({ type: "SET_TYPE_USER", payload: "superviser" });
      navigate("/sign-in/supervisor");
    }

    if (code === state.sms && state.userName === "09191089781") {
      setValidate(0);
      dispatch({ type: "SET_TYPE_USER", payload: "envoy" });
      navigate("/sign-in/envoy");
    }
  };

  useEffect(() => {
    if (state.userName === "") {
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
    dispatch({ type: "SET_TIME_OUT", payload: false });
    setStep(2);
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
      phoneNember: "",
    },
    validationSchema: phoneSchema,
    onSubmit,
  });

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
              click={()=>{dispatch({ type: "SET_TIME_OUT", payload: false });}}
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
  @media(min-width:480px){
    width: 20%;
    max-width: none;
    gap:1.302vw;
    h1{
      font-size:1.250vw;
      max-width:none;
      margin-bottom:1.302vw;
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
  @media(min-width:480px){
    margin-top:0;
    font-size:1.042vw;
  }
`;

const Box=styled.div`
  @media(min-width:480px){
    display:flex;
    &>*{
      margin:auto;
    }
  }
`
