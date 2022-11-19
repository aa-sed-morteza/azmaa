import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Header from "./components/header";
import DetailsAction from "./components/detailsAction";
import ActionsCensus from "./components/actionCensus";
import Census from "./components/census";
import ControlStatus from "./components/controlStatus";
import action from "../../assets/act.png";
import symbol from "../../assets/action-rate.png";


export default function ActionPresentation() {
  const { title } = useParams();
  return (
    <Container>
      <Title>
        <p className="home">خانه /  عملکردها /</p>
        <p className="component"> {title} </p>
      </Title>
      <Content>
        <Wraper>
          <Header img={symbol} icon={action} type="عملکرد" />
          <DetailsAction />
          <Census />
          <ActionsCensus />
        </Wraper>
        <ControlStatus />
      </Content>
    </Container>
  );
}

const Container = styled.section`
  padding: 10px 20px;
  @media(min-width:480px){
    background-color:#ffffff;
    padding 25px 0;
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
    border-bottom: 1px solid #d8d8d8;
    margin-right: 10%;
    padding-bottom: 25px;
    .home,
    .component {
      font-size: 1.25vw;
    }
  }
`;

const Content = styled.div`
  background-color: #ffffff;
  border-radius: 4px;
  padding: 21px 11px 0;
  @media (min-width: 480px) {
    border-radius: inherit;
    padding: 0px 10% 0px 0px;
    display: flex;
    justify-content: space-between;
    gap: 35px;
  }
`;

const Wraper = styled.div`
  @media (min-width: 480px) {
    width: 26.5%;
  }
`;
