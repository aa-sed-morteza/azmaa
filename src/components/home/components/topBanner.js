import React, { useEffect, useState } from "react";
import styled from "styled-components";
import IranMap from "../../pluginIranMap/IranMap";
import Carousel from "./carousel";

export default function TopBanner() {
  return (
    <Wrapper>
      <Carousel />
      {/* <SelectState /> */}
      <IranMap
        style={{
          position: "absolute",
          top: "20%",
          bottom: "10%",
          margin: "auto",
        }}
      />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  height: 100vh;
  overflow: hidden;
  flex-wrap: nowrap;
  display: flex;
  padding: 0;
  margin: 0;
  position: relative;
`;
