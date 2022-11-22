import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../../../general/button";
import text from "../../../../assets/text.png";
// import greenText from ""

export default function AddSection() {
  const navigate = useNavigate();
  return (
    <Container>
      <Section>
        <h2>۱. نوع مطلب خود را انتخاب کنید:</h2>
        <RadioButton
          onClick={() => {
            document.getElementById("firstRadio").checked = true;
          }}
        >
          <input type="radio" value="text" name="type" id="firstRadio" />
          <label for="text">یادداشت</label>
          <img src={text} />
        </RadioButton>
        <RadioButton
          onClick={() => {
            document.getElementById("secondRadio").checked = true;
          }}
        >
          <input type="radio" value="news" name="type" id="secondRadio" />
          <label for="news">خبر</label>
          <img src={text} />
        </RadioButton>
        <RadioButton
          onClick={() => {
            document.getElementById("thirdRadio").checked = true;
          }}
        >
          <input type="radio" value="report" name="type" id="thirdRadio" />
          <label for="report">گزارش</label>
          <img src={text} />
        </RadioButton>
        <RadioButton
          onClick={() => {
            document.getElementById("fouthRadio").checked = true;
          }}
        >
          <input type="radio" value="article" name="type" id="fouthRadio" />
          <label for="article">مقاله</label>
          <img src={text} />
        </RadioButton>
      </Section>
      <Section>
        <h2>۲. محتوای مطلب را بنویسید:</h2>
      </Section>
      <Section>
        <h2>۳. تصویر مطلب را بارگذاری کنید:</h2>
      </Section>
      <Section>
        <h2>۴. سند مطلب خود را ثبت کنید:</h2>
      </Section>
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
          text="ثبت مطلب"
          textColor="#FFFFFF"
          background="#095644"
          width="62%"
          type="submit"
        />
      </Box>
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Section = styled.div`
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
`;

const Box = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 15px;
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
`;
