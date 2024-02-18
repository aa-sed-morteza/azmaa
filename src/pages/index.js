import React, { useEffect, useState } from "react";
import styled from "styled-components";
import useWidth from "../hook/useWidth";
import Magazine from "../components/home/components/magazine";
import Carousel from "../components/home/components/carousel";
import FilterBox from "../components/general/filterBox";
import LastVotes from "../components/home/components/lastVotes";
import LastActivities from "../components/home/components/lastActivities";
import BestEnvoys from "../components/home/components/BestEnvoys";
import TopBanner from "../components/home/components/topBanner";
import IranMap from "../components/pluginIranMap/IranMap";
import { useFetcher } from "react-router-dom";

const HomeContainer = styled.section`
  padding: 6vw 20px 0 20px;

  @media (min-width: 481px) {
    padding: 0;
    overflow-x: hidden;
    overflow-y: auto;
    padding-bottom: 6vw;
  }
`;

export default function Home() {
  const width = useWidth();
  const [filterType, setFilterType] = useState("all");
  const [searchPhrase, setSearchPhrase] = useState("");
  const isMobile = window.innerWidth <= 768;

  return (
    <HomeContainer>
       <TopBanner /> 
      {/* <FirstBanner /> */}
      
<IranMap style={{
  width: "63.5%",
  margin: "auto",
  marginBottom: isMobile ? "25px" : "0",
}}/>
      <FilterBox
        filterType={filterType}
        setFilterType={setFilterType}
        searchPhrase={searchPhrase}
        setSearchPhrase={setSearchPhrase}
      />
      {(filterType === "all" || filterType === "vote") && (
        <LastVotes searchPhrase={searchPhrase} />
      )}
      {(filterType === "all" || filterType === "envoy") && (
        <BestEnvoys searchPhrase={searchPhrase} />
      )}
      {(filterType === "all" || filterType === "activity") && (
        <LastActivities searchPhrase={searchPhrase} />
      )}
      {/* <HomeDetails /> */}
      <Magazine />
      {/* <SecondBanner /> */}
    </HomeContainer>
  );
}
