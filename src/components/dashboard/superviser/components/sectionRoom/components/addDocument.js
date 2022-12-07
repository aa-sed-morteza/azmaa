import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { LinkSchema } from "../../../../../schema/index";

import Button from "../../../../../general/button";

import { useUser } from "../../../../../context/userContext";
import FileUploadInput from "../../../../../general/fileUploadInput";
import CustomInput from "../../../../../general/customInput";

export default function AddDocument() {
  const { state, dispatch } = useUser();
  const navigate = useNavigate();

  const onSubmit = async (values, actions) => {
    dispatch({ type: "SET_DOC_ARTICLE", payload: values });
    dispatch({ type: "SET_ADD_ARTICLE", payload: 1 });
    navigate(`/dashboard/mySection/${state.contentArticle.title}`);
    actions.resetForm();
  };

  const {
    values,
    errors,
    touched,
    handleSubmit,
    handleChange,
    handleBlur,
    setFieldValue,
  } = useFormik({
    initialValues: {
      document: null,
      link: "",
    },
    validationSchema: LinkSchema,
    onSubmit,
  });

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <Container>
        <h2>۴. سند مطلب خود را ثبت کنید:</h2>

        <FileUploadInput
          placeholder="بارگذاری سند"
          id="document"
          name="document"
          onChange={(event) => {
            setFieldValue("document", event.currentTarget.files[0]);
          }}
        />
        {errors.document && touched.document && (
          <ErrorText>{errors.document}</ErrorText>
        )}

        <CustomInput
          label="لینک مطلب"
          back="#FFFFFF"
          value={values.link}
          onChange={handleChange}
          id="link"
        />
        {errors.link && touched.link && <ErrorText>{errors.link}</ErrorText>}
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
          text="ثبت مطلب"
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
  padding: 18px 20px;
  background-color: #ffffff;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  gap: 17px;
  h2 {
    padding-right: 26px;
    color: #707070;
    font-size: 4.651vw;
    font-weight: 400;
    margin: 0;
    margin-bottom: 10px;
  }
  @media (min-width: 480px) {
    padding: 2.083vw 2.604vw;
    h2 {
      font-size: 1.458vw;
      margin-bottom: 1.458vw;
    }
  }
`;

const Box = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 15px;
  @media (min-width: 480px) {
    width: 100%;
    justify-content: center;
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
  @media (min-width: 480px) {
    margin-top: 0;
    font-size: 1.042vw;
  }
`;
