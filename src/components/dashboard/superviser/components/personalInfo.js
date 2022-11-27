import React from "react";
import styled from "styled-components";

export default function PersonalInfo() {
  return (
    <Container>
      <Title>اطلاعات شخصی</Title>
      <Row>
        <p className="type">نام : </p>
        <p className="expand">مرتضی</p>
      </Row>
      <Row>
        <p className="type">نام خانوادگی : </p>
        <p className="expand">یزدان‌پرست</p>
      </Row>
      <Row>
        <p className="type"> محل تولد : </p>
        <p className="expand">تهران</p>
      </Row>
      <Row>
        <p className="type"> تاریخ تولد: </p>
        <p className="expand">۱۳۴۰/۰۳/۲۰</p>
      </Row>
      <Row>
        <p className="type"> کد ملی: </p>
        <p className="expand">۰۸۹۶۹۰۵۸۸۹</p>
      </Row>
    </Container>
  );
}

const Container = styled.div`
  border: 1px solid #cbcbcb;
  border-radius: 4px;
  padding: 0px 29px 20px;
  margin-top: 15px;
  @media (min-width: 480px) {
    padding:0 2.292vw 1.875vw ;
    margin-top: 2.083vw;
  }
`;

const Title = styled.h4`
  font-weight: 300;
  font-size: 4.651vw;
  color: #9f9f9f;
  transform: translateY(-16px);
  background: #ffffff;
  width: 40%;
  margin: 0;
  text-align: center;
  margin-right: -5%;
  @media (min-width: 480px) {
    font-size: 1.875vw;
    transform: translateY(-1.615vw);
    width: 27%;
    margin-right:1.646vw;
    margin-bottom:-1.042vw;
  }
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 5px;
  .type {
    color: #9f9f9f;
    font-weight: 300;
    font-size: 3.721vw;
    margin: 0;
    padding-bottom: 5px;
  }
  .expand {
    color: #9f9f9f;
    font-weight: 700;
    font-size: 4.651vw;
    margin: 0;
    padding-right: 10px;
  }
  @media (min-width: 480px) {
    margin-bottom:10px;
    align-items:center;
    gap: 10px;
    .type{
      padding-bottom:0;
      font-size:1.458vw;
    }
    .expand {
      font-size: 1.667vw;
    }
  }
`;
