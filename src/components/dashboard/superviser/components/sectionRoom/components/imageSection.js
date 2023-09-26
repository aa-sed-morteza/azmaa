import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { UploadPictSchema } from "../../../../../schema";

import Button from "../../../../../general/button";

import { useUser } from "../../../../../../context/userContext";
import FileUploadInput from "../../../../../general/fileUploadInput";
import { useDispatch, useSelector } from "react-redux";
import { setArticleLevel } from "../../../../../../redux/slices/addArticleLevelSlice";
import { setimgArticle } from "../../../../../../redux/slices/setImgArticleSlice";

export default function ImageSection() {
  const { state, dispatch } = useUser();
  const navigate = useNavigate();
  const dispathRedux = useDispatch();
  const addArticleLevel = useSelector(state => state.addArticleLevel.addArticleLevel);
  const imageArticle = useSelector (state => state.imageArticle.imageArticle);

  const onSubmit = async (values, actions) => {
    // dispatch({ type: "SET_IMG_ARTICLE", payload: values });
    dispathRedux(setimgArticle(values));
    // dispatch({ type: "SET_ADD_ARTICLE", payload: 4 });
    dispathRedux(setArticleLevel(4));
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

  return (
    <>
      {addArticleLevel == 3 ? (
        <form onSubmit={handleSubmit} autoComplete="off">
          <Container>
            <h2>۳. تصویر مطلب را بارگذاری کنید:</h2>

            <FileUploadInput
              placeholder={
                values.picOne == null
                  ? "بارگذاری تصویر اصلی"
                  : "تصویر دریافت شد"
              }
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
              placeholder={
                values.picTwo == null ? "بارگذاری تصویر دوم" : "تصویر دریافت شد"
              }
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
          <h2>۳. تصویر مطلب را بارگذاری کنید:</h2>
          <FileUploadInput
            placeholder="بارگذاری تصویر اصلی"
            id="picOne"
            name="picOne"
            value={imageArticle.picOne.file}
          />
          <FileUploadInput
            placeholder="بارگذاری تصویر دوم"
            id="picTwo"
            name="picTwo"
            value={
              imageArticle.picTwo ? imageArticle.picTwo.file : null
            }
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
