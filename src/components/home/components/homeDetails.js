import React from "react";
import styled from "styled-components";
import Controller from "./controller";
import SelectState from "./selectState";

const HomeContainer = styled.section`
  background-color: #ffffff;
  border-radius: 4px;
  padding: 14px 10px;
`;

export default function HomeDetails() {
  return (
    <HomeContainer>
      <SelectState />
      <Controller/>
    </HomeContainer>
  );
}
