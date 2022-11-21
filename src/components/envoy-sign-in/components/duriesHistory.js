import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CustomInput from "../../general/customInput";
import Button from "../../general/button";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../context/userContext";
import { useFormik } from "formik";
import { contactSchema } from "../../schema";
import { dutieHistoryAreaSchema } from "../../schema";
import DutieForm from "./dutieForm";

export default function DutiesHistory() {
  const navigate = useNavigate();
  const { state, dispatch } = useUser();
  const [count, setCount] = useState(1);
  const [check, setCkeck] = useState(false);

  const checkAddHistory = () => {
    setCkeck(true);
    setCount(count + 1);
  };

  const abs = () => {
    setCkeck(false);
  };

  const ddd = ()=>{
    return <DutieForm id={count} key={count}/>;
  }

  useEffect(() => {
    abs();
  }, [count]);

  const onSubmit = async (values, actions) => {
    dispatch({ type: "SET_DUTIE_HISTORY", payload: values });
    dispatch({ type: "SET_SIGN_LEVEL", payload: 1 });
    actions.resetForm();
    navigate("/dashboard");
    console.log('state',state.dutieHistory);
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
      dutie: "",
      dateFrom: "",
      dateTo: "",
    },
    validationSchema: dutieHistoryAreaSchema,
    onSubmit,
  });

  return (
    <>
      {state.signInLevel === 5 ? (
        <form onSubmit={handleSubmit} autoComplete="off">
          <Container>
            <Title>۵. سوابق و مسئولیت‌های پیشین خود را بنویسید:</Title>
            <Form>
              <DutieForm id={1} value={values} onChange={handleChange} errors={errors} touched={touched} setDate={setFieldValue} />
              {/* {ddd()} */}
              <AddHistory onClick={checkAddHistory}>
                <p className="text">افزودن سابقه</p>
              </AddHistory>
             
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
              text={state.signInLevel===5 ? "تبت نام":"ثبت"}
              textColor="#FFFFFF"
              background="#095644"
              width="62%"
              type="submit"
            />
          </Box>
        </form>
      ) : (
        <Container></Container>
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



const AddHistory = styled.div`
  border: 1px solid #9f9f9f;
  border-radius: 4px;
  padding: 6px;
  .text {
    color: #9f9f9f;
    font-size: 3.721vw;
    font-weight: 300;
    margin: 0;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    &:before {
      content: "+";
      display: inline-flex;
      justify-items: center;
      color: #9f9f9f;
      font-size: 3.721vw;
      font-weight: 300;
    }
  }
`;
