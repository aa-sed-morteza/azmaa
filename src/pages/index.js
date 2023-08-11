import React, { useEffect } from "react";
import styled from "styled-components";
import useWidth from "../hook/useWidth";
import HomeDetails from "../components/home/components/homeDetails";
import Magazine from "../components/home/components/magazine";
import Carousel from "../components/home/components/carousel";
import { useSelector } from "react-redux";
import { getAllEnvoysData } from "../dataFunctions/publicDataFunctions";
import { BaseBackURL } from "../constant/api";
import axios from "axios";

const HomeContainer = styled.section`
  overflow-x: hidden;
  overflow-y: auto;
  height: auto;
  padding: 20px;
`;

export default function Home() {
  const width = useWidth();

  return (
    <HomeContainer>
      {width > 480 ? <Carousel /> : ""}
      {/* <FirstBanner /> */}
      <HomeDetails />
      <Magazine />
      {/* <SecondBanner /> */}
    </HomeContainer>
  );
}
