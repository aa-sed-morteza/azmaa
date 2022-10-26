import React from "react";
import styled from "styled-components";
import pic from "../../../assets/pic.png";
import profile from "../../../assets/profile.png";

const EnvoyCard = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px 20px;
  background: #ffffff;
  box-shadow: 0px 0px 20px -5px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  margin-bottom: 10px;
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
`;

const Content = styled.div`
  width: 65%;
  display: flex;
  flex-direction: column;
  
  h3{
    color:#707070;
    font-size:4.65vw;
    font-weight:bold;
    margin:0;
    margin-bottom:10px;
  }
  .status{
    display:flex;
    position:relative;
    padding-right: 20px;
    margin-bottom:10px;
    &:before{
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
    .state{
        color: #707070;
        font-weight:400;
        font-size:3.72vw;
        border-left:1px solid #FFAA00;
        padding-left:7px;
        margin:0;
        
    }
    .position{
        color:#9F9F9F;
        padding-right:7px;
        margin:0;
    }

  }
  .persantage{
    display:flex;
    .text,.content{
        color:#FFAA00;
        font-size:3.25vw;
        font-weight:400;
        margin:0;
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
