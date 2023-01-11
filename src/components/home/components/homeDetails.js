import React from "react";
import styled from "styled-components";
import Controller from "./controller";
import SelectState from "./selectState";
import useWidth from "../../../hook/useWidth";
import IranMap from "../../pluginIranMap/IranMap";

const HomeContainer = styled.section`
  background-color: #ffffff;
  border-radius: 4px;
  padding: 14px 10px;
  @media(min-width:481px){
    padding:10%;
    margin-top:50px;
    margin-left:-2.5%;
    margin-right:-2.5%;
    position:relative;
    padding-bottom:76px;
  }
  @media(min-width:769px){
    margin-top:90px;
    margin-left:-2%;
    margin-right:-2%;
  }
  @media(min-width:1025px){
    padding:10%;
    margin-top:219px;
    margin-left:-1%;
    margin-right:-1%;
    position:relative;
    padding-bottom:76px;
  }
`;

export default function HomeDetails() {
  const width = useWidth();
  return (
    <HomeContainer>
      {width<481?(<IranMap/>):""}
     {/* <SelectState /> */}
      <Controller/>
      
    </HomeContainer>
  );
}
