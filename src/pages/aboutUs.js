import React from "react";
import styled from "styled-components";

export default function AboutMe() {
  return (
    <Content>
      <p className="text">جنبش ازما در آستانه انتخابات یازدهمین دوره مجلس شورای اسلامی با اعتقاد به این که خانه ملت از آن مردم ایران است فعالیت خود را آغاز و با محور قرار دادن سه ارزش شایسته‌گزینی، شفافیت و پاسخگویی به منظور بسط عدالت در عرصه قدرت ابزارها و فرآیندهایی را طراحی و اجرا کرد. اما نیک می‌دانیم که سازوکارهای فعلی تعامل و ارتباط مردم با نمایندگان خود در مجلس شورای اسلامی به قدری ناکافی و معیوب هستند، که عمدتا مطالبات و مسائل اصلی مردم جایی در صدر اولویت‌های کاری مجلس ندارد و متاسفانه رسانه‌ها نیز یا بدلیل مرکزگرایی و یا بدلیل توان کم، قادر به رفع این نقص نبوده‌اند.</p>
    </Content>
  );
}

const Content = styled.div`

  width: 90%;
  margin: 10vw auto;
  .text {
    margin: 0;
    font-weight: 400;
    font-size: 24px;
    line-height: 41px;
    text-align: justify;
    color: #707070;
  }
  @media (max-width: 481px) {
    padding-top: 10vw;
    padding-bottom: 4vw;
  }
`;
