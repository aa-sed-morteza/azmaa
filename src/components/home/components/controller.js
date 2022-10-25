import React, { useState } from "react";
import styled from "styled-components";
import background from "../../../assets/back-controll.png";
import upArrow from "../../../assets/arrow.png";
import data from "../../../data.json";

const ControllContainer = styled.section`
  display: flex;
  flex-direction: column;
`;

const FilterContainer = styled.div`
  background-image: url(${background});
  background-size: cover;
  background-repeat: no-repeat;
  padding: 19px;
  border-radius: 2px;
  margin-top: 10px;
`;

const SearchInput = styled.input`
  width: 96%;
  padding: 7px 8px;
  border-radius: 2px;
  border: none;
  font-size: 3.72vw;
  margin-bottom: 19px;
  font-family: FontAwesome;
  &:placeholder {
    // color:#D8D8D8;
  }
`;

const TabContainer = styled.div`
  display: flex;
  gap: 20px;
  align-items: flex-end;
}
`;

const Tab = styled.div`
  displey: flex;
  flex-direction: column;
  position: relative;
  &.select {
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

  &:nth-child(3) {
    div {
      width: 25px;
      height: 25px;
    }
  }
  &:nth-child(5) {
    div {
      width: 37px;
    }
  }
`;

const LastVotes = styled.div`
`

const Title = styled.h1`
color:#9F9F9F;
font-size:4.65vw;
font-weight:300;
overflow: hidden;
text-align: center;
margin-bottom:10px;
&:after{
    background-color: #9F9F9F;
    content: "";
    display: inline-block;
    height: 1px;
    position: relative;
    // vertical-align: middle;
    width: 60%;
}
`

const ShowMore = styled.div`
    border:1px solid #9F9F9F;
    border-radius:4px;
    display:flex;
    padding:8px;
    p{
        margin:auto;
        color:#9F9F9F;
        font-size:4.65vw;
        position:relative;
        font-weight: 300;
        &:after{
            content:"";
            display:flex;
            position:absolute;
            left:-25px;
            bottom:8px;
            background-image: url(${upArrow});
            background-size: cover;
            background-repeat: no-repeat;
            width:9px;
            height:5px;
        }
    }
`

export default function Controller() {
  const [select, setSelect] = useState(0);

  const controllItem = data.controlPanel.map((x, i) => {
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
    <ControllContainer>
      <FilterContainer>
        <SearchInput type="text" placeholder="&#xF002; جستجو کن..." />
        <TabContainer>{controllItem}</TabContainer>
       
      </FilterContainer>

      <LastVotes>
            <Title>آخرین رأی‌گیری‌ها</Title>

            <ShowMore><p>نمایش بیشتر</p> </ShowMore>
        </LastVotes>
    </ControllContainer>
  );
}
