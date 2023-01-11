import React from "react";
import styled from "styled-components";

export default function Header({ img, type, icon }) {
  return (
    <Container>
      <Symbol>
        <img src={img} alt="symbol" />
      </Symbol>
      <Content>
        <Type icon={icon}>{type}</Type>
        <Ttile>کلیات لایحۀ بودجۀ سال ۱۴۰۱</Ttile>
        <Date>۲۹ اسفند ۱۴۰۰</Date>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  padding: 0px 24px;
  justify-content: space-between;
  margin-bottom: 20px;
  @media (min-width: 481px) {
    padding: 0;
  }
`;

const Symbol = styled.div`
  width: 89px;
  height: 89px;
  img {
    width: 100%;
    height: auto;
    object-fit: contain;
  }
  @media (min-width: 481px) {
    width: 60px;
    height: 60px;
  }
  @media (min-width: 1025px) {
    width: 6.771vw;
    height: 6.771vw;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  @media (min-width: 481px) {
    width: 60%;
    gap:5px;
  }
  @media (min-width: 769px) {
    width: 67%;
    gap: 10px;
  }
`;

const Type = styled.p`
  display: flex;
  align-items: center;
  gap: 7px;
  margin: 0;
  font-size: 3.721vw;
  color: #707070;
  font-weight: 100;
  &:before {
    content: "";
    display: inline-flex;
    background-image: url(${(props) => props.icon});
    background-size: contain;
    background-repeat: no-repeat;
    width: 21px;
    height: 21px;
  }
  @media (min-width: 481px) {
    font-size: 1.25vw;
    font-weight: 300;
   
  }
  @media (min-width: 769px) {
    font-size: 1.25vw;
    font-weight: 300;
    &:before {
      width: 30px;
      height: 30px;
    }
  }
`;

const Ttile = styled.h3`
  font-weight: 400;
  font-size: 4.651vw;
  color: #707070;
  margin: 0;
  @media (min-width: 481px) {
    font-size: 1.667vw;
    font-weight: 700;
  }
`;

const Date = styled.p`
  margin: 0;
  color: rgba(0, 0, 0, 0.2);
  font-size: 2.791vw;
  font-weight: 700;
  @media (min-width: 481px) {
    font-size: 1.25vw;
    font-weight: 500;
  }
`;
