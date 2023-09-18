import React, { useEffect, useState } from "react";
import styled from "styled-components";
import useWidth from "../hook/useWidth";
import ActiveEnvoy from "../components/envoy/components/activeEnvoy";
import AdvanceSearch from "../components/envoy/components/advanceSearch";
import Banner from "../components/envoy/components/banner";
import EnvoyFiltering from "../components/envoy/components/envoyFiltering";
import HonestEnvoy from "../components/envoy/components/honestEnvoy";
import Map from "../components/envoy/components/map";
import NewEnvoy from "../components/envoy/components/newEnvoy";
import Search from "../components/envoy/components/search";
import IranMap from "../components/pluginIranMap/IranMap";
import { BaseBackURL } from "../constant/api";
import axios from "axios";
import { useUser } from "../context/userContext";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Envoy() {
  const { envoyListToShow } = useSelector((state) => state.envoy);
  const width = useWidth();
  const navigate = useNavigate();
  console.log(envoyListToShow);

  return (
    <Container>
      <Title>
        <p
          className="home"
          onClick={() => {
            navigate("/");
          }}
        >
          خانه /
        </p>
        <p
          className="component"
          onClick={() => {
            navigate("/envoy");
          }}
        >
          نمایندگان
        </p>
      </Title>
      <Content>
        {width < 481 ? (
          // <Map />
          <IranMap />
        ) : (
          <Wraper>
            <IranMap />
            <HonestEnvoy envoys={envoyListToShow} />
          </Wraper>
        )}

        <Search />
        {/* <AdvanceSearch  setEnvoys={setEnvoys} /> */}
        {width < 481 && <EnvoyFiltering envoys={envoyListToShow} />}
        {width > 481 && (
          <>
            <ActiveEnvoy envoys={envoyListToShow} />

            <Banner />

            <NewEnvoy envoys={envoyListToShow} />
          </>
        )}
      </Content>
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  flex-direction: column;
  padding: 21vw 20px;
  overflow: hidden;
  @media (min-width: 481px) {
    padding: 7vw 0 6vw;
    background-color: #ffffff;
  }
`;

const Title = styled.div`
  display: flex;
  margin-bottom: 12px;
  white-space: nowrap;
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
  position: relative;
  @media (min-width: 481px) {
    padding: 0;
  }
`;

const Wraper = styled.div`
  display: flex;
  gap: 2vw;
  justify-content: space-between;
  margin-bottom: 70px;
  padding: 0 6%;
`;

const RemoveCitySearch = styled.div`
  position: absolute;
  top: -15px;
  left: 10%;
  background: #ffaa00;
  border-radius: 4px;
  padding: 10px;
  font-size: 10px;
  font-weight: 400;
  color: #ffffff;
  cursor: pointer;
  @media (min-width: 481px) {
    font-size: 14px;
  }
`;
