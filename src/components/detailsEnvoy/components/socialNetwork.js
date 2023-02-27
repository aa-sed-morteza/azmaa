import React from "react";
import styled from "styled-components";
import { useUser } from "../../context/userContext";
import web from "../../../assets/web.svg";
import telegram from "../../../assets/telegram.svg";
import instagram from "../../../assets/instagram.svg";

export default function SocialNetwork() {
  const { state, dispatch } = useUser();

  return (
    <Container>
      <Title>شبکه‌های اجتماعی نماینده</Title>
      <Content>
        <NetworkRow icon={web}>
          <span></span>
          <div className="text-wraper">
            {/* <p className="text">WWW.Alireza.Pakfetrat.NET</p> */}
            <p className="text">؟</p>
          </div>
        </NetworkRow>
        <NetworkRow icon={telegram}>
          <span></span>
          <div className="text-wraper">
            <p className="text">؟</p>
            {/* <p className="text">Alireza.Pakfetrat</p> */}
          </div>
        </NetworkRow>
        <NetworkRow icon={instagram}>
          <span></span>
          <div className="text-wraper">
            {/* <p className="text">@Alireza.Pakfetrat</p> */}
            <p className="text">؟</p>

          </div>
        </NetworkRow>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  border: 1px solid #cbcbcb;
  border-radius: 4px;
  padding: 0px 2.791vw 3.953vw;
  margin-top: 15px;
  @media (min-width: 481px) {
    padding: 0 1.302vw 1.875vw !important;
    margin-top: 2.083vw;
  }
`;

const Title = styled.h4`
  font-weight: 300;
  font-size: 4.651vw;
  color: #9f9f9f;
  transform: translateY(-63%);
  background: #ffffff;
  width: 60%;
  margin: 0;
  text-align: center;
  white-space: nowrap;
  @media (min-width: 481px) {
    font-size: 1.875vw;
    transform: translateY(-60%);
    width: 100%;
    margin-right: -0.354vw;
    margin-bottom: -1.042vw;
    white-space: nowrap;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.558vw;
  @media (min-width: 481px) {
    gap: 0.781vw;
  }
`;

const NetworkRow = styled.div`
  display: flex;
  gap: 3.488vw;
  align-items: center;
  span {
    width: 10.465vw;
    height: 9.302vw;
    background-image: url(${(props) => props.icon});
    background-size: contain;
    background-repeat: no-repeat;
  }
  .text-wraper {
    margin: 0;
    padding: 0.698vw 2.093vw;
    background-color: #f3f3f3;
    border-radius: 4px;
    width: 77%;
    .text {
      color: #095644;
      margin: 0;
      padding: 0;
      font-weight: 300;
      font-size: 4.651vw;
      text-align: end;
    }
  }
  @media (min-width: 481px) {
    gap: 0.781vw;
    span {
      width: 3.125vw;
      height: 3.125vw;
    }
    .text-wraper {
      padding: 0.521vw 1.042vw;
      .text {
        font-size: 1.25vw;
      }
    }
  }
`;
