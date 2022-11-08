import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import pic from "../../../assets/poster.png";
import icon from "../../../assets/text.png";
import more from "../../../assets/more.png";

const Container = styled.div`
  background: #ffffff;
  border-radius: 4px;
  margin-bottom: 15px;
`;

const Picture = styled.div`
  width: 100%;
  height: auto;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const Content = styled.div`
  padding: 8px 22px 18px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const HeadContent = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Type = styled.p`
  color: #707070;
  font-weight: 300;
  font-size: 3.721vw;
  margin: 0;
  position: relative;
  padding-right: 20px;
  &:before {
    content: "";
    display: block;
    background-image: url(${icon});
    background-size: cover;
    background-repeat: no-repeat;
    position: absolute;
    width: 14px;
    height: 17px;
    right: 0;
    top: 2px;
  }
`;

const Date = styled.p`
  margin: 0;
  font-weight: 700;
  font-size: 3.256vw;
  color: rgba(0, 0, 0, 0.2);
`;

const Title = styled.h1`
  margin: 0;
  color: #707070;
  font-weight: 400;
  font-size: 4.651vw;
  line-height: 8.14vw;
`;

const Paragraph = styled.p`
  margin: 0;
  color: #707070;
  font-size: 3.721vw;
  line-height: 6.512vw;
  font-weight: 300;
  color: #707070;
  text-align: justify;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  text-overflow: ellipsis;
  overflow: hidden;
  -webkit-line-clamp: 3;
`;

const ShowMore = styled.p`
  width: fit-content;
  margin: 0;
  font-weight: 700;
  font-size: 3.721vw;
  color: #ffaa00;
  position: relative;
  margin-top: 5px;
  cursor: pointer;
  &:after {
    content: "";
    display: block;
    background-image: url(${more});
    background-size: cover;
    background-repeat: no-repeat;
    position: absolute;
    width: 5px;
    height: 10px;
    left: -18px;
    top: 7px;
  }
`;

export default function Poster() {
  const navigate = useNavigate();
  const [report, setReport] = useState({
    img: pic,
    type: "یادداشت",
    user:"سهیل داناچیان",
    date: "۲۹ اسفند ۱۴۰۰",
    title: "مصوبۀ شفافیت صورت‌های مالیاتی شرکت‌های بزرگ به سود کدام شرکت‌هاست؟",
    expand:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
  });
  return (
    <Container>
      <Picture>
        <img src={report.img} alt="post-picture" />
      </Picture>
      <Content>
        <HeadContent>
          <Type>{report.type}</Type>
          <Date>{report.date}</Date>
        </HeadContent>
        <Title>
          {report.title}
        </Title>
        <Paragraph>
          {report.expand}
        </Paragraph>
        <ShowMore onClick={()=>{navigate(`/blog/${report.title}`)}} >ادامۀ مطلب</ShowMore>
      </Content>
    </Container>
  );
}
