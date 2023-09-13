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
  & > .item {
    display: inline-block;
    margin-bottom: 10px;
    gap: 17px;
    align-items:center;
    padding: 5px 5px 5px 5px;
    span {
      width: 45px;
      height: 40px;
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }

    // .content {
    //   width: 85%;
    //   background-color: #f3f3f3;
    //   border-radius: 4px;
    //   display: flex;
     
      // a {
      //   margin: auto 10px;
      //   color: #095644;
      //   text-decoration: none;
      //   width: 100%;
      //   text-align: left;
      //   font-size: 5.85vw;
      //   font-weight: light;
      //   direction: ltr;
      // }
    }
  }

  @media (min-width: 481px) {
    width: 40%;
    & > .item {
      // margin-bottom: 20px;
     
      .content {
        width: 80%;
        height:55px;
        a {
          font-size: 1.87vw;
        }
      }
    }
  }

  @media (min-width: 769px) {
    width: 40%;
    display: grid;
      grid-template-columns: repeat(5,4vw);
    & > .item {
      // margin-bottom: 20px;
    
      .content {
        width: auto;
        height:55px;
        a {
          font-size: 1.87vw;
        }
      }
    }
  }
  @media (min-width: 1025px) {
    & > .item {
      .content {
        height:2.5vw;
       
      }
    }
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
      <div className="item" key={i}>
        <div className="content">
          <a href={x.href}>
            <span>
              <img src={x.icon} />
            </span>
          </a>
        </div>
      </div>
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
