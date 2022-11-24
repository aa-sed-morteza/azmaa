import React, { useState } from "react";
import styled from "styled-components";
import ok from "../../../assets/ok.webp";
import disagree from "../../../assets/disagree.webp";
import info from "../../../assets/info.webp";
import absent from "../../../assets/absent.webp";
import noVote from "../../../assets/noVote.webp";

export default function VotesCensus() {
  const [envoy, setEnvoy] = useState(267);
  return (
    <Container>
      <Title> آمار آراء</Title>
      <Row>
        <Item className="active">
          <Type color="#6CBBA9" icon={ok}>
            موافق:
          </Type>
          <Number color="#6CBBA9">
            <span>167/</span>
            {envoy}
          </Number>
        </Item>

        <Item>
          <Type color="#FFA5A5" icon={disagree}>
            مخالف:
          </Type>
          <Number color="#FFA5A5">
            <span>57/</span>
            {envoy}
          </Number>
        </Item>

        <Item>
          <Type color="#CBCBCB" icon={info}>
            ممتنع:
          </Type>
          <Number color="#CBCBCB">
            <span>21/</span>
            {envoy}
          </Number>
        </Item>

        <Item>
          <Type color="#9F9F9F" icon={absent}>
            غایب:
          </Type>
          <Number color="#9F9F9F">
            <span>34/</span>
            {envoy}
          </Number>
        </Item>

        <Item>
          <Type color="#9F9F9F" icon={noVote}>
            بدون‌رأی:
          </Type>
          <Number color="#9F9F9F">
            <span>167/</span>
            {envoy}
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
  @media (min-width: 480px) {
    padding: 0px 45px 30px 40px;
    margin-top: 60px;
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
  @media (min-width: 480px) {
    font-size: 1.875vw;
    transform: translateY(-31px);
    width: 40%;
  }
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 5px;
  gap: 10px;
  @media (min-width: 480px) {
    flex-direction: column;
    gap:15px;
  }
`;

const Item = styled.div`
  width: 48%;
  display: flex;
  gap: 7px;
  align-items: center;
  @media (min-width: 480px) {
    width: 100%;
    &.active {
      background-color: #dff5f0;
      border-radius: 8px;
      padding: 5px;
    }
  }
`;

const Type = styled.p`
  margin: 0;
  font-size: 3.721vw;
  font-weight: 400;
  color: ${(props) => props.color};
  position: relative;
  padding-right: 20px;
  &:before {
    content: "";
    display: block;
    position: absolute;
    background-image: url(${(props) => props.icon});
    background-size: contain;
    background-repeat: no-repeat;
    width: 15px;
    height: 15px;
    right: 0;
    top: 5px;
  }
  @media (min-width: 480px) {
    font-size: 1.25vw;
    font-weight: 300;
    padding-right: 40px;
    &:before {
      width: 30px;
      height: 30px;
      top:2px;
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
  @media (min-width: 480px) {
    font-size: 1.667vw;
  }
`;
