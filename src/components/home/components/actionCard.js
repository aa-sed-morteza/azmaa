import React, { useEffect, useState } from "react";
import styled from "styled-components";
import action from "../../../assets/action-rate.webp";
import act from "../../../assets/act.webp";
import success from "../../../assets/like.webp";
import faild from "../../../assets/dislike.webp";
import not from "../../../assets/not.webp";
import data from "../../../data.json";
import left from ".././../../assets/left.webp";
import { useNavigate } from "react-router-dom";
import ShareButton from "../../general/shareButton.js";
import { BaseBackURL } from "../../../constant/api";
import axios from "axios";

export default function ActionCard({ activity }) {
  const [active, setActive] = useState(0);
  const [color, SetColor] = useState("#DFF5F0");
  const [bColor, setBColor] = useState("#6cbba9");
  const [votes, setVotes] = useState(activity.vote);
  const envoyData = data.envoy;
  const navigate = useNavigate();

  console.log(activity);

  const envoyList = votes.map((x, i) => {
    return (
      <Card key={i} color={bColor}>
        <div className="picture">
          <img src={x.voter.image} alt={x.voter.last_name} />
        </div>

        <p className="name">{x.voter.first_name}</p>
        <p className="state">{x.voter.electoral_district_name}</p>
      </Card>
    );
  });

  let positive = 0;
  let negative = 0;
  let noChoice = 0;

  for (const item of activity.vote) {
    if (item.vote === "positive") {
      positive = positive + 1;
    } else if (item.vote === "negative") {
      negative = negative + 1;
    } else {
      noChoice = noChoice + 1;
    }
  }

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
        <div className="action-logo"></div>
        <div className="title-card">
          <p className="title">عملکرد</p>
          <h2> {activity.name}</h2>
          <p className="date">{activity.date}</p>
        </div>
      </CardHeader>
      <Statistics>
        <Success
          onClick={() => setActive(0)}
          className={active === 0 ? "active" : ""}
        >
          {positive}
        </Success>
        <Faild
          onClick={() => setActive(1)}
          className={active === 1 ? "active" : ""}
        >
          {negative}
        </Faild>
        <Not
          onClick={() => setActive(2)}
          className={active === 2 ? "active" : ""}
        >
          {noChoice}
        </Not>
      </Statistics>

      <EnvoyGallery color={color}>{envoyList}</EnvoyGallery>

      <ButtonWraper>
        <LargButton>
          <p
            className="content"
            onClick={() => {
              navigate(`presentation/ دریافت خودرو دناپلاس `);
            }}
          >
            جزئیات
          </p>
        </LargButton>
        {/* <SmallButton>
          <p className="content">بازنشر</p>
        </SmallButton> */}
        <ShareButton text="دریافت خودرو دناپلاس " title="اطلاع رسانی نماینده" />
      </ButtonWraper>
    </VCContainer>
  );
}

const VCContainer = styled.div`
  background-color: #ffffff;
  border-radius: 4px;
  padding: 18px 10px 10px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  margin-bottom: 14px;
  @media (min-width: 481px) {
    box-shadow: 0px 0px 20px -5px rgba(0, 0, 0, 0.3);
    border-radius: 8px;
    margin-bottom: 34px;
    width: 25%;
    padding: 20px 17px;
    height: 43.229vw;
    min-height: 0;
  }
  @media (min-width: 1025px) {
    width: 28%;
  }
  @media (min-width: 1600px) {
    width: 30%;
  }
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  & > .action-logo {
    background-image: url(${action});
    background-size: cover;
    background-repeat: no-repeat;
    width: 20.698vw;
    height: 17.674vw;
    @media (min-width: 481px) {
      width: 6.302vw;
      height: 5.417vw;
    }
  }

  & > .title-card {
    width: 70%;
    .title {
      margin: 0;
      color: #707070;
      font-size: 3.72vw;
      font-weight: 200;
      margin-bottom: 3px;
      display: flex;
      align-items: center;
      gap: 5px;
      &:before {
        content: "";
        display: inline-flex;
        width: 7.442vw;
        height: 7.442vw;
        background-image: url(${act});
        background-size: contain;
        background-repeat: no-repeat;
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
    @media (min-width: 481px) {
      width: 67%;
      .title {
        font-size: 1.25vw;
        font-weight: 300;
        &:before {
          width: 2.083vw;
          height: 1.563vw;
        }
      }
      h2 {
        font-size: 1.667vw;
        font-weight: 700;
      }
      .date {
        font-size: 1.25vw;
        font-weight: 500;
      }
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
  @media (min-width: 481px) {
    gap: 4.688vw;
  }
`;

