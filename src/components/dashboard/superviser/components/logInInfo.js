import React from "react";
import styled from "styled-components";

export default function LogInInfo() {
  return (
    <Container>
      <Title> اطلاعات ورود</Title>
      <Row>
        <p className="type">نام کاربری : </p>
        <p className="expand">۰۹۱۲۳۵۴۶۵۴۳</p>
      </Row>
      <Row>
        <p className="type">رمز ورود: </p>
        <p className="expand">**********</p>
      </Row>
    </Container>
  );
}

const Container = styled.div`
  border: 1px solid #cbcbcb;
  border-radius: 4px;
  padding: 0px 29px 20px;
  margin-top:15px;

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
  width: 40%;
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
    gap: 10px;
    .type,
    .expand {
      font-size: 1.25vw;
      width: fit-content;
    }
  }
`;
