import React from "react";
import styled from "styled-components";
import iran from "../../../assets/iran.svg";
import data from "../../../data.json";

const StateContainer = styled.section`
  border: 1px solid black;
  border-radius: 4px;
  position: relative;
  @media(min-width:480px){
    position: absolute;
    top: 14%;
    left: 8%;
    width: 46%;
    background-color:rgba(255, 255, 255, 0.5);
    .map{
      width:100%;
      img{
        width:100%;
        height:auto;

      }
    }
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
  @media(min-width:480px){
    font-size:1.45vw;
    top: 36px;
    right: 163px;
    background: none;
  }
`;

export default function SelectState() {
  const State = data.state;

  const Options = State.map((x, i) => {
    return (
      <option key={i} value={x.value}>
        {x.name}
      </option>
    );
  });

  return (
    <StateContainer>
      <Select>{Options}</Select>
      <div className="map">
        <img src={iran} alt="iran" />
      </div>
    </StateContainer>
  );
}
