import React from "react";
import styled from "styled-components";
import Controller from "./controller";
import SelectState from "./selectState";
import useWidth from "../../../hook/useWidth";

const HomeContainer = styled.section`
  background-color: #ffffff;
  border-radius: 4px;
  padding: 14px 10px;
`;

export default function HomeDetails() {
  const width = useWidth();
  return (
    <HomeContainer>
      {width<480?( <SelectState />):""}
     
      <Controller/>
      
    </HomeContainer>
  );
}
