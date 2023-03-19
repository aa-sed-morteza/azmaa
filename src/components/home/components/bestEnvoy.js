import React from "react";
import styled from "styled-components";
import pic from "../../../assets/pic.webp";
import profile from "../../../assets/profile.webp";
import { toFarsiNumber } from "../../../utils";

const EnvoyCard = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px 20px;
  background: #ffffff;
  box-shadow: 0px 0px 20px -5px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  margin-bottom: 10px;
  direction: rtl;
  cursor: pointer;
  @media (min-width: 481px) {
    margin: 0;
    box-shadow: 0px 0px 20px -5px rgba(0, 0, 0, 0.15);
    border-radius: 8px;
    padding: 10px 5px;
    width: 25%;
    align-items: center;
    justify-content: space-between;
  }
  @media (min-width: 769px) {
    width: 30%;
  }
  @media (min-width: 1200px) {
    width: 28%;
    padding: 15px;
  }
  @media (min-width: 1400px) {
    width: 29%;
    padding: 31px 15px;
  }
  @media (min-width: 1600px) {
    width: 30%;
  }
`;

const EnvoyImage = styled.div`
  width: 20.233vw;
  height: 20.93vw;
  border-radius: 50%;
  border: 3px solid #9f9f9f;
  img {
    width: 100%;
    height: 100%;
    border-radius:50%;
    object-fit: contain;
  }
  @media (min-width: 481px) {
    width: 6vw;
    height: 6vw;
  }
  @media (min-width: 769px) {
    width: 7.292vw;
    height: 7.552vw;
  }
`;

const Content = styled.div`
  width: 65%;
  display: flex;
  flex-direction: column;
  @media (min-width: 481px) {
    width: 62%;
  }

  h3 {
    color: #707070;
    font-size: 4.65vw;
    font-weight: bold;
    margin: 0;
    margin-bottom: 10px;
    @media (min-width: 481px) {
      font-size: 1.667vw;
    }
  }
  .status {
    display: flex;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    gap: 7px;
    &:before {
      content: "";
      display: inline-flex;
      width: 20px;
      height: 20px;
      background-image: url(${profile});
      background-size: contain;
      background-repeat: no-repeat;
      @media (min-width: 1200px) {
        width: 28px;
        height: 28px;
      }
    }
    .state {
      color: #707070;
      font-weight: 400;
      font-size: 3.72vw;
      border-left: 1px solid #ffaa00;
      padding-left: 7px;
      margin: 0;
    }
    .position {
      color: #9f9f9f;
      padding-right: 7px;
      margin: 0;
    }
    @media (min-width: 481px) {
      align-items: center;
      &:before {
        // right: -11px;
        top: 0px;
      }
      .state,
      .position {
        font-size: 1.042vw;
      }
    }
  }
  .persantage {
    display: flex;
    .text,
    .content {
      color: #ffaa00;
      font-size: 3.25vw;
      font-weight: 400;
      margin: 0;
      @media (min-width: 481px) {
        font-size: 1.042vw;
      }
    }
  }
`;

export default function BestEnvoy({ envoy ,click}) {


  
  return (
    <EnvoyCard onClick={click}>
      <EnvoyImage><img src={envoy.image} /></EnvoyImage>
      <Content>
        <h3>
          {envoy.first_name} {envoy.last_name}
        </h3>
        <div className="status">
          <p className="state">{envoy.electoral_district_name}</p>
          <p className="position">{envoy.fraction_name}</p>
        </div>
        <div className="persantage">
          <p className="text">شفافیت: ٪</p>
          <p className="content">{toFarsiNumber(envoy.transparency) }</p>
        </div>
      </Content>
    </EnvoyCard>
  );
}
