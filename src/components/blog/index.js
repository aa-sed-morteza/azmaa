import React from "react";
import styled from "styled-components";
import Magazine from "./components/magazine";
import Poster from "./components/poster";
import SelectNews from "./components/selectNews";

const Container = styled.section`
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  padding: 10px ;
  overflow: hidden;
`;

const Title = styled.div`
  display: flex;
  margin-bottom: 12px;
  padding-right:10px;
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
    margin-bottom: 25px;
    padding-right: 10%;
    .home,
    .component {
      font-size: 1.25vw;
    }
  }
`;

export default function Blog() {
  return (
    <Container>
      <Title>
        <p className="home">خانه / </p>
        <p className="component"> بلاگ </p>
      </Title>

      <Poster/>
      <Magazine/>
      <SelectNews/>
    </Container>
  );
}
