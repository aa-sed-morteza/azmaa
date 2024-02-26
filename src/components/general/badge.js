import { useEffect, useState } from "react";
import styled from "styled-components";
import useWidth from "../../hook/useWidth";

export default function Badge({ data, eWidth }) {
  const degree = (data.score * 360) / 100;
  const width = useWidth();

  return (
    <Container eWidth={width > 480 ? eWidth : 22}>
      <WhiteBoxLeft eWidth={width > 480 ? eWidth : 22}>
        <LeftRing
          eWidth={width > 480 ? eWidth : 22}
          degree={degree > 180 ? degree - 180 : 0}
          bColor={degree < 120 ? "red" : degree < 240 ? "#ffaa00" : "green"}
        />
      </WhiteBoxLeft>
      <WhiteBoxRight eWidth={eWidth}>
        <RightRing
          eWidth={width > 480 ? eWidth : 22}
          degree={degree < 180 ? degree : 180}
          bColor={degree < 120 ? "red" : degree < 240 ? "#ffaa00" : "green"}
        />
      </WhiteBoxRight>
      <Box eWidth={width > 480 ? eWidth : 22}>
        <h2>{data.name}</h2>
      </Box>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  width: ${(props) => `${props.eWidth}vw`};
  height: ${(props) => `${props.eWidth}vw`};
  border-radius: 50%;
  padding: 3px;
  box-sizing: border-box;
  background: #ababab;
  flex-shrink: 0;
`;

const WhiteBoxLeft = styled.div`
  position: absolute;
  top: 0;
  right: 50%;
  bottom: 0;
  left: 0;
  border-radius: ${(props) => `${props.eWidth / 2} 0 0 ${props.eWidth / 2}`};
  overflow: hidden;
`;
const LeftRing = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 100%;
  right: -100%;
  border-radius: ${(props) =>
    `0 ${props.eWidth / 2}vw ${props.eWidth / 2}vw 0`};
  background-color: ${(props) => props.bColor};
  transform: rotate(${(props) => props.degree}deg);
  transform-origin: left center;
`;

const WhiteBoxRight = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  bottom: 0;
  right: 0;
  border-radius: ${(props) =>
    `0 ${props.eWidth / 2}vw ${props.eWidth / 2}vw 0`};
  overflow: hidden;
`;

const RightRing = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: -100%;
  right: 100%;
  border-radius: ${(props) =>
    `${props.eWidth / 2}vw 0 0 ${props.eWidth / 2}vw`};
  background-color: ${(props) => props.bColor};
  transform: rotate(${(props) => props.degree}deg);
  transform-origin: right center;
`;

const Box = styled.div`
  text-align: center;
  background-color: #f0f0f0;
  border-radius: 50%;
  width: 100%;
  height: 100%;
  display: flex;
  z-index: 10;
  position: relative;
  padding: 10px;
  box-sizing: border-box;

  & > h2 {
    color: #707070;
    font-size: ${(props) => `${props.eWidth * 2}px`};
    font-weight: 900;
    margin: auto;

    @media (max-width: 480px) {
      font-size: 16px;
    }
  }
`;
