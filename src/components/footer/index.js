import React from "react";
import styled from "styled-components";
import data from "../../data.json";
import azmma from "../../assets/azmaa.webp";
import {toFarsiNumber} from "../../utils"

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
  @media(min-width:481px){
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
      font-size: 1.87vw;
    }
    p {
      font-size: 1.25vw;
    }
  }
`;

const ContactUs = styled.div`
  & > .item {
    display: flex;
    margin-bottom: 10px;
    gap: 17px;
    align-items:center;

    span {
      width: 45px;
      height: 40px;
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }

    .content {
      width: 85%;
      background-color: #f3f3f3;
      border-radius: 4px;
      display: flex;
     
      a {
        margin: auto 10px;
        color: #095644;
        text-decoration: none;
        width: 100%;
        text-align: left;
        font-size: 5.85vw;
        font-weight: light;
        direction: ltr;
      }
    }
  }

  @media (min-width: 481px) {
    width: 45%;
    & > .item {
      margin-bottom: 10px;
      span {
        width: 50px;
        height: 50px;
      }
      .content {
        width: 70%;
        height:43px;
        a {
          font-size: 1.87vw;
        }
      }
    }
  }

  @media (min-width: 769px) {
    width: 40%;
    & > .item {
      // margin-bottom: 20px;
      span {
        width: 76px;
        height: 67px;
      }
      .content {
        width: 80%;
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
        height:67px;
       
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
    span {
      background-image: url(${azmma});
      background-size: contain;
      padding-right: 5px;
      padding-left: 5px;
      opacity: 0.5;
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
        <span>
          <img src={x.icon} />
        </span>
        <div className="content">
          <a target="_blank" href={x.href}>
            {x.contact}
          </a>
        </div>
      </div>
    );
  });

  return (
    <div>
      <FooterContainer>
        <ContactUs>{contactItem}</ContactUs>
        <AboutUs>
          <h4>کمی در بارۀ ازما:</h4>
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
            متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان
            رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد
            کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه
            راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل
            حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود
            طراحی اساسا مورد استفاده قرار گیرد.
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
