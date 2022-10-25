import React from "react";
import styled from "styled-components";
import useWidth from "../../hook/useWidth";
import FirstBanner from "./components/firstBanner";
import HomeDetails from "./components/homeDetails";
import Slider from "./components/slider";

const HomeContainer = styled.section`
  height: 100vh;
  padding:20px ;
  overflow-x:hidden;
`;

export default function Home() {
    const width = useWidth();
  return <HomeContainer>
    {width>480?(<Slider/>):""}
    <FirstBanner/>
    <HomeDetails/>
  </HomeContainer>;
}
