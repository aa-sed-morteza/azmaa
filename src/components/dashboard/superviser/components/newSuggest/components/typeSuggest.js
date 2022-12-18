import React, { useState } from "react";
import styled from "styled-components";
import { suggestSchema } from "../../../../../schema/index";
import Button from "../../../../../general/button";
import { useUser } from "../../../../../context/userContext";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";


export default function TypeSuggest() {
  const { state, dispatch } = useUser();
  const navigate = useNavigate();
  const [select, setSelect] = useState(0);

  const onSubmit = async (values, actions) => {
    dispatch({ type: "SET_SUGGET_TYPE", payload: values.type });
    dispatch({ type: "SET_SUGGEST_LEVEL", payload: 2 });
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
    setFieldValue,
  } = useFormik({
    initialValues: {
      type: "",
    },
    validationSchema: suggestSchema,
    onSubmit,
  });


  return (
    <>
      {state.addSuggestLevel === 1 ? (
        <form onSubmit={handleSubmit} autoComplete="off">
          <Container>
            <Title>۱. درخواست خود را انتخاب کنید:</Title>
            <RadioButton
              onClick={() => {
                setFieldValue("type", "ثبت فعالیت");
                setSelect(1);
              }}
            >
              <input
                type="radio"
                name="type"
                value={values.type}
                onChange={() => {
                  setFieldValue("type", "ثبت فعالیت");
                }}
                checked={values.type == "ثبت فعالیت"}
              />
              <label htmlFor="type">ثبت فعالیت</label>
            </RadioButton>
            <RadioButton
              onClick={() => {
                setFieldValue("type", "ثبت مطلب");
                setSelect(2);
              }}
            >
              <input
                type="radio"
                name="type"
                value={values.type}
                onChange={() => {
                  setFieldValue("type", "ثبت مطلب");
                }}
                checked={values.type == "ثبت مطلب"}
              />
              <label htmlFor="type">ثبت مطلب</label>
            </RadioButton>

            <RadioButton
              onClick={() => {
                setFieldValue("type", "ویرایش فعالیت");
                setSelect(3);
              }}
            >
              <input
                type="radio"
                name="type"
                value={values.type}
                onChange={() => {
                  setFieldValue("type", "ویرایش فعالیت");
                }}
                checked={values.type == "ویرایش فعالیت"}
              />
              <label htmlFor="type">ویرایش فعالیت</label>
            </RadioButton>

            <RadioButton
              onClick={() => {
                setFieldValue("type", "سایر");
                setSelect(4);
              }}
            >
              <input
                type="radio"
                name="type"
                value={values.type}
                onChange={() => {
                  setFieldValue("type", "سایر");
                }}
                checked={values.type == "سایر"}
              />
              <label htmlFor="type">سایر</label>
            </RadioButton>

            {errors.type && touched.type && (
              <ErrorText>{errors.type}</ErrorText>
            )}
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
      ) : (
        <Container>
          <Title>۱. درخواست خود را انتخاب کنید:</Title>

          <RadioButton>
            <input
              type="radio"
              name="type"
              value={state.suggestType}
              checked={state.suggestType == "ثبت فعالیت"}
            />
            <label htmlFor="text">ثبت فعالیت</label>
          </RadioButton>

          <RadioButton>
            <input
              type="radio"
              name="type"
              value={state.suggestType}
              checked={state.suggestType == "ثبت مطلب"}
            />
            <label htmlFor="text">ثبت مطلب</label>
          </RadioButton>

          <RadioButton>
            <input
              type="radio"
              name="type"
              value={state.suggestType}
              checked={state.suggestType == "ویرایش فعالیت"}
            />
            <label htmlFor="text">ویرایش فعالیت</label>
          </RadioButton>

          <RadioButton>
            <input
              type="radio"
              name="type"
              value={state.suggestType}
              checked={state.suggestType == "سایر"}
            />
            <label htmlFor="text">سایر</label>
          </RadioButton>
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
  color: #707070;
  font-size: 4.651vw;
  font-weight: 400;
  margin-bottom: 10px;
  @media (min-width: 480px) {
    font-size: 1.458vw;
    margin-bottom: 1.458vw;
  }
`;

const Box = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 15px;
  @media(min-width:480px){
    width:100%;
    justify-content:center;
    margin: 1.302vw auto;
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
    font-size:1.042vw
  }
`;

const RadioButton = styled.div`
  padding: 15px;
  display: flex;
  gap: 10px;
  align-items: center;
  background-color: #eaeaea;
  border: 1px solid #eaeaea;
  border-radius: 4px;
  margin-bottom: 10px;
  input {
    width: 28px;
    height: 28px;
    color: 9F9F9F;
    accent-color: cadetblue;
  }
  label {
    color: #9f9f9f;
    font-size: 4.651vw;
    font-weight: 300;
  }
  img {
    width: 25px;
    heright: 30px;
    margin-right: auto;
  }
  &:has(input[type="radio"]:checked) {
    background-color: #dff5f0;
    border: 1px solid #6cbba9;
    label {
      color: #095644;
      font-weight: 400;
    }
  }
  @media(min-width:480px){
    width:80%;
    margin:1.042vw auto;
    input{
      width:1.563vw;
      height:1.563vw;
    }
    label{
      font-size:1.563vw;
    }
    img{
      width:2.604vw;
      height:2.604vw;
    }
  }
`;
