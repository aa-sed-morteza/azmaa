import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

export default function Presentation() {
  const {title} =useParams();
  return (
    <Container>
      <Title>
        <p className="home">خانه / رای گیری /</p>
        <p className="component"> {title} </p>
      </Title>
      <Content>

      </Content>
    </Container>
  );
}

const Container = styled.section`
  padding: 10px 20px;
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
    white-space: nowrap;
  }
  .component {
    font-size: 3.721vw;
    font-weight: 700;
    margin: 0;
    color: rgba(112, 112, 112, 1);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  @media (min-width: 480px) {
    margin-bottom: 25px;
    padding-right: 10%;
    .home,
    .component {
      font-size: 1.25vw;
    }
  }
`;


const Content =styled.div`

`
