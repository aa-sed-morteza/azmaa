import React from "react";
import styled from "styled-components";
import Controler from "../vote/components/controler";
import Filtering from "../vote/components/filtering";
import Calendar from "./components/calendar";

const Container = styled.section`
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  padding: 10px 20px;
  overflow: hidden;
  @media(min-width:480px){
    background-color:#ffffff;
    padding-bottom:0;
  }
`;

const Title = styled.div`
  display: flex;
  margin-bottom: 12px;
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

const Content = styled.div`
  background-color: #ffffff;
  border-radius: 4px;
  padding: 10px;
  @media (min-width: 480px) {
    margin-top:25vh;
    padding-bottom:0;
  }
`;


export default function Actions(){
    return (
        <Container>
        <Title>
          <p className="home">خانه / </p>
          <p className="component">  عملکردها </p>
        </Title>
  
        <Content>
          <Controler/>
          <Filtering/>
          <Calendar/>
        </Content>
      </Container>
    )
}