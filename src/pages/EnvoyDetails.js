import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useWidth from "../hook/useWidth";
import styled from "styled-components";
import EnvoyCard from "../components/general/envoyCard";
import Census from "../components/detailsEnvoy/components/census";
import EnvoyArea from "../components/detailsEnvoy/components/envoyArea";
import EnvoyHistory from "../components/detailsEnvoy/components/envoyHistory";
import Filtering from "../components/detailsEnvoy/components/Filtering";
import SocialNetwork from "../components/detailsEnvoy/components/socialNetwork";
import axios from "axios";
import { BaseBackURL } from "../constant/api";
import Controller from "../components/home/components/controller";
import { useSelector } from "react-redux";

export default function DetailsEnvoy() {
  const { id } = useParams();
  const navigate = useNavigate();
  const width = useWidth();
  const [envoy, setEnvoy] = useState({});
  const [envoyVotes, setEnvoyVotes] = useState([]);
  const { voteList } = useSelector((state) => state.vote);
  console.log(voteList);

  const getEnvoyDetail = () => {
    let config = {
      method: "get",
      url: `${BaseBackURL}api/v1/accounts/member/${id}`,
    };

    axios(config).then((res) => {
      setEnvoy(res.data);
    });
  };

  const handleEnvoyVotes = () => {
    const list = [];
    for (const vote of voteList) {
      for (const item of vote.negative_vote) {
        if (item.voter.id === +id) list.push(vote);
      }
      console.log(vote.positive_vote);
      for (const item of vote.positive_vote) {
        if (item.voter.id === +id) list.push(vote);
      }
      for (const item of vote.none_vote) {
        if (item.voter.id === +id) list.push(vote);
      }
    }
    console.log(list);
    setEnvoyVotes([...list]);
  };

  useEffect(() => {
    getEnvoyDetail();
    handleEnvoyVotes();
  }, [id]);

  return (
    <Container>
      <Title>
        <p
          className="home"
          onClick={() => {
            navigate("/envoy");
          }}
        >
          خانه / نمایندگان /
        </p>
        <p className="component">
          {" "}
          {envoy && envoy.first_name + " " + envoy.last_name}
        </p>
      </Title>
      {/* personal info */}
      <FirstSection>
        {envoy && (
          <EnvoyCard
            name={envoy.first_name + " " + envoy.last_name}
            state={envoy.electoral_district_name}
            commission={envoy.fraction_name}
            img={envoy.image}
            persantage={envoy.transparency}
            id={envoy.id}
            inBox={true}
          />
        )}

        <Census data={envoyVotes.length} complete={"?"} envoy={"?"} />
        <EnvoyArea data={envoy} />
        <EnvoyHistory id={id} />
        {/* {width > 481 ? <SocialNetwork /> : ""} */}
      </FirstSection>
      {/* filtering */}
      <SecondSection>{envoy && <Controller vote_voter={id} />}</SecondSection>
      {/* socialNetwork */}
      <ThirdSection>{/* <SocialNetwork /> */}</ThirdSection>
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  flex-direction: column;
  padding: 10px 20px;
  /* overflow: hidden; */
  gap: 3.488vw;
  @media (min-width: 481px) {
    padding: 7vw 0 6vw;
    background-color: #ffffff;
    gap: 0;
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

const Title = styled.div`
  display: flex;
  margin-bottom: 12px;
  position: relative;
  z-index: 2;
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
    padding-right: 5px;
  }
  @media (min-width: 481px) {
    width: 100%;
    padding-bottom: 1.302vw;
    padding-right: 10%;
    border-bottom: 1px solid #d8d8d8;

    .home,
    .component {
      font-size: 1.25vw;
    }
  }
`;

const FirstSection = styled.div`
  background-color: #ffffff;
  border-radius: 4px;
  padding: 4.419vw 2.326vw 2.558vw;
  display: flex;
  flex-direction: column;
  gap: 2.326vw;
  & > * {
    box-shadow: none;
  }
  @media (min-width: 481px) {
    width: 23%;
    padding-right: 10%;
    padding-top: 1.302vw;
    padding-left: 0.521vw;
    gap: 0.781vw;
    & > * {
      padding: 0;
    }
  }
`;

const SecondSection = styled.div`
  background-color: #ffffff;
  border-radius: 4px;
  padding: 2.326vw;
  @media (min-width: 481px) {
    width: 65%;
    margin-top: -93px;
    padding: 0.99vw 1.302vw 0 0;
    & > * {
      & .filter-box {
        margin-top: 0;
      }
    }
  }
`;

const ThirdSection = styled.div`
  background-color: #ffffff;
  border-radius: 4px;
  padding: 1.628vw 2.558vw 2.093vw;
  @media (min-width: 481px) {
    display: none;
  }
`;
