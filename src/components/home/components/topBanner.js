import React, { useEffect, useState } from "react";
import styled from "styled-components";
import IranMap from "../../pluginIranMap/IranMap";
import Carousel from "./carousel";

export default function TopBanner() {
  return (
    <Wrapper>
      <Carousel />
      {/* <SelectState /> */}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  height: 100vh;
  overflow: hidden;
  flex-wrap: nowrap;
  display: flex;
  padding: 0;
  margin: 0 0 50px 0;
  position: relative; 
`;
