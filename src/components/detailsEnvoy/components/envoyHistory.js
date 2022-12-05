import React, { useState } from "react";
import styled from "styled-components";
import { useUser } from "../../context/userContext";
import arrow from "../../../assets/arrow.webp";
import { useNavigate } from "react-router-dom";

export default function EnvoyHistory() {
  const navigate = useNavigate();
  const { state, dispatch } = useUser();
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Container onClick={handleClick} className={open ? "active" : ""}>
      <Title>سوابق نماینده</Title>
      <History>
        <p className="text">نمایندۀ دماوند و فیروزکوه | ۱۴۰۱-۱۳۹۸</p>
        <p className="text">استاندار خوزستان | ۱۳۹۸-۱۳۹۶</p>
      </History>

      <Content className={open ? "open" : ""}>
        <History>
          <p className="text">استاندار خوزستان | ۱۳۹۸-۱۳۹۶</p>
          <p className="text">استاندار خوزستان | ۱۳۹۸-۱۳۹۶</p>
          <p className="text">استاندار خوزستان | ۱۳۹۸-۱۳۹۶</p>
          <p className="text">استاندار خوزستان | ۱۳۹۸-۱۳۹۶</p>
        </History>
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
    width: 60%;
    margin-right: -0.354vw;
    margin-bottom: -1.042vw;
  }
`;

const History = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.163vw;
  .text {
    color: #707070;
    margin: 0;
    font-weight: 700;
    font-size: 3.721vw;
  }
  @media(min-width:480px){
    gap:0.781vw;
    .text{
      font-size:1.250vw;
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
