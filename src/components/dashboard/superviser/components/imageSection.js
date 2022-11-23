import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { UploadPictSchema } from "../../../schema";

import Button from "../../../general/button";

import { useUser } from "../../../context/userContext";
import FileUploadInput from "../../../general/fileUploadInput";

export default function ImageSection() {
  const { state, dispatch } = useUser();
  const navigate = useNavigate();

  const onSubmit = async (values, actions) => {
    dispatch({ type: "SET_IMG_ARTICLE", payload: values });
    dispatch({ type: "SET_ADD_ARTICLE", payload: 4 });
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
      picOne: null,
      picTwo: null,
    },
    validationSchema: UploadPictSchema,
    onSubmit,
  });

  console.log(state.imageArticle);

  return (
    <>
      {state.addArticleLevel == 3 ? (
        <form onSubmit={handleSubmit} autoComplete="off">
          <Container>
            <h2>۳. تصویر مطلب را بارگذاری کنید:</h2>

            <FileUploadInput
              placeholder="بارگذاری تصویر اصلی"
              id="picOne"
              name="picOne"
              onChange={(event) => {
                setFieldValue("picOne", event.currentTarget.files[0]);
              }}
            />
            {errors.picOne && touched.picOne && (
              <ErrorText>{errors.picOne}</ErrorText>
            )}
            <FileUploadInput
              placeholder="بارگذاری تصویر دوم"
              id="picTwo"
              name="picTwo"
              onChange={(event) => {
                setFieldValue("picTwo", event.currentTarget.files[0]);
              }}
            />
            {errors.picTwo && touched.picTwo && (
              <ErrorText>{errors.picTwo}</ErrorText>
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
          <h2>۳. تصویر مطلب را بارگذاری کنید:</h2>
          <FileUploadInput
            placeholder="بارگذاری تصویر اصلی"
            id="picOne"
            name="picOne"
            value={state.imageArticle.picOne.file}
          />
          <FileUploadInput
            placeholder="بارگذاری تصویر دوم"
            id="picTwo"
            name="picTwo"
            value={state.imageArticle.picTwo.file}
          />
        </Container>
      )}
    </>
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
