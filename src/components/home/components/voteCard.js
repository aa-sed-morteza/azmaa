import React, { useEffect, useState } from "react";
import styled from "styled-components";
import symbol from "../../../assets/vote-logo.webp";
import symbol2 from "../../../assets/vote-logo-reject.webp";
import vote from "../../../assets/vote.webp";
import success from "../../../assets/success.webp";
import faild from "../../../assets/faild.webp";
import not from "../../../assets/not.webp";
import absentimg from "../../../assets/absent.webp";
import noVote from "../../../assets/noVote.webp";
import data from "../../../data.json";
import left from ".././../../assets/left.webp";
import { useNavigate } from "react-router-dom";
import ShareButton from "../../general/shareButton";
import { convertDateToFarsi, toFarsiNumber } from "../../../utils";

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
  & > .vote-logo {
    background-image: url(${symbol});
    background-size: contain;
    background-repeat: no-repeat;
    width: 20.698vw;
    height: 17.674vw;
    @media (min-width: 481px) {
      width: 6.771vw;
      height: 6.771vw;
    }
  }
  & > .vote-logo-reject {
    background-image: url(${symbol2});
    background-size: contain;
    background-repeat: no-repeat;
    width: 20.698vw;
    height: 17.674vw;
    @media (min-width: 481px) {
      width: 6.771vw;
      height: 6.771vw;
    }
  }

  & > .title-card {
    width: 70%;
    .title {
      margin: 0;
      color: #707070;
      font-size: 3.72vw;
      font-weight: 200;
      margin-bottom: 10px;
      display: flex;
      align-items: center;
      gap: 5px;
      &:before {
        content: "";
        display: inline-flex;
        width: 7.442vw;
        height: 7.442vw;
        background-image: url(${vote});
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
      .title {
        font-size: 1.25vw;
        font-weight: 300;
        &:before {
          width: 1.875vw;
          height: 1.875vw;
        }
      }
      h2 {
        font-size: 1.667vw;
        font-weight: 700;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        min-height: 100px;
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
  /* display: flex;
  align-items: center; */
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

const Absentdiv = styled.div`
  color: #d8d8d8;
  font-weight: 300;
  font-size: 5.58vw;
  position: relative;
  /* display: flex;
  align-items: center; */
  cursor: pointer;
  &:before {
    content: "";
    display: block;
    position: absolute;
    width: 9.535vw;
    height: 9.535vw;
    background-image: url(${absentimg});
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

const Nonvote = styled.div`
  color: #d8d8d8;
  font-weight: 300;
  font-size: 5.58vw;
  position: relative;
  /* display: flex;
  align-items: center; */
  cursor: pointer;
  &:before {
    content: "";
    display: block;
    position: absolute;
    width: 9.535vw;
    height: 9.535vw;
    background-image: url(${noVote});
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
    //  min-height:100px;
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
    background: #ffffff;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      border-radius: 100%;
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
  cursor: pointer;
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
        width: 10px;
        height: 15px;
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

export default function VoteCard({ bill }) {
  const [active, setActive] = useState(0);
  const [color, SetColor] = useState("#DFF5F0");
  const [bColor, setBColor] = useState("#6cbba9");
  const [envoyData, setEnvoyData] = useState(bill.positive_vote);

  const navigate = useNavigate();

  

  const envoyList = envoyData.map((x, i) => {
    return (
      <Card key={i} color={bColor}>
        <div className="picture">
          <img src={x.voter.image} alt={x.voter.last_name} />
        </div>

        <p className="name">
          {x.voter.first_name} {x.voter.last_name}
        </p>
        <p className="state">{x.voter.electoral_district_name}</p>
      </Card>
    );
  });

  useEffect(() => {
    if (active === 1) {
      SetColor("#FFD5D5");
      setBColor("#ffa5a5");
      setEnvoyData([...bill.negative_vote]);
    } else if (active === 2) {
      SetColor("#EAEAEA");
      setBColor("#d8d8d8");
      setEnvoyData([...bill.without_vote]);
    }else if (active === 3) {
      SetColor("#EAEAEA");
      setBColor("#d8d8d8");
      setEnvoyData([...bill.none_vote]);
    }else if (active === 4) {
      SetColor("#EAEAEA");
      setBColor("#d8d8d8");
      setEnvoyData([...bill.absent_vote]);
    } else if (active === 0) {
      SetColor("#DFF5F0");
      setBColor("#6cbba9");
      setEnvoyData([...bill.positive_vote]);
    }
  }, [active]);


  return (
    <VCContainer>
      <CardHeader>
        <div className={bill.is_approved?"vote-logo":"vote-logo-reject"}></div>
        <div className="title-card">
          <p className="title">رأی‌گیری</p>
          <h2>{bill.name}</h2>
          <p className="date">{bill.date && convertDateToFarsi(bill.date)}</p>
        </div>
      </CardHeader>
      <Statistics>
        <Success
          onClick={() => setActive(0)}
          className={active === 0 ? "active" : ""}
        >
          {toFarsiNumber(bill.vote_number.positive)}
        </Success>
        <Faild
          onClick={() => setActive(1)}
          className={active === 1 ? "active" : ""}
        >
          {toFarsiNumber(bill.vote_number.negative)}
        </Faild>
        <Not
          onClick={() => setActive(2)}
          className={active === 2 ? "active" : ""}
        >
          {toFarsiNumber(bill.vote_number.without_vote)}
        </Not>
        <Nonvote
          onClick={() => setActive(3)}
          className={active === 3 ? "active" : ""}
        >
          {toFarsiNumber(bill.vote_number.none)}
        </Nonvote>
        <Absentdiv
          onClick={() => setActive(4)}
          className={active === 4 ? "active" : ""}
        >
          {toFarsiNumber(bill.vote_number.absent)}
        </Absentdiv>
      </Statistics>

      <EnvoyGallery color={color}>{envoyList}</EnvoyGallery>

      <ButtonWraper>
        <LargButton
          onClick={() => {
            navigate(`/presentation/${bill.id}`);
          }}
        >
          <p className="content">جزئیات</p>
        </LargButton>
        <ShareButton text={bill.information} title={bill.name} />
      </ButtonWraper>
    </VCContainer>
  );
}
