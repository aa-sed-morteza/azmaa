import React from "react";
import styled from "styled-components";
import pic from "../../../assets/pic.webp";
import profile from "../../../assets/profile.webp";

const EnvoyCard = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px 20px;
  background: #ffffff;
  box-shadow: 0px 0px 20px -5px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  margin-bottom: 10px;
  direction:rtl;
  @media (min-width: 480px) {
    margin: 0;
    box-shadow: 0px 0px 20px -5px rgba(0, 0, 0, 0.15);
    border-radius: 8px;
    padding: 31px 27px;
    min-width: 460px;
    align-items: center;
  }
`;

const EnvoyImage = styled.div`
  width: 87px;
  height: 90px;
  border-radius: 87px;
  border: 3px solid #9f9f9f;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  @media(min-width:480px){
    width:140px;
    height:145px;
  }
`;

const Content = styled.div`
  width: 65%;
  display: flex;
  flex-direction: column;
  @media(min-width:480px){
    width:62%;
  }

  h3 {
    color: #707070;
    font-size: 4.65vw;
    font-weight: bold;
    margin: 0;
    margin-bottom: 10px;
    @media(min-width:480px){
      font-size:1.667vw;

    }
  }
  .status {
    display: flex;
    position: relative;
    padding-right: 20px;
    margin-bottom: 10px;
    &:before {
      content: "";
      display: block;
      position: absolute;
      width: 28px;
      height: 28px;
      background-image: url(${profile});
      background-size: contain;
      background-repeat: no-repeat;
      right: -8px;
      top: -2px;
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
    @media(min-width:480px){
      align-items:center;
      &:before{
        right: -11px;
        top: 0px;
      }
      .state,.position{
        font-size:1.042vw;
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
      @media(min-width:480px){
        font-size:1.042vw
      }
    }
  }
`;

export default function BestEnvoy() {
  return (
    <EnvoyCard>
      <EnvoyImage>
        <img src={pic} />
      </EnvoyImage>
      <Content>
        <h3>علیرضا پاکفطرت</h3>
        <div className="status">
          <p className="state">دماوند و فیروزکوه</p>
          <p className="position"> امنیت ملی</p>
        </div>
        <div className="persantage">
          <p className="text">شفافیت: ٪</p>
          <p className="content">۷۵</p>
        </div>
      </Content>
    </EnvoyCard>
  );
}
