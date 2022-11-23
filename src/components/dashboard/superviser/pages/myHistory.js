import React from "react";
import styled from "styled-components";
import upArrow from "../../../../assets/arrow.png";

export default function MyHistory() {
  return (
    <Container>
      <Title>
        <p className="home">پنل / </p>
        <p className="component"> سابقه عملکرد </p>
      </Title>
      <HistoryWraper>
        <HistoryCard>
          <h4 className="title">ورود به پنل</h4>
          <p className="date">۲۹ اسفند ۱۴۰۰ | ۱۹:۳۱</p>
        </HistoryCard>
        <HistoryCard>
          <h4 className="title">ثبت یادداشت جدید</h4>
          <p className="date">۲۹ اسفند ۱۴۰۰ | ۱۹:۳۱</p>
        </HistoryCard>
        <HistoryCard>
          <h4 className="title">خروج از پنل</h4>
          <p className="date">۲۹ اسفند ۱۴۰۰ | ۱۹:۳۱</p>
        </HistoryCard>
        <HistoryCard>
          <h4 className="title">تأیید درخواست</h4>
          <p className="date">۲۹ اسفند ۱۴۰۰ | ۱۹:۳۱</p>
        </HistoryCard>
        <HistoryCard>
          <h4 className="title">ثبت فعالیت جدید</h4>
          <p className="date">۲۹ اسفند ۱۴۰۰ | ۱۹:۳۱</p>
        </HistoryCard>
        <ShowMore>
          <p>نمایش بیشتر</p>
        </ShowMore>
      </HistoryWraper>
    </Container>
  );
}

const Container = styled.section`
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  padding: 10px;
  overflow: hidden;
  @media (min-width: 480px) {
    background-color: #ffffff;
    padding: 25px 10% 0;
  }
`;

const Title = styled.div`
  display: flex;
  margin-bottom: 12px;
  padding-right: 10px;
  .home {
    font-size: 3.721vw;
    font-weight: 700;
    margin: 0;
    color: rgba(0, 0, 0, 0.2);
  }
  .component {
    font-size: 3.721vw;
    font-weight: 700;
    margin: 0;
    color: rgba(112, 112, 112, 1);
  }
  @media (min-width: 480px) {
    margin-bottom: 25px;
    .home,
    .component {
      font-size: 1.25vw;
    }
  }
`;

const HistoryWraper = styled.div`
  background-color: #ffffff;
  border-radius: 4px;
  padding: 12px 10px 13px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  .title {
    margin: 0;
    padding: 0;
    color: #707070;
    font-weight: 400;
    font-size: 4.651vw;
    margin-bottom: 5px;
  }
  .date {
    margin: 0;
    padding: 0;
    color: rgba(0, 0, 0, 0.2);
    font-weight: 700;
    font-size: 2.791vw;
  }
`;

const HistoryCard = styled.div`
  border: 1px solid #eaeaea;
  border-radius: 4px;
  padding: 14px 50px 13px;
`;

const ShowMore = styled.div`
  border: 1px solid #9f9f9f;
  border-radius: 4px;
  display: flex;
  padding: 3px;
  margin-top: 16px;
  p {
    margin: auto;
    color: #9f9f9f;
    font-size: 4.65vw;
    position: relative;
    font-weight: 300;
    &:after {
      content: "";
      display: flex;
      position: absolute;
      left: -25px;
      bottom: 8px;
      background-image: url(${upArrow});
      background-size: cover;
      background-repeat: no-repeat;
      width: 9px;
      height: 5px;
    }
  }

  @media (min-width: 480px) {
    border: 2px solid #9f9f9f;
    border-radius: 8px;
    max-width: 500px;
    justify-content: center;
    align-items: center;
    margin: auto;
    padding: 13px;
    margin-top: 78px;
    p {
      font-size: 1.25vw;
      font-weight: 400;
      &:after {
        width: 15px;
        height: 8px;
        left: -37px;
      }
    }
  }
`;
