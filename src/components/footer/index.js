import React from "react";
import styled from "styled-components";
import data from "../../data.json";
import azmma from "../../assets/azma-black.svg";
import { toFarsiNumber } from "../../utils";

const FooterContainer = styled.section`
  background-color: #095644;
  padding: 19px 20px;

  @media (min-width: 481px) {
    display: flex;
    justify-content: space-between;
  }
  @media (min-width: 769px) {
    padding: 30px 10%;
  }
`;

const AboutUs = styled.div`
  display: none;
  @media (min-width: 481px) {
    display: flex;
    width: 50%;
    flex-direction: column;
    h4 {
      color: #dff5f0;
      font-size: 1.87vw;
      font-weight: bold;
      margin: 0;
    }
    p {
      color: #dff5f0;
      font-size: 1.25vw;
      font-weight: light;
      line-height: 2.344vw;
      text-align: justify;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 4;
      line-clamp: 4;
      -webkit-box-orient: vertical;
      margin-top: 5px;
      margin-bottom: 0;
    }
  }

  @media (min-width: 769px) {
    width: 55%;
    h4 {
      font-size: 1.2vw;
    }
    p {
      font-size: 0.9vw;
    }
  }
`;

const ContactUs = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 25vw;
  gap: 10px;
  & > a {
    display: flex;
    width: 50px;
    height: 50px;
    flex-shrink: 0;
    background: #ffaa00;
    border-radius: 3px;
    justify-content: center;
    align-items: center;
    & > img {
      width: 40px;
      height: 40px;
      object-fit: contain;
    }
  }

  @media (max-width: 480px) {
    max-width: 100vw;
    gap: 1vw;
  }
`;

const Copyright = styled.div`
  min-height: 42px;
  background-color: #ffffff;
  display: flex;
  p {
    margin: auto;
    color: #cbcbcb;
    white-space: nowrap;
    display: flex;
    align-items: center;
    gap: 5px;
    span {
      background-image: url(${azmma});
      background-size: contain;
      background-repeat: no-repeat;
      width: 29px;
      height: 24px;
    }
  }
`;

export default function Footer() {
  const contactItem = data.footer.map((x, i) => {
    return (
      <a href={x.href} className="item" key={x.href + i}>
        <img src={x.icon} />
      </a>
    );
  });

  return (
    <div style={{ marginTop: "auto" }}>
      <FooterContainer>
        <ContactUs>{contactItem}</ContactUs>
        <AboutUs>
          <h4>کمی در بارۀ ازما:</h4>
          <p>
            جنبش ازما در آستانه انتخابات یازدهمین دوره مجلس شورای اسلامی با
            اعتقاد به این که خانه ملت از آن مردم ایران است فعالیت خود را آغاز و
            با محور قرار دادن سه ارزش شایسته‌گزینی، شفافیت و پاسخگویی به منظور
            بسط عدالت در عرصه قدرت ابزارها و فرآیندهایی را طراحی و اجرا کرد.{" "}
          </p>
        </AboutUs>
      </FooterContainer>
      <Copyright>
        <p>
          همۀ حقوق نزد <span></span> محفوظ است.
        </p>
      </Copyright>
    </div>
  );
}
