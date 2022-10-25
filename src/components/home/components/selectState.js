import React from "react";
import styled from "styled-components";
import iran from "../../../assets/iran.svg";
import data from "../../../data.json";

const StateContainer = styled.section`
  border: 1px solid black;
  border-radius: 4px;
  position: relative;
`;

const Select = styled.select`
  border: none;
  outline: none;
  color: #095644;
  font-size: 3.72vw;
  font-weight: medium;
  position: absolute;
  top: 22px;
  right: 47px;
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

      <div>
        <img src={iran} alt="iran" />
      </div>
    </StateContainer>
  );
}
