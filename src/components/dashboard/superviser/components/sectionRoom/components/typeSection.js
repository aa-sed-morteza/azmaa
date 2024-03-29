import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { typeSchema } from "../../../../../schema";

import Button from "../../../../../general/button";
import text from "../../../../../../assets/text1.webp";
import textGreen from "../../../../../../assets/text-green.webp";
import news from "../../../../../../assets/news.webp";
import newsGreen from "../../../../../../assets/news-green.webp";
import article from "../../../../../../assets/article.webp";
import atricleGreen from "../../../../../../assets/article-green.webp";
import report from "../../../../../../assets/report.webp";
import reportGreen from "../../../../../../assets/report-green.webp";

import { useUser } from "../../../../../context/userContext";

export default function TypeSection() {
  const { state, dispatch } = useUser();
  const [select, setSelect] = useState(0);
  const navigate = useNavigate();

  const onSubmit = async (values, actions) => {
    dispatch({ type: "SET_TYPE_ARTICLE", payload: values.type });
    dispatch({ type: "SET_ADD_ARTICLE", payload: 2 });

    actions.resetForm();
  };

  const { values, errors, touched, handleSubmit, setFieldValue } = useFormik({
    initialValues: {
      type: "",
    },
    validationSchema: typeSchema,
    onSubmit,
  });

  useEffect(()=>{
    if(state.typeArticle=="یادداشت"){
        setSelect(1)
    }else if(state.typeArticle=="خبر"){
        setSelect(2)
    }else if(state.typeArticle == "گزارش"){
        setSelect(3)
    }else if(state.typeArticle == "مقاله"){
        setSelect(4)
    }

  },[state.addArticleLevel !==1])

  

  return (
    <>
      {state.addArticleLevel == 1 ? (
        <form onSubmit={handleSubmit} autoComplete="off">
          <Container>
            <h2>۱. نوع مطلب خود را انتخاب کنید:</h2>
            <RadioButton
              onClick={() => {
                setFieldValue("type", "note");
                setSelect(1);
              }}
            >
              <input
                type="radio"
                name="type"
                value={values.type}
                onChange={() => {
                  setFieldValue("type", "note");
                }}
                checked={values.type == "note"}
              />
              <label htmlFor="text">یادداشت</label>
              <img src={select == 1 ? textGreen : text} />
            </RadioButton>
            <RadioButton
              onClick={() => {
                setFieldValue("type", "news");
                setSelect(2);
              }}
            >
              <input
                type="radio"
                name="type"
                value={values.type}
                onChange={() => {
                  setFieldValue("type", "news");
                }}
                checked={values.type == "news"}
              />
              <label htmlFor="news">خبر</label>
              <img src={select == 2 ? newsGreen : news} />
            </RadioButton>
            <RadioButton
              onClick={() => {
                setFieldValue("type", "report");
                setSelect(3);
              }}
            >
              <input
                type="radio"
                name="type"
                value={values.type}
                onChange={() => {
                  setFieldValue("type", "report");
                }}
                checked={values.type == "report"}
              />
              <label htmlFor="report">گزارش</label>
              <img src={select == 3 ? reportGreen : article} />
            </RadioButton>
            <RadioButton
              onClick={() => {
                setFieldValue("type", "article");
                setSelect(4);
              }}
            >
              <input
                type="radio"
                name="type"
                value={values.type}
                onChange={() => {
                  setFieldValue("type", "article");
                }}
                checked={values.type == "article"}
              />
              <label htmlFor="article">مقاله</label>
              <img src={select == 4 ? atricleGreen : report} />
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
          <h2>۱. نوع مطلب خود را انتخاب کنید:</h2>
          <RadioButton>
            <input
              type="radio"
              name="type"
              value={state.type}
              checked={state.typeArticle == "note"}
            />
            <label htmlFor="text">یادداشت</label>
            <img src={select == 1 ? textGreen : text} />
          </RadioButton>
          <RadioButton>
            <input
              type="radio"
              name="type"
              value={state.type}
              checked={state.typeArticle == "news"}
            />
            <label htmlFor="news">خبر</label>
            <img src={select == 2 ? newsGreen : news} />
          </RadioButton>
          <RadioButton>
            <input
              type="radio"
              name="type"
              value={state.type}
              checked={state.typeArticle == "report"}
            />
            <label htmlFor="report">گزارش</label>
            <img src={select == 3 ? reportGreen : article} />
          </RadioButton>
          <RadioButton>
            <input
              type="radio"
              name="type"
              value={state.type}
              checked={state.typeArticle == "article"}
            />
            <label htmlFor="article">مقاله</label>
            <img src={select == 4 ? atricleGreen : report} />
          </RadioButton>
        </Container>
      )}
    </>
  );
}

const Container = styled.div`
  padding: 18px 20px;
  background-color: #ffffff;
  border-radius: 4px;
  h2 {
    padding-right: 26px;
    color: #707070;
    font-size: 4.651vw;
    font-weight: 400;
    margin: 0;
    margin-bottom: 10px;
  }
  @media(min-width:480px){
    padding:2.083vw 2.604vw;
    h2{
      font-size: 1.458vw;
      margin-bottom: 1.458vw;
    }
 
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

const RadioButton = styled.div`
  padding: 15px;
  display: flex;
  gap: 10px;
  align-items: center;
  background-color: #eaeaea;
  border: 1px solid #eaeaea;
  border-radius: 4px;
  margin-bottom: 10px;
  cursor: pointer;
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
    width:67%;
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
