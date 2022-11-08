import React from "react";
import styled from "styled-components";
import check from "../../../assets/check.png";
import line from "../../../assets/Line.png";
import ActionCard from "../../home/components/actionCard";
import upArrow from "../../../assets/arrow.png";


const Container = styled.section`
  margin-top: 10px;
  border-right: 1px dashed #cbcbcb;
  margin-right: -5px;
  padding-right: 5px;
`;

const SubTitile = styled.h2`
  font-weight:700;
  font-size:3.721vw;
  color:#9F9F9F;
  padding-right:40px;
  position:relative;
  margin-bottom:5px;
  &:before{
    content:"";
    display:block;
    position:absolute;
    background-image: url(${check});
    background-size: cover;
    background-repeat: no-repeat;
    width:18px;
    height:18px;
    right:16px;
    top:2px;
  }
  &:after{
    content:"";
    display:block;
    position:absolute;
    background-image: url(${line});
    background-size: cover;
    background-repeat: no-repeat;
    width:16px;
    height:1px;
    right: -3px;
    top: 10px;
  
`;

const Title = styled.div`
  border: 1px solid #d8d8d8;
  border-radius: 4px;
  background-color: #ffffff;
  padding:1px 16px;
  width:fit-content;
  margin:auto;
  font-size:3.721vw;
  font-weight:700;
  color:#9F9F9F;
  position:relative;
  margin-top:24px;
  &:before{
    content:"";
    display:flex;
    position: absolute;
    border-bottom: 1px dashed #CBCBCB;
    width: 140px;
    right: -142px;
    top: 11px;
  }
  &:after{
    content:"";
    display:flex;
    position: absolute;
    border-bottom: 1px dashed #CBCBCB;
    width: 140px;
    left: -142px;
    top: 11px;
  }
`;

const ShowMore = styled.div`
  border: 1px solid #9f9f9f;
  border-radius: 4px;
  display: flex;
  padding: 8px;
  margin-top:16px;
  p {
    margin: auto;
    color: #9f9f9f;
    font-size: 4.65vw;
    position: relative;
    font-weight: 300;
    &:after {
      content: "";
      display: flex;
      position: absolute;
      left: -25px;
      bottom: 8px;
      background-image: url(${upArrow});
      background-size: cover;
      background-repeat: no-repeat;
      width: 9px;
      height: 5px;
    }
  }

  @media (min-width: 480px) {
    border: 2px solid #9f9f9f;
    border-radius: 8px;
    max-width: 500px;
    justify-content: center;
    align-items: center;
    margin: auto;
    padding: 13px;
    p {
      font-size: 1.25vw;
      font-weight: 400;
      &:after {
        width: 15px;
        height: 8px;
        left: -37px;
      }
    }
  }
`;



export default function Calendar(){
    return(
        <Container>
        <SubTitile>مرداد ۱۴۰۱</SubTitile>
        <ActionCard />
        <SubTitile style={{ marginTop: "20px" }}> تیر ۱۴۰۱</SubTitile>
        <ActionCard />
        <Title>سال ۱۴۰۰</Title>
        <SubTitile style={{ marginTop: "0px" }}>مرداد ۱۴۰۰</SubTitile>
        <ActionCard />
  
        <ShowMore><p> نمایش بیشتر</p></ShowMore>
      </Container>
    )
}