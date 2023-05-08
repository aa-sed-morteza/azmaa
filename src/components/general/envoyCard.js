import React, { useEffect, useState } from "react";
import styled from "styled-components";
import profile from "../../assets/gray.svg";
import { toFarsiNumber } from "../../utils";

export default function EnvoyCard({name,state,commission,img,persantage,id,inBox,click,position}) {
  const [color, setColor] = useState("#FFAA00");
  const [firstHalf, setFirstHalf] = useState(0);
  const [secondHalf, setSecondHalf] = useState(0);

  const generateColor = () => {
    if (!persantage) {
      setColor("#FFAA00");
    } else if (persantage && persantage <= 25) {
      setColor("#FFA5A5");
    } else if (persantage <= 75) {
      setColor("#FFAA00");
    } else {
      setColor("#6CBBA9");
    }
    return color;
  };

  const calculateFillCircle = () => {
    if (persantage <= 50) {
      setFirstHalf((persantage * 180) / 50);
    }else{
      const amount =persantage-50;
      setFirstHalf(180);
      setSecondHalf(Math.floor((amount*180)/50));
    }

  };

  useEffect(() => {
    calculateFillCircle();
    generateColor();
  }, []);

 


  return (
    <Container width={inBox} onClick={click} pos={position} >
      <EnvoyImage
        coloring={color}
        firstFill={firstHalf}
        secondFill={secondHalf}
        id={id}
      >
        <b>
          <img src={img} />
        </b>
      </EnvoyImage>
      <Content color={color}>
        <h3>{name || "نام نماینده"}</h3>
        <div className="status">
          <p className="state"> {state || "حوزه نماینده"}</p>
          <p className="position"> {commission || "کمیسیون"}</p>
        </div>
        <div className="persantage">
          <p className="text">شفافیت: ٪</p>
          <p className="content">{toFarsiNumber(persantage)  || "0"}</p>
        </div>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px 20px;
  background: #ffffff;
  box-shadow: 0px 0px 20px -5px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  direction: rtl;
  cursor: pointer;
  position: ${props=>props.pos ? props.pos :'static'};
  top:${props=>props.pos == 'sticky' ? 0 :''};
  z-index: 20;
  @media (min-width: 481px) {
    margin: 0;
    box-shadow: 0px 0px 20px -5px rgba(0, 0, 0, 0.15);
    border-radius: 8px;
    // padding: 31px 27px;
    min-width:${props=>props.width?"inhiret":"460px"} ;
    align-items: center;
  }
  @media (min-width: 769px) {
    padding: 31px 27px;
    }
`;

const EnvoyImage = styled.div`
  width: 90px;
  height: 93px;
  border-radius: 50%;
  position: relative;
  float: left;
  overflow: hidden;
  transform: rotate(0deg);
  /* background: #f9f9f9; */
  background: #ffffff;
  @media(min-width:481px){
    width:7.552vw;
    height:7.552vw;
  }
  &:before {
    content: "";
    width: 90px;
    height: 93px;
    border-radius: 50%;
    position: absolute;
    left: 0;
    top: 0;
    border-radius: 50% 0 0 50%;
    z-index: 2;
    left: -50%;
    background: #f9f9f9;
    @media(min-width:481px){
      width:7.552vw;
      height:7.552vw;
    }
  }
  &:after {
    content: "";
    width: 90px;
    height: 93px;
    border-radius: 50%;
    position: absolute;
    left: 0;
    top: 0;
    @media(min-width:481px){
      width:7.552vw;
      height:7.552vw;
    }
  }
  b {
    &:before {
      content: "";
      display: ${(props) => props.secondFill===0?"none":""};
      width: 90px;
      height: 93px;
      border-radius: 50%;
      position: absolute;
      left: 0;
      top: 0;
      background-image: linear-gradient(
        to left,
        ${(props) => props.coloring} 50%,
        transparent 50%,
        transparent 100%
      );
      z-index: 4;
      animation: 3s ${props=>'span2'+props.id} linear forwards 3s;
      opacity: 0;
      @media(min-width:481px){
        width:7.552vw;
        height:7.552vw;
      }
    }
    &:after {
      content: "";
      width: 90px;
      height: 93px;
      border-radius: 50%;
      position: absolute;
      left: 0;
      top: 0;
      background-image: linear-gradient(
        to right,
        ${(props) => props.coloring} 50%,
        transparent 50%,
        transparent 100%
      );
      z-index: 1;
      animation: 3s ${props=>'span'+props.id} linear forwards;
      animation-delay: 4s;
      @media(min-width:481px){
        width:7.552vw;
        height:7.552vw;
      }
    }
  }

  img {
    display: block;
    width: 87px;
    height: 87px;
    text-align: center;
    margin: 3px auto;
    position: relative;
    z-index: 5;
    border-radius: 50%;
    object-fit: contain;
    background: #ffffff;
    @media(min-width:481px){
      width:7.292vw;
      height:7.292vw;
      margin: 1.5px auto;
    }
  }

  @keyframes ${props=>'span'+props.id} {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(${(props) => props.firstFill}deg);
    }
  }
  @keyframes ${props=>'span2'+props.id}  {
    from {
      transform: rotate(0);
      opacity: 1;
    }
    to {
      transform: rotate(${(props) => props.secondFill}deg);
      opacity: 1;
    }
  }
  @media (min-width: 481px) {
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
    align-items:center;
    gap:7px;
    margin-bottom: 10px;
    &:before {
      content: "";
      display: inline-flex;
      width: 28px;
      height: 28px;
      background-image: url(${profile});
      background-size: contain;
      background-repeat: no-repeat;
     
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
        right: -11px;
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
      color: ${(props) => props.color};
      font-size: 3.25vw;
      font-weight: 400;
      margin: 0;
      @media (min-width: 481px) {
        font-size: 1.042vw;
      }
    }
  }
`;
