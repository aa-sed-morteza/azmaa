import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useIsVisible } from "../hook/useIsVisible";
import { useTrail, animated } from "react-spring";

export default function AboutMe() {

  const AboutContainerRef = useRef(null);

  const isVisible = useIsVisible(AboutContainerRef);
  const [isseen , setIsseen] = useState(false);
    useEffect( 
    () => {
      if(isVisible) {
        setIsseen(true);
      }
    }
    , [isVisible])

  const trails = useTrail(8, {
    from: { opacity: 0 },
    to: { opacity: isseen ? 1 : 0 },
    config: { duration: 300 },
    delay: 100,
  });
  return (
    <Content ref={AboutContainerRef}>
       <animated.div style={trails[3]}>
         <p className="text">جنبش ازما در آستانه انتخابات یازدهمین دوره مجلس شورای اسلامی با اعتقاد به این که خانه ملت از آن مردم ایران است فعالیت خود را آغاز و با محور قرار دادن سه ارزش شایسته‌گزینی، شفافیت و پاسخگویی به منظور بسط عدالت در عرصه قدرت ابزارها و فرآیندهایی را طراحی و اجرا کرد. اما نیک می‌دانیم که سازوکارهای فعلی تعامل و ارتباط مردم با نمایندگان خود در مجلس شورای اسلامی به قدری ناکافی و معیوب هستند، که عمدتا مطالبات و مسائل اصلی مردم جایی در صدر اولویت‌های کاری مجلس ندارد و متاسفانه رسانه‌ها نیز یا بدلیل مرکزگرایی و یا بدلیل توان کم، قادر به رفع این نقص نبوده‌اند.</p>
         </animated.div>
    </Content>
  );
}

const Content = styled.div`

  width: 90%;
  margin: 5vw auto;
  .text {
    margin: 0;
    font-weight: 400;
    font-size: 1.25vw;
    line-height: 41px;
    text-align: justify;
    color: #707070;
    @media (max-width: 481px){
      font-size: 3.725vw;
    }
  }
  @media (max-width: 481px) {
    padding-top: 10vw;
    padding-bottom: 4vw;
   
  }
`;