const Success = styled.div`
  color: #6cbba9;
  font-weight: 300;
  font-size: 5.58vw;
  position: relative;
  cursor: pointer;
  &:before {
    content: "";
    display: block;
    position: absolute;
    width: 9.535vw;
    height: 9.535vw;
    background-image: url(${success});
    background-size: contain;
    background-repeat: no-repeat;
    right: -11.628vw;
    top: -1.395vw;
  }
  &.active,
  &:hover {
    font-weight: bold;
    &:after {
      content: "";
      display: block;
      position: absolute;
      width: 18.605vw;
      height: 0.93vw;
      background-color: #6cbba9;
      bottom: -3.023vw;
      right: -11.628vw;
    }
  }
  @media (min-width: 481px) {
    font-size: 1.458vw;
    font-weight: 400;
    padding-bottom: 10px;
    &:before {
      width: 2.917vw;
      height: 2.917vw;
      right: -3.385vw;
      top: -0.26vw;
    }
    &:after {
      width: 5.208vw !important;
      bottom: -0.7vh !important;
      height: 0.208vw !important;
      right: -3.031vw !important;
    }
  }
`;

const Faild = styled.div`
  color: #ffa5a5;
  font-weight: 300;
  font-size: 5.58vw;
  position: relative;
  cursor: pointer;
  &:before {
    content: "";
    display: block;
    position: absolute;
    width: 9.535vw;
    height: 9.535vw;
    background-image: url(${faild});
    background-size: contain;
    background-repeat: no-repeat;
    right: -11.628vw;
    top: -1.395vw;
  }
  &.active,
  &:hover {
    font-weight: bold;
    &:after {
      content: "";
      display: block;
      position: absolute;
      width: 18.605vw;
      height: 0.93vw;
      background-color: #ffa5a5;
      bottom: -3.023vw;
      right: -11.628vw;
    }
  }
  @media (min-width: 481px) {
    font-size: 1.458vw;
    font-weight: 400;
    padding-bottom: 10px;
    &:before {
      width: 2.917vw;
      height: 2.917vw;
      right: -3.385vw;
      top: -0.26vw;
    }
    &:after {
      width: 5.208vw !important;
      bottom: -0.7vh !important;
      height: 0.208vw !important;
      right: -3.031vw !important;
    }
  }
`;

const Not = styled.div`
  color: #d8d8d8;
  font-weight: 300;
  font-size: 5.58vw;
  position: relative;
  cursor: pointer;
  &:before {
    content: "";
    display: block;
    position: absolute;
    width: 9.535vw;
    height: 9.535vw;
    background-image: url(${not});
    background-size: contain;
    background-repeat: no-repeat;
    bottom: -3.023vw;
    right: -11.628vw;
  }

  &.active,
  &:hover {
    font-weight: bold;
    &:after {
      content: "";
      display: block;
      position: absolute;
      width: 18.605vw;
      height: 0.93vw;
      background-color: #d8d8d8;
      bottom: -3.023vw;
      right: -11.628vw;
    }
  }
  @media (min-width: 481px) {
    font-size: 1.458vw;
    font-weight: 400;
    padding-bottom: 10px;
    &:before {
      width: 2.917vw;
      height: 2.917vw;
      right: -3.385vw;
      top: -0.26vw;
    }
    &:after {
      width: 5.208vw !important;
      bottom: -0.7vh !important;
      height: 0.208vw !important;
      right: -3.031vw !important;
    }
  }
`;

const EnvoyGallery = styled.div`
  background-color: ${(props) => props.color};
  border-radius: 4px;
  padding: 18px 0 12px;
  display: flex;
  overflow-x: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  @media (min-width: 481px) {
    border-radius: 8px;
    flex-direction: column;
    padding-inline: 15px;
    overflow-x: hidden;
    margin-bottom: 10px;
    flex: 1;
    overflow-y: auto;
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4px;
  min-width: 20.93vw;
  border-left: 1px solid white;
  .picture {
    width: 10.93vw;
    height: 10.93vw;
    border-radius: 10.93vw;
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
  @media (min-width: 481px) {
    flex-wrap: wrap;
    max-height: 7.5vw;
    padding: 5px 0px;
    border-left: none;
    border-bottom: 1px solid #ffffff;
    min-width: inherit;
    .picture {
      width: 5vw;
      height: 5vw;
      border-radius: 5vw;
      border-width: 0.2vw;
    }
    .name {
      font-size: 1.458vw;
      text-align: start;
      width: 60%;
      margin-bottom: 10px;
      margin-top: -4%;
    }
    .state {
      font-size: 1.042vw;
      font-weight: 300;
      text-align: start;
      width: 60%;
    }
  }
  @media (min-width: 1200px) {
    padding: 19px 5px;
  }
`;

const ButtonWraper = styled.div`
  display: flex;
  margin-top: 10px;
  justify-content: space-between;
  @media (min-width: 481px) {
    border-top: 1px solid #d8d8d8;
    padding-top: 14px;
    flex-direction: row-reverse;
  }
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
  @media (min-width: 481px) {
    border-radius: 8px;
    padding: 10px;
    position: relative;
    .content {
      font-size: 1.25vw;
      margin: auto;
      &:after {
        content: "";
        display: block;
        position: absolute;
        width: 0.521vw;
        height: 0.781vw;
        background-image: url(${left});
        background-size: contain;
        background-repeat: no-repeat;
        top: 50%;
        left: 9%;
        transform: translate(0, -50%);
      }
    }
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
  @media (min-width: 481px) {
    border-radius: 8px;
    padding: 10px;
    .content {
      font-size: 1.25vw;
      margin: auto;
    }
  }
`;
