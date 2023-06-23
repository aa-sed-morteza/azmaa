import React from "react";
import styled from "styled-components";
import SectionRoom from "../components/sectionRoom";

export default function MySection() {
  return (
    <Container>
      <Title>
        <p className="home">پنل / </p>
        <p className="component"> مطالب من </p>
      </Title>
      <SectionRoom/>
    </Container>
  );
}

const Container = styled.section`
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  padding: 10px 20px;
  overflow: hidden;
  @media (min-width: 480px) {
    background-color: #f5f5f5;
    padding: 0;
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
    padding-left: 7px;

  }
  .component {
    font-size: 3.721vw;
    font-weight: 700;
    margin: 0;
    color: rgba(112, 112, 112, 1);
  }
  @media (min-width: 480px) {
    display:none;
  }
`;
