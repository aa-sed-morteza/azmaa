import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import ShareButton from "../../general/shareButton";
import left from ".././../../assets/left.webp";
import vote from "../../../assets/vote.webp";
import voteSymbol from "../../../assets/vote-logo.webp";
import ok from "../../../assets/ok.webp";
import disagree from "../../../assets/disagree.webp";
import like from "../../../assets/like.svg";
import dislike from "../../../assets/dislike.webp";
import action from "../../../assets/act.webp";
import actionSymbol from "../../../assets/action-rate.webp";

export default function GeneralActionCard(props) {
  const navigate = useNavigate();
  const [act, setAct] = useState("");
  const [actIcon, setActIcon] = useState([]);
  const [symbol, setSymbol] = useState([]);
  const [background, setBackground] = useState("");
  const [operation, setOperation] = useState([]);
  const [color, setColor] = useState("");

  const checkHeader = () => {
    if (props.act === "vote") {
      setAct("رأی‌گیری");
      setActIcon(vote);
      setSymbol(voteSymbol);
    }
    if (props.act === "action") {
      setAct("عملکرد");
      setActIcon(action);
      setSymbol(actionSymbol);
    }
  };

  const CheckOperation = () => {
    if (props.action === "موافق") {
      setBackground("#DFF5F0");
      setOperation(ok);
      setColor("#6CBBA9");
    }
    if (props.action === "مخالف") {
      setBackground("#FFD5D5");
      setOperation(disagree);
      setColor("#FFA5A5");
    }
    if (props.action === "همراه") {
      setBackground("#DFF5F0");
      setOperation(like);
      setColor("#6CBBA9");
    }
    if (props.action === "ناهمراه") {
      setBackground("#FFD5D5");
      setOperation(dislike);
      setColor("#FFA5A5");
    }
  };

  useEffect(() => {
    checkHeader();
    CheckOperation();
  }, []);

  return (
    <Container>
      <Header icon={actIcon} symbol={symbol}>
        <span></span>
        <div className="content">
          <p className="act">{act}</p>
          <p className="title">{props.content}</p>
          <p className="date">{props.date}</p>
        </div>
      </Header>
      <Action background={background} operation={operation} color={color}>
        <p className="text">{props.action}</p>
      </Action>
      <ButtonWraper>
        <LargButton>
          <p
            className="content"
            onClick={() => {
              if(props.act == "vote"){
                navigate(`/presentation/${props.item.id}`);
              }else if(props.act == "action"){
                navigate(`/actions/presentation/${props.item.id}`);
              }
            }}
          >
            جزئیات
          </p>
        </LargButton>
        <ShareButton text={props.content} title={props.content} />
      </ButtonWraper>
    </Container>
  );
}

const Container = styled.div`
  padding: 3.721vw 2.326vw 2.326vw;
  background-color: #ffffff;
  box-shadow: 0px 0px 30px -5px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  gap: 2.558vw;
  margin-top: 1.628vw;
  @media (min-width: 481px) {
    width: 38%;
    padding: 0.99vw 1.198vw;
    gap: 1.302vw;
    margin-bottom: 0.521vw;
    box-shadow: 0px 0px 30px -5px rgba(0, 0, 0, 0.15);
    border-radius: 8px;
  }
`;

const ButtonWraper = styled.div`
  display: flex;
  margin-top: 10px;
  justify-content: space-between;
  @media (min-width: 481px) {
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
  z-index: 100;
  .content {
    margin: 0 auto;
    font-size: 4.65vw;
    font-weight: bold;
    color: #ffffff;
  }
  @media (min-width: 481px) {
    width: 67%;
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
        top: 1.042vw;
        left: 1.719vw;
      }
    }
  }
`;

const Header = styled.div`
  display: flex;
  padding: 0 3.023vw;
  gap: 3.953vw;
  span {
    width: 20.698vw;
    height: 20.698vw;
    background-image: url(${(props) => props.symbol});
    background-size: contain;
    background-repeat: no-repeat;
  }

  .content {
    .act {
      margin: 0;
      display: flex;
      align-items: center;
      gap: 5px;
      color: #707070;
      font-weight: 100;
      font-size: 3.721vw;
      &:before {
        content: "";
        display: inline-flex;
        width: 4.884vw;
        height: 4.884vw;
        background-image: url(${(props) => props.icon});
        background-size: contain;
        background-repeat: no-repeat;
      }
    }
    .title {
      margin: 0;
      padding: 0;
      color: #707070;
      font-weight: 400;
      font-size: 4.651vw;
      width: 70%;
    }
    .date {
      display: none;
    }
  }
  @media (min-width: 481px) {
    gap: 1.458vw;
    padding: 0;
    span {
      width: 6.771vw;
      height: 6.771vw;
    }
    .content {
      min-height: 8.698vw;
      .act {
        font-size: 1.042vw;
        &:before {
          width: 1.25vw;
          height: 1.25vw;
        }
      }
      .title {
        font-size: 1.667vw;
        width: 100%;
      }
      .date {
        display: block;
        margin: 0;
        color: #707070;
        font-weight: 500;
        font-size: 1.25vw;
      }
    }
  }
`;

const Action = styled.div`
  background-color: ${(props) => props.background};
  padding: 3.256vw 3.953vw 3.488vw;
  border-radius: 4px;
  .text {
    margin: 0;
    color: ${(props) => props.color};
    font-weight: 700;
    font-size: 5.581vw;
    display: flex;
    align-items: center;
    gap: 2.558vw;
    &:before {
      content: "";
      display: inline-flex;
      width: 9.535vw;
      height: 9.535vw;
      background-image: url(${(props) => props.operation});
      background-size: contain;
      background-repeat: no-repeat;
    }
  }
  @media (min-width: 481px) {
    padding: 1.823vw;
    .text {
      font-size: 1.875vw;
      &:before {
        width: 2.604vw;
        height: 2.604vw;
      }
    }
  }
`;
