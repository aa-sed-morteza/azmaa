import React, { useState } from "react";
import styled from "styled-components";
import data from "../../../data.json";
import background from "../../../assets/back-controll.webp";
import { useSearchParams } from "react-router-dom";
import { renderIntoDocument } from "react-dom/test-utils";
// import 'font-awesome/css/font-awesome.min.css';


const Container = styled.div`
  background-image: url(${background});
  background-size: cover;
  background-repeat: no-repeat;
  padding: 19px;
  border-radius: 2px;
  margin-bottom: 10px;
  @media (min-width: 481px) {
    padding: 20;
    border-radius: 8px;
    width: 60%;
    margin: auto;
    margin-top: -19%;
  }
  @media (min-width: 769px) {
    padding: 44px 50px 19px;
    border-radius: 8px;
    max-width: 52.083vw;
    min-width: 52.083vw;
    margin: auto;
    margin-top: -19%;
  }
`;

const SearchInput = styled.input`
  width: 96%;
  padding: 7px 8px;
  border-radius: 2px;
  border: none;
  font-size: 3.72vw;
  margin-bottom: 23px;
  font-family: FontAwesome !important;
  ::placeholder {
    color: #d8d8d8;
  }
  @media (min-width: 481px) {
    border-radius: 4px;
    font-size: 1.563vw;
    font-weight: 400;
    padding: 10px;
    margin-bottom: 15px;
  }
  @media (min-width: 769px) {
    width: 92%;
    padding: 15px;
    margin-bottom: 30px;
  }
  @media (min-width: 1200px) {
    padding: 25px;
  }
`;

const Tab = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  cursor: pointer;
  &.select,
  &:hover {
    &:before {
      content: "";
      display: flex;
      position: absolute;
      right: 0;
      width: 100%;
      bottom: -20px;
      height: 5px;
      background: white;
    }
    p {
      font-weight: bold;
    }
  }

  div {
    width: 28px;
    height: 28px;
    margin: auto;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  p {
    margin: 0;
    color: #dff5f0;
    font-size: 3.72vw;
    font-weight: 300;
  }

  @media (min-width: 481px) {
    p {
      font-size: 1.458vw;
      font-weight: 300;
    }
    div {
      width: 20px;
      height: 20px;
    }
  }
  @media (min-width: 769px) {
    p {
      font-size: 1.458vw;
      font-weight: 300;
    }
    div {
      width: 1.823vw;
      height: 1.823vw;
    }
  }
`;

const TabContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  @media (min-width: 481px) {
    justify-content: space-between;
  }
`;

export default function Controler({ activities, selectedTag, setSelectedTag }) {
  const [searchparams, setsearchparams] = useSearchParams();

  const controllItem = data.controlItem.map((x, i) => {
    return (
      <Tab
        key={i}
        onClick={() => setSelectedTag(x.name)}
        className={selectedTag === x.name ? "select" : ""}
      >
        {x.icon ? (
          <div>
            <img src={x.icon} />
          </div>
        ) : (
          ""
        )}

        <p>{x.name}</p>
      </Tab>
    );
  });

  return (
    <Container>
      <SearchInput
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

      <TabContainer>{controllItem}</TabContainer>
    </Container>
  );
}
