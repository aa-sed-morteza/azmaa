import React from "react";
import styled from "styled-components";
import data from "../../../data.json";
import iran from "../../../assets/map.png";

const Container = styled.section`
  border: 1px solid #cbcbcb;
  border-radius: 4px;
  position: relative;
  margin-bottom: 10px;
`;

const IranMap = styled.div`
  width: 82.791vw;
  height: 79.07vw;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const Select = styled.select`
  border: none;
  outline: none;
  color: #095644;
  font-size: 3.72vw;
  font-weight: 500;
  position: absolute;
  top: 22px;
  right: 47px;
  @media (min-width: 480px) {
    font-size: 1.45vw;
    top: 36px;
    right: 163px;
    background: none;
  }
`;

export default function Map() {
  const State = data.state;

  const Options = State.map((x, i) => {
    return (
      <option key={i} value={x.value}>
        {x.name}
      </option>
    );
  });
  return (
    <Container>
      <Select>{Options}</Select>
      <IranMap>
        <img src={iran} />
      </IranMap>
    </Container>
  );
}
