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

const HomeContainer = styled.section`

  padding: 21vw 20px 0 20px;

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

  return (
    <HomeContainer>
      {width > 480 ? <TopBanner /> : ""}
      {/* <FirstBanner /> */}
      <FilterBox
        filterType={filterType}
        setFilterType={setFilterType}
        searchPhrase={searchPhrase}
        setSearchPhrase={setSearchPhrase}
      />
      {(filterType === "all" || filterType === "vote") && <LastVotes />}
      {(filterType === "all" || filterType === "envoy") && <BestEnvoys />}
      {(filterType === "all" || filterType === "activity") && (
        <LastActivities />
      )}

      {/* <HomeDetails /> */}
      <Magazine />
      {/* <SecondBanner /> */}
    </HomeContainer>
  );
}
