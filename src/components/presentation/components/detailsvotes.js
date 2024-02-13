import React from "react";
import styled from "styled-components";

export default function DetailsVotes({ title, fraction, approved }) {
  console.log(fraction);
  return (
    <Container>
      <Title>جزئیات </Title>
      <Row>
        {/* <p className="type">نام طرح: </p> */}
        <p className="expand">{title}</p>
      </Row>
      <Row>
        <p className="type"> وضعیت: </p>
        <p className="expand">
          {approved && approved == true ? "تصویب شده" : "رد شده"}
        </p>
      </Row>
      <Row>
        <p className="type"> کمیسیون: </p>
        <p className="expand">{fraction.name}</p>
      </Row>
    </Container>
  );
}

const Container = styled.div`
  border: 1px solid #cbcbcb;
  border-radius: 4px;
  padding: 0px 29px 20px;
  margin-top: 40px;
  @media (min-width: 481px) {
    padding: 0px 20px 0px 10px;
    margin-top: 20px;
  }
  @media (min-width: 769px) {
    padding: 0px 45px 30px 40px;
    margin-top: 40px;
  }
  @media (min-width: 1200px) {
    margin-top: 60px;
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
  @media (min-width: 481px) {
    font-size: 1.875vw;
    transform: translateY(-10px);
    width: 64%;
  }
  @media (min-width: 769px) {
    font-size: 1.875vw;
    transform: translateY(-14px);
    width: 74%;
  }
  @media (min-width: 1200px) {
    transform: translateY(-31px);
  }
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 5px;
  .type {
    color: #9f9f9f;
    font-weight: 400;
    font-size: 3.721vw;
    margin: 0;
    width: 90%;
    padding-bottom: 5px;
  }
  .expand {
    color: #707070;
    font-weight: 700;
    font-size: 3.721vw;
    margin: 0;
  }
  @media (min-width: 481px) {
    gap: 10px;
    .type,
    .expand {
      font-size: 1.25vw;
      width: fit-content;
    }
  }
`;
