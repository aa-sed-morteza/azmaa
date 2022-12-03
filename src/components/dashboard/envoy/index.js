import React from "react";
import styled from "styled-components";
import PersonalInformation from "./components/personalInformation";

export default function EnvoyDashboard() {
  return (
    <Container>
      <Title>
        <p className="home">پنل / </p>
        <p className="component"> اطلاعات کاربری </p>
      </Title>
      <PersonalInformation/>
    </Container>
  );
}

const Container = styled.section`
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  padding: 10px;
  overflow: hidden;
  @media (min-width: 480px) {
    background-color: #ffffff;
    padding: 1.042vw 2.604vw 2.083vw 11.458vw;
  }
`;

const Title = styled.div`
  display: flex;
  margin-bottom: 12px;
  padding-right: 10px;
  .home {
    font-size: 3.721vw;
    font-weight: 700;
    margin: 0;
    color: rgba(0, 0, 0, 0.2);
  }
  .component {
    font-size: 3.721vw;
    font-weight: 700;
    margin: 0;
    color: rgba(112, 112, 112, 1);
  }
  @media (min-width: 480px) {
    display: none;
  }
`;
