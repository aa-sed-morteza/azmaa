import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Header from "./components/header";
import symbol from "../../assets/vote-logo.webp";
import vote from "../../assets/vote.webp";
import DetailsVotes from "./components/detailsvotes";
import Census from "./components/census";
import VotesCensus from "./components/votesCensus";
import ControlStatus from "./components/controlStatus";
import axios from "axios";
import { BaseBackURL } from "../../constant/api";
import { convertDateToFarsi } from "../../utils";

export default function Presentation() {
  const { title } = useParams();
  const [bill, setBill] = useState({});

  const getBill = () => {
    let config = {
      method: "get",
      url: `${BaseBackURL}api/v1/bill/${title}/`,
    };
    axios(config)
      .then((res) => {
        // console.log(JSON.stringify(res.data));
        setBill(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getBill();
  }, []);

  return (
    <Container>
      <Title>
        <p className="home">خانه / رای گیری /</p>
        <p className="component"> {bill && bill.name} </p>
      </Title>
      <Content>
        {bill.name && (
          <Wraper>
            <Header
              img={symbol}
              icon={vote}
              type="رای گیری"
              date={bill.date && convertDateToFarsi(bill.date)}
              title={bill.name}
            />
            <DetailsVotes title={bill.name} fraction={bill.fraction?bill.fraction.name:""} />
            <Census
              total={bill.vote_number.total}
              complete={"?"}
              select={"?"}
            />
            <VotesCensus
              total={bill.vote_number.total}
              positive={bill.vote_number.positive}
              negative={bill.vote_number.negative}
              none={bill.vote_number.none}
              absent={bill.vote_number.absent}
              without={bill.vote_number.without_vote}
            />
          </Wraper>
        )}

        {bill.id && <ControlStatus bill={bill} />}
      </Content>
    </Container>
  );
}

const Container = styled.section`
  padding: 10px 20px;
  @media(min-width:481px){
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
  @media (min-width: 481px) {
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
  @media (min-width: 481px) {
    border-radius: inherit;
    padding: 0px 10% 0px 0px;
    display: flex;
    justify-content: space-between;
    gap: 35px;
  }
`;

const Wraper = styled.div`
  @media (min-width: 481px) {
    width: 26.5%;
  }
`;
