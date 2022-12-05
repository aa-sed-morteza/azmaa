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
            <p className="text">WWW.Alireza.Pakfetrat.NET</p>
          </div>
        </NetworkRow>
        <NetworkRow icon={telegram}>
          <span></span>
          <div className="text-wraper">
            <p className="text">Alireza.Pakfetrat</p>
          </div>
        </NetworkRow>
        <NetworkRow icon={instagram}>
          <span></span>
          <div className="text-wraper">
            <p className="text">@Alireza.Pakfetrat</p>
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
  @media (min-width: 480px) {
    padding: 0 2.292vw 1.875vw;
    margin-top: 2.083vw;
  }
`;

const Title = styled.h4`
  font-weight: 300;
  font-size: 4.651vw;
  color: #9f9f9f;
  transform: translateY(-16px);
  background: #ffffff;
  width: 60%;
  margin: 0;
  text-align: center;
  @media (min-width: 480px) {
    font-size: 1.875vw;
    transform: translateY(-1.615vw);
    width: 27%;
    margin-right: 1.646vw;
    margin-bottom: -1.042vw;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.558vw;
`;

const NetworkRow = styled.div`
  display:flex;
  gap:3.488vw;
  align-items:center;
  span{
    width:10.465vw;
    height:9.302vw;
    background-image: url(${(props) => props.icon});
    background-size: contain;
    background-repeat: no-repeat;
  }
  .text-wraper{
    margin:0;
    padding:0.698vw 2.093vw ; 
    background-color: #F3F3F3;
    border-radius: 4px;
    width:77%;
    .text{
        color: #095644;
        margin:0;
        padding:0;
        font-weight:300;
        font-size:4.651vw;
        text-align: end;
    }

`;
