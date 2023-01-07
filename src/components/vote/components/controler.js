import React, { useState } from "react";
import styled from "styled-components";
import data from "../../../data.json";
import background from "../../../assets/back-controll.webp";

const Container = styled.div`
  background-image: url(${background});
  background-size: cover;
  background-repeat: no-repeat;
  padding: 19px;
  border-radius: 2px;
  margin-bottom: 10px;
  @media (min-width: 480px) {
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
  font-family: FontAwesome;
  ::placeholder {
    color: #d8d8d8;
  }
  @media (min-width: 480px) {
    border-radius: 4px;
    font-size: 1.563vw;
    font-weight: 400;
    padding: 25px;
    margin-bottom: 30px;
  }
`;

const Tab = styled.div`
  displey: flex;
  flex-direction: column;
  position: relative;
  cursor: pointer;
  &.select,&:hover {
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

  @media (min-width: 480px) {
    p {
      font-size: 1.458vw;
      font-weight: 300;
    }
    div {
      width: 35px;
      height: 35px;
    }
  }
`;

const TabContainer = styled.div`
  display: flex;
  gap: 25px;
  align-items: flex-end;
  @media(min-width:480px){
    gap:93px;
    justify-content:center;
  }
}
`;

export default function Controler() {
  const [select, setSelect] = useState(0);

  const controllItem = data.controlItem.map((x, i) => {
    return (
      <Tab
        key={i}
        onClick={() => setSelect(i)}
        className={select === i ? "select" : ""}
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
      <SearchInput type="text" placeholder="&#xF002; جستجو کن..." />
      <TabContainer>{controllItem}</TabContainer>
    </Container>
  );
}
