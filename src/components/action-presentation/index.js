import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import Header from "./components/header";
import DetailsAction from "./components/detailsAction";
import ActionsCensus from "./components/actionCensus";
import Census from "./components/census";
import ControlStatus from "./components/controlStatus";
import action from "../../assets/act.webp";
import symbol from "../../assets/action-rate.webp";
import axios from "axios";
import { BaseBackURL } from "../../constant/api";

export default function ActionPresentation() {
  const navigate = useNavigate();
  const { title } = useParams();
  const [action, setAction] = useState({});

  const getAction = () => {
    let config = {
      method: "get",
      url: `${BaseBackURL}api/v1/activity/${title}/`,
    };
    axios(config)
      .then((res) => {
        // console.log(JSON.stringify(res.data));
        setAction(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };




  let positiveAction = [];
  let negativeAction = [];
  let anotherAction = [];
  useEffect(() => {
    getAction();

    if (action.id) {
      positiveAction = action.vote.filter((x) => x.vote == "همراه");
      negativeAction = action.vote.filter((x) => x.vote == "ناهمراه");
      anotherAction = action.vote.filter(
        (x) => x.vote !== "ناهمراه" && x.vote !== "همراه"
      );
    }
  }, []);

  return (
    <Container>
      <Title>
        <p className="home" onClick={()=>{navigate("/actions")}} >خانه / عملکردها /</p>
        <p className="component">{action && action.name} </p>
      </Title>
      <Content>
        {action.name && (
          <Wraper>
            <Header
              img={symbol}
              icon={action}
              type="عملکرد"
              title={action.name}
              date={action.date}
            />
            <DetailsAction title={action.name} />
            <Census total={action.vote && action.vote.length} complete={"?"} select={"?"} />
            <ActionsCensus
              total={action.vote && action.vote.length}
              data={action }
            />
          </Wraper>
        )}
        {action.id && <ControlStatus action={action} />}
      </Content>
    </Container>
  );
}

const Container = styled.section`
  padding: 10px 20px;
  @media(min-width:480px){
    background-color:#ffffff;
    padding :25px 0;
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
    padding-right: 5px;
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
