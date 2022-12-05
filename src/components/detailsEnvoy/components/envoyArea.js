import React, { useState } from "react";
import styled from "styled-components";
import { useUser } from "../../context/userContext";
import arrow from "../../../assets/arrow.webp";
import { useNavigate } from "react-router-dom";
import box from "../../../assets/state.svg";

export default function EnvoyArea() {
  const navigate = useNavigate();
  const { state, dispatch } = useUser();
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Container onClick={handleClick} className={open ? "active" : ""}>
      <Title>حوزۀ انتخابیه</Title>
      <State>
        <span></span>
        <div className="content">
          <p className="title">تهران، ری و شمیرانات</p>
          <p className="persentage">درصد آراء: ۳۵٪</p>
        </div>
      </State>

      <Content className={open ? "open" : ""}>
        <Row>
          <p className="type"> تعداد آراء: </p>
          <p className="expand">{state.voteNumber}</p>
        </Row>
        <Row>
          <p className="type"> تعداد کل آراء صندوق : </p>
          <p className="expand">۸۰۶۹۸</p>
        </Row>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  border: 1px solid #cbcbcb;
  border-radius: 4px;
  padding: 0px 29px 20px;
  margin-top: 15px;
  &:after {
    content: "";
    diplay: block;
    position: absolute;
    background-image: url(${arrow});
    background-size: contain;
    background-repeat: no-repeat;
    width: 3.488vw;
    height: 2.326vw;
    left: 5.581vw;
    top: 50%;
  }
  &.active {
    &:after {
      animation-name: rotating;
      animation-duration: 2s;
      animation-fill-mode: forwards;
    }
  }

  @keyframes rotating {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(180deg);
    }
  }
 

  @media (min-width: 480px) {
    padding: 0 2.292vw 1.875vw !important;
    margin-top: 2.083vw;
    &:after{
      width: 1.042vw;
      height: 0.521vw;
      left: 1.823vw;
    }
  }
`;

const Title = styled.h4`
  font-weight: 300;
  font-size: 4.651vw;
  color: #9f9f9f;
  transform: translateY(-16px);
  background: #ffffff;
  width: 40%;
  margin: 0;
  text-align: center;
  margin-right: -5%;
  @media (min-width: 480px) {
    font-size: 1.875vw;
    transform: translateY(-1.615vw);
    width: 51%;
    margin-right: -0.354vw;
    margin-bottom: -1.042vw;
  }
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 5px;
  .type {
    color: #9f9f9f;
    font-weight: 300;
    font-size: 3.721vw;
    margin: 0;
    padding-bottom: 5px;
  }
  .expand {
    color: #9f9f9f;
    font-weight: 700;
    font-size: 4.651vw;
    margin: 0;
    padding-right: 10px;
  }
  @media (min-width: 480px) {
    margin-bottom: 10px;
    align-items: center;
    gap: 10px;
    .type {
      padding-bottom: 0;
      font-size: 1.458vw;
    }
    .expand {
      font-size: 1.667vw;
    }
  }
`;

const State = styled.div`
  display: flex;
  align-items: center;
  gap: 4.651vw;
  margin-bottom: 4.186vw;
  span {
    background-repeat: no-repeat;
    background-image: url(${box});
    background-size: contain;
    width: 16.279vw;
    height: 18.372vw;
  }
  .content {
    .title {
      margin: 0;
      padding: 0;
      font-size: 4.651vw;
      font-weight: 400;
      color: #707070;
    }
    .persentage {
      margin: 0;
      padding: 0;
      color: #6cbba9;
      font-weight: 400;
      font-size: 3.256vw;
    }
  }
  @media(min-width:480px){
    gap:1.094vw;
    margin-bottom:0.781vw;
    span{
      width:4.479vw;
      height:5vw;
    }
    .content{
      .title{
        font-size:1.250vw;
      }
      .persentage{
        font-size:1.042vw;
      }
    }
  }
`;

const Content = styled.div`
  height: 0;
  opacity: 0;
  &.open {
    height: fit-content;
    opacity: 1;
    transition: all 1s ease-in-out;
  }
`;
