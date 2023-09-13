import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { contentSchema } from "../../../../../schema";

import Button from "../../../../../general/button";
import CustomInput from "../../../../../general/customInput";

import { useUser } from "../../../../../../context/userContext";

export default function ContentSection() {
  const { state, dispatch } = useUser();
  const navigate = useNavigate();

  const onSubmit = async (values, actions) => {
    dispatch({ type: "SET_CONTENT_ARTICLE", payload: values });
    dispatch({ type: "SET_ADD_ARTICLE", payload: 3 });
    actions.resetForm();
  };

  const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
    useFormik({
      initialValues: {
        title: "",
        expand: "",
      },
      validationSchema: contentSchema,
      onSubmit,
    });

  return (
    <>
      {state.addArticleLevel == 2 ? (
        <form onSubmit={handleSubmit} autoComplete="off">
          <Container>
            <h2>۲. محتوای مطلب را بنویسید:</h2>

            <CustomInput
              label="درج عنوان"
              id="title"
              value={values.title}
              onChange={handleChange}
              back="#FFFFFF"
            />
            {errors.title && touched.title && (
              <ErrorText>{errors.title}</ErrorText>
            )}

            <CustomInput
              label="درج متن "
              id="expand"
              value={values.expand}
              onChange={handleChange}
              back="#FFFFFF"
              type="textarea"
            />
            {errors.expand && touched.expand && (
              <ErrorText>{errors.expand}</ErrorText>
            )}
          </Container>
          <Box>
            <Button
              text="لغو"
              textColor="#095644"
              borderColor="#095644"
              width="35%"
              simple={true}
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
          <h2>۲. محتوای مطلب را بنویسید:</h2>
          <CustomInput
            label="درج عنوان"
            value={state.contentArticle.title}
            back="#FFFFFF"
          />
          <CustomInput
            label="درج متن "
            value={state.contentArticle.expand}
            back="#FFFFFF"
            type="textarea"
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
