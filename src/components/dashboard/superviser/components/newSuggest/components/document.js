import React, { useState } from "react";
import styled from "styled-components";
import { documentSchema } from "../../../../../schema/index";
import Button from "../../../../../general/button";
import { useUser } from "../../../../../context/userContext";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import CustomInput from "../../../../../general/customInput";
import FileUploadInput from "../../../../../general/fileUploadInput";

export default function SuggestDocument() {
  const { state, dispatch } = useUser();
  const navigate = useNavigate();

  const onSubmit = async (values, actions) => {
    // dispatch({ type: "SET_SUGGET_TYPE", payload: values.type });
    dispatch({ type: "SET_SUGGEST_LEVEL", payload: 1 });
    navigate('/dashboard/inbox');
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
      document: null,
      expand: "",
    },
    validationSchema: documentSchema,
    onSubmit,
  });

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <Container>
        <Title>۲. سند درخواست خود را بارگذاری کنید:</Title>

        <Form>
          <FileUploadInput
            placeholder="بارگذاری سند"
            id="document"
            onChange={(event) => {
              setFieldValue("document", event.currentTarget.files[0]);
            }}
          />

          <CustomInput
            label="درج توضیحات (اختیاری)"
            value={values.expand}
            onChange={handleChange}
            id="expand"
            type="textarea"
            back="#FFFFFF"
          />
        </Form>

        {errors.document && touched.document && (
          <ErrorText>{errors.document}</ErrorText>
        )}
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
          text="ثبت درخواست"
          textColor="#FFFFFF"
          background="#095644"
          width="62%"
          type="submit"
        />
      </Box>
    </form>
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

const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;


