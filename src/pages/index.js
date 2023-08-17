import React, { useEffect } from "react";
import styled from "styled-components";
import useWidth from "../hook/useWidth";
import HomeDetails from "../components/home/components/homeDetails";
import Magazine from "../components/home/components/magazine";
import Carousel from "../components/home/components/carousel";
import { useSelector } from "react-redux";
import {
  filterData,
  getAllEnvoysData,
} from "../dataFunctions/publicDataFunctions";
import { BaseBackURL } from "../constant/api";
import axios from "axios";
import FilterBox from "../components/general/filterBox";
import LastVotes from "../components/home/components/lastVotes";
import LastActivities from "../components/home/components/lastActivities";
import BestEnvoys from "../components/home/components/BestEnvoys";

const HomeContainer = styled.section`
  overflow-x: hidden;
  overflow-y: auto;
`;

export default function Home() {
  const width = useWidth();

  return (
    <HomeContainer>
      {width > 480 ? <Carousel /> : ""}
      {/* <FirstBanner /> */}
      <FilterBox />
      <LastVotes />
      <BestEnvoys />
      <LastActivities />
      {/* <HomeDetails /> */}
      <Magazine />
      {/* <SecondBanner /> */}
    </HomeContainer>
  );
}
