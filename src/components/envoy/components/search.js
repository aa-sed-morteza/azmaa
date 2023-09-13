import React from "react";
import styled from "styled-components";
import background from "../../../assets/back-controll.webp";
import { useSearchParams } from "react-router-dom";

const Container = styled.div`
  background-image: url(${background});
  background-size: cover;
  background-repeat: no-repeat;
  padding: 19px;
  border-radius: 4px;
  margin-top: 10px;
  input {
    width: 95%;
    background: #ffffff;
    outline: none;
    padding: 7px 8px;
    border-radius: 2px;
    border: none;
    font-size: 3.72vw;
    font-weight: 400;
    font-family: FontAwesome;
    ::placeholder {
      color: #d8d8d8;
      font-family: FontAwesome;
    }
  }
  @media (min-width: 481px) {
    width: 48%;
    display: flex;
    margin: auto;
    padding: 20px;
    // margin-left:10%;

    input {
      font-size: 1.563vw;
      padding: 10px;
      margin: auto;
      width: 90%;
    }
  }
  @media (min-width: 769px) {
    padding: 27px 20px;
    input {
      padding: 18px;
    }
  }
`;

export default function Search() {
  const [searchparams, setsearchparams] = useSearchParams();
  return (
    <Container>
      <input
        value={searchparams.get("filter") || ""}
        onChange={(event) => {
          let filter = event.target.value;
          if (filter) {
            setsearchparams({ filter: filter });
          } else {
            setsearchparams({});
          }
        }}
        type="text"
        placeholder="&#xF002; جستجو کن..."
      />
    </Container>
  );
}
