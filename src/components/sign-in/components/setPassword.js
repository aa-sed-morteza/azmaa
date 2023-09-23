import React from "react";
import styled from "styled-components";
import CustomInput from "../../general/customInput";
import Button from "../../general/button";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../../context/userContext";
import { useFormik } from "formik";
import { passSchema } from "../../schema";
import { useSelector , useDispatch } from "react-redux";
import { setpassword } from "../../../redux/slices/setPasswordSlice";



export default function SetPassword() {
  const navigate = useNavigate();
  const { state, dispatch } = useUser();

  const onSubmit = async (values, actions) => {
    // dispatch({ type: "SET_PASSWORD", payload: values.password });
    console.log(values.password);
    dispatchRedux(setpassword(values.password));
    dispatch({ type: "SET_SIGN_LEVEL", payload: 3 });
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
      password: "",
    },
    validationSchema: passSchema,
    onSubmit,
  });

  const dispatchRedux = useDispatch();
  const password = useSelector(state => state.password.password);
  console.log(password);

  return (
    <>
      {state.signInLevel === 2 ? (
        <form onSubmit={handleSubmit} autoComplete="off">
          <Container>
            <Title>۲. رمز عبور خود را تعیین کنید:</Title>
            <Form>
              <CustomInput
                label="نام کاربری"
                back="#ffffff"
                value={state.userName}
              />
              <CustomInput
                label="رمز عبور "
                back="#ffffff"
                value={values.password}
                onChange={handleChange}
                id="password"
              />
              {errors.password && touched.password && (
                <ErrorText>{errors.password}</ErrorText>
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
          <Title>۲. رمز عبور خود را تعیین کنید:</Title>
          <Form>
            <CustomInput
              label="نام کاربری"
              back="#ffffff"
              value={state.userName}
            />
            <CustomInput
              label="رمز عبور "
              back="#ffffff"
              value={password}
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
