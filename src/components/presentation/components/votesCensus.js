import React, { useState } from "react";
import styled from "styled-components";
import ok from "../../../assets/ok.webp";
import disagree from "../../../assets/disagree.webp";
import info from "../../../assets/info.webp";
import Absent from "../../../assets/absent.webp";
import noVote from "../../../assets/noVote.webp";
import { toFarsiNumber } from "../../../utils";

export default function VotesCensus({total,positive,negative,none,absent,without,
  real_absent_vote,
  real_without_vote,
  real_none_vote,
  real_negative_vote,
  real_positive_vote}) {
  
  return (
    <Container>
      <Title> آمار آراء</Title>
      <Row>
        <Item className="active">
          <Type color="#6CBBA9" icon={ok}>
            موافق:
          </Type>
          <Number color="#6CBBA9">
            <span>{toFarsiNumber(positive) }/</span>
            {toFarsiNumber(real_positive_vote)}
          </Number>
        </Item>

        <Item>
          <Type color="#FFA5A5" icon={disagree}>
            مخالف:
          </Type>
          <Number color="#FFA5A5">
            <span>{toFarsiNumber(negative) }/</span>
            {toFarsiNumber(real_negative_vote)}
          </Number>
        </Item>

        <Item>
          <Type color="#CBCBCB" icon={info}>
            ممتنع:
          </Type>
          <Number color="#CBCBCB">
            <span>{toFarsiNumber(none)}/</span>
            {toFarsiNumber(real_none_vote)}
          </Number>
        </Item>

        <Item>
          <Type color="#9F9F9F" icon={Absent}>
            غایب:
          </Type>
          <Number color="#9F9F9F">
            <span>{toFarsiNumber(absent)}/</span>
            {toFarsiNumber(real_absent_vote)}
          </Number>
        </Item>

        <Item>
          <Type color="#9F9F9F" icon={noVote}>
            بدون‌رأی:
          </Type>
          <Number color="#9F9F9F">
            <span>{toFarsiNumber(without)}/</span>
            {toFarsiNumber(real_without_vote)}
          </Number>
        </Item>
      </Row>
    </Container>
  );
}

const Container = styled.div`
  border: 1px solid #cbcbcb;
  border-radius: 4px;
  padding: 0px 29px 20px;
  margin-top: 40px;
  @media(min-width:481px){
    padding:0px 20px 30px 10px;
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
  width: 35%;
  margin: 0;
  text-align: center;
  margin-right: -5%;
  @media(min-width:481px){
    font-size:1.875vw;
    transform: translateY(-10px);
  }
  @media(min-width:769px){
    transform: translateY(-14px);
  }
  @media(min-width:1200px){
    transform: translateY(-31px);
  }
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 5px;
  gap: 10px;
  @media (min-width: 481px) {
    flex-direction: column;
    gap:15px;
  }
`;

const Item = styled.div`
  width: 90%;
  display: flex;
  gap: 7px;
  align-items: center;
  @media (min-width: 481px) {
    // width: 80%;
    &.active {
      background-color: #dff5f0;
      border-radius: 8px;
      padding: 5px;
    }
  }
  @media (min-width: 769px) {
    // width: 100%;
    &.active {
      background-color: #dff5f0;
      border-radius: 8px;
      padding: 5px 10px;
    }
  }
`;

const Type = styled.p`
  margin: 0;
  font-size: 3.721vw;
  font-weight: 400;
  color: ${(props) => props.color};
  display:flex;
  align-items:center;
  gap:7px;
  &:before {
    content: "";
    display: inline-flex;
    background-image: url(${(props) => props.icon});
    background-size: contain;
    background-repeat: no-repeat;
    width: 15px;
    height: 15px;
  }
  @media (min-width: 481px) {
    font-size: 1.25vw;
    font-weight: 300;
  }
  @media(min-width:769px){
    &:before{
      width:1.563vw;
      height:1.563vw;
    }
  }
`;

const Number = styled.div`
  font-size: 3.651vw;
  font-weight: 400;
  color: #9f9f9f;
  span {
    color: ${(props) => props.color};
    font-weight: 700;
  }
  @media (min-width: 481px) {
    font-size: 1.667vw;
  }
`;
