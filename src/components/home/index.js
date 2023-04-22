import React from "react";
import styled from "styled-components";
import useWidth from "../../hook/useWidth";
import FirstBanner from "./components/firstBanner";
import HomeDetails from "./components/homeDetails";
import Magazine from "./components/magazine";
import SecondBanner from "./components/secondBanner";
import Carousel from "./components/carousel";

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
