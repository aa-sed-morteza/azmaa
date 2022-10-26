import React, { useEffect, useState } from "react";
import styled from "styled-components";
import symbol from "../../../assets/vote-logo.png";
import vote from "../../../assets/vote.png";
import success from "../../../assets/success.png";
import faild from "../../../assets/faild.png";
import not from "../../../assets/not.png";
import data from "../../../data.json";

const VCContainer = styled.div`
  background-color: #ffffff;
  border-radius: 4px;
  padding: 18px 10px 10px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  margin-bottom: 14px;
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  & > .vote-logo {
    background-image: url(${symbol});
    background-size: cover;
    background-repeat: no-repeat;
    width: 89px;
    height: 89px;
  }

  & > .title-card {
    width: 70%;
    .title {
      margin: 0;
      color: #707070;
      font-size: 3.72vw;
      font-weight: 200;
      position: relative;
      padding-right: 20px;
      margin-bottom: 10px;
      &:before {
        content: "";
        display: flex;
        position: absolute;
        width: 32px;
        height: 32px;
        background-image: url(${vote});
        background-size: contain;
        background-repeat: no-repeat;
        right: -10px;
        top: -3px;
      }
    }
    h2 {
      margin: 0;
      color: #707070;
      font-size: 4.65vw;
      font-weight: 400;
      margin-bottom: 10px;
    }
    .date {
      margin: 0;
      color: rgba(0, 0, 0, 0.2);
      font-size: 2.79vw;
      font-weight: bold;
    }
  }
`;

const Statistics = styled.div`
  display: flex;

  gap: 70px;
  padding-right: 50px;
  padding-top: 20px;
  border-top: 1px solid #d8d8d8;
  margin-top: 17px;
  justify-content: center;
  padding-bottom: 13px;
`;

const Success = styled.div`
  color: #6cbba9;
  font-weight: 300;
  font-size: 5.58vw;
  position: relative;
  &:before {
    content: "";
    display: block;
    position: absolute;
    width: 41px;
    height: 41px;
    background-image: url(${success});
    background-size: contain;
    background-repeat: no-repeat;
    right: -50px;
    top: -6px;
  }
  &.active {
    font-weight: bold;
    &:after {
      content: "";
      display: block;
      position: absolute;
      width: 80px;
      height: 4px;
      background-color: #6cbba9;
      bottom: -13px;
      right: -50px;
    }
  }
`;

const Faild = styled.div`
  color: #ffa5a5;
  font-weight: 300;
  font-size: 5.58vw;
  position: relative;
  &:before {
    content: "";
    display: block;
    position: absolute;
    width: 41px;
    height: 41px;
    background-image: url(${faild});
    background-size: contain;
    background-repeat: no-repeat;
    right: -50px;
    top: -6px;
  }
  &.active {
    font-weight: bold;
    &:after {
      content: "";
      display: block;
      position: absolute;
      width: 80px;
      height: 4px;
      background-color: #ffa5a5;
      bottom: -13px;
      right: -50px;
    }
  }
`;

const Not = styled.div`
  color: #d8d8d8;
  font-weight: 300;
  font-size: 5.58vw;
  position: relative;

  &:before {
    content: "";
    display: block;
    position: absolute;
    width: 41px;
    height: 41px;
    background-image: url(${not});
    background-size: contain;
    background-repeat: no-repeat;
    right: -50px;
    top: -6px;
  }

  &.active {
    font-weight: bold;
    &:after {
      content: "";
      display: block;
      position: absolute;
      width: 80px;
      height: 4px;
      background-color: #d8d8d8;
      bottom: -13px;
      right: -50px;
    }
  }
`;

const EnvoyGallery = styled.div`
  background-color: ${(props) => props.color};
  border-radius: 4px;
  padding: 18px 0 12px;
  display: flex;
  overflow-x: scroll;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4px;
  min-width: 90px;
  border-left: 1px solid white;
  .picture {
    width: 47px;
    height: 47px;
    border-radius: 47px;
    margin-bottom: 10px;
    border: 3px solid ${(props) => props.color};
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  .name {
    color: #707070;
    font-size: 2.79vw;
    font-weight: 400;
    margin: 0;
    margin-bottom: 5px;
  }

  .state {
    color: #707070;
    font-size: 2.32vw;
    font-weight: bold;
    margin: 0;
  }
`;

const ButtonWraper = styled.div`
  display: flex;
  margin-top: 10px;
  justify-content: space-between;
`;

const LargButton = styled.div`
  width: 70%;
  background-color: #095644;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  display: flex;
  padding: 5px;
  .content {
    margin: 0 auto;
    font-size: 4.65vw;
    font-weight: bold;
    color: #ffffff;
  }
`;

const SmallButton = styled.div`
  width: 20%;
  background-color: #ffffff;
  border: 1px solid #095644;
  border-radius: 4px;
  display: flex;
  padding: 5px;
  .content {
    margin: 0 auto;
    font-size: 4.65vw;
    font-weight: 300;
    color: #095644;
  }
`;

export default function VoteCard() {
  const [active, setActive] = useState(0);
  const [color, SetColor] = useState("#DFF5F0");
  const [bColor, setBColor] = useState("#6cbba9");
  const envoyData = data.envoy;

  const envoyList = envoyData.map((x, i) => {
    return (
      <Card key={i} color={bColor}>
        <div className="picture">
          <img src={x.picture} alt={x.name} />
        </div>

        <p className="name">{x.name}</p>
        <p className="state">{x.state}</p>
      </Card>
    );
  });

  useEffect(() => {
    if (active === 1) {
      SetColor("#FFD5D5");
      setBColor("#ffa5a5");
    } else if (active === 2) {
      SetColor("#EAEAEA");
      setBColor("#d8d8d8");
    } else if (active === 0) {
      SetColor("#DFF5F0");
      setBColor("#6cbba9");
    }
  }, [active]);

  return (
    <VCContainer>
      <CardHeader>
        <div className="vote-logo"></div>
        <div className="title-card">
          <p className="title">رأی‌گیری</p>
          <h2>کلیات لایحۀ بودجۀ سال ۱۴۰۱</h2>
          <p className="date">۲۹ اسفند ۱۴۰۰</p>
        </div>
      </CardHeader>
      <Statistics>
        <Success
          onClick={() => setActive(0)}
          className={active === 0 ? "active" : ""}
        >
          ۱۲۴
        </Success>
        <Faild
          onClick={() => setActive(1)}
          className={active === 1 ? "active" : ""}
        >
          ۶۵
        </Faild>
        <Not
          onClick={() => setActive(2)}
          className={active === 2 ? "active" : ""}
        >
          ۲۳
        </Not>
      </Statistics>

      <EnvoyGallery color={color}>{envoyList}</EnvoyGallery>

      <ButtonWraper>
        <LargButton>
          <p className="content">جزئیات</p>
        </LargButton>
        <SmallButton>
          <p className="content">بازنشر</p>
        </SmallButton>
      </ButtonWraper>
    </VCContainer>
  );
}
