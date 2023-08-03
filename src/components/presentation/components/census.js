import React, { useState } from "react";
import styled from "styled-components";
import { toFarsiNumber } from "../../../utils";

export default function Census({total,complete,select}) {


  const checkCensus = (num1, num2) => {
    let bgColor;
    if (num2 / num1 > 0.5) {
      bgColor = "#6CBBA9";
    } else {
      bgColor = "#FFA5A5";
    }

    let persentage = (num2 / num1) * 100;
    return (
      <Progress>
        <div className="number">
          {toFarsiNumber(num1) }
          <span style={{ color: bgColor }}> /{toFarsiNumber(num2)  }</span>
        </div>
        <div className="line">
          <span
            className="show-census"
            style={{ background: bgColor, width: `${persentage}%` }}
          ></span>
        </div>
      </Progress>
    );
  };

  return (<></>
    // <Container>
    //   <Title> آمار شفافیت</Title>
    //   <Row>
    //     <p className="type">کامل:</p>
    //     {checkCensus(total,complete )}
    //   </Row>
    //   <Row>
    //     <p className="type">گزینشی:</p>
    //     {checkCensus(total, select)}
    //   </Row>
    // </Container>
  );
}

const Container = styled.div`
  border: 1px solid #cbcbcb;
  border-radius: 4px;
  padding: 0px 29px 20px;
  margin-top: 40px;
  @media(min-width:481px){
    padding:0px 20px 0px 10px;
    margin-top:20px;
  }
  @media(min-width:769px){
    padding:0px 45px 30px 40px;
    margin-top:40px;
  }
  @media(min-width:1200px){
    margin-top:60px;
  }
`;

const Title = styled.h4`
  font-weight: 300;
  font-size: 4.651vw;
  color: #9f9f9f;
  transform: translateY(-16px);
  background: #ffffff;
  width: 45%;
  margin: 0;
  text-align: center;
  margin-right: -5%;
  white-space: nowrap;
  @media(min-width:481px){
    font-size:1.875vw;
    transform: translateY(-10px);
    width: 64%;
  }
  @media(min-width:769px){
    font-size:1.875vw;
    transform: translateY(-14px);
    width: 74%;
  }
  @media(min-width:1200px){
    transform: translateY(-31px);
  }
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 5px;
  align-items: center;
  gap:12px;
  .type {
    color: #9f9f9f;
    font-weight: 400;
    font-size: 3.721vw;
    margin: 0;
    padding-bottom: 5px;
  }
  @media(min-width:481px){
    .type{
      font-size:1.250vw;
    }
  }
`;

const Progress = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  width: 70%;
  .number {
    white-space: nowrap;
  }
  .line {
    width: 50%;
    height: 3px;
    background-color: #eaeaea;
    position: relative;
    .show-census {
      height: 3px;
      position: absolute;
      top: -5px;
      right: 0;
    }
  }
  @media(min-width:481px){
    .number{
      font-size:1.250vw;
    }
    .line{
      height:5px;
      .show-census{
        height:5px;
      }
    }
  }
`;
