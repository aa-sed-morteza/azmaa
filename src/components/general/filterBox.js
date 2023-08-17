import { useState } from "react";
import data from "../../data.json";
import styled from "styled-components";
import background from "../../assets/back-controll.webp";

export default function FilterBox({
  filterType,
  setFilterType,
  searchPhrase,
  setSearchPhrase,
}) {
  const [select, setSelect] = useState(0);

  const controllItem = data.controlPanel.map((item, i) => {
    return (
      <>
        <Tab
          key={item.name + i}
          onClick={() => {
            setSelect(i);
            setFilterType(item.name);
          }}
          className={select === i ? "select" : ""}
        >
          {item.icon ? (
            <div>
              <img src={item.icon} alt="" />
            </div>
          ) : (
            ""
          )}

          <p>{item.name}</p>
        </Tab>
      </>
    );
  });
  return (
    <FilterContainer>
      <SearchInput
        onChange={(e) => {
          setSearchPhrase(e.target.value);
        }}
        type="text"
        placeholder="&#xF002; جستجو کن..."
      />
      <TabContainer>{controllItem}</TabContainer>
    </FilterContainer>
  );
}

const FilterContainer = styled.div`
  background-image: url(${background});
  background-size: cover;
  background-repeat: no-repeat;
  padding: 19px;
  border-radius: 2px;
  @media (min-width: 481px) {
    padding: 20px;
    border-radius: 8px;
    width: 58%;
    margin: auto;
  }
  @media (min-width: 769px) {
    padding: 44px 50px 19px;
    border-radius: 8px;
    width: 58%;
    margin: auto;
    margin-top: 93px;
  }
`;

const SearchInput = styled.input`
  width: 96%;
  padding: 7px 8px;
  border-radius: 2px;
  border: none;
  font-size: 3.72vw;
  margin-bottom: 19px;
  font-family: FontAwesome !important;
  &:placeholder {
    // color:#D8D8D8;
  }
  @media (min-width: 481px) {
    width: 90%;
    border-radius: 4px;
    font-size: 1.2vw;
    font-weight: 400;
    padding: 15px;
    margin-bottom: 15px;
  }
  @media (min-width: 769px) {
    font-size: 1.563vw;
    padding: 25px;
    margin-bottom: 30px;
  }
`;

const TabContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  @media (min-width: 481px) {
    justify-content: space-evenly;
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
  @media (min-width: 481px) {
    p {
      font-size: 1.458vw;
      font-weight: 300;
    }
    div {
      width: 35px;
      height: 35px;
    }
    &:nth-child(3) {
      div {
        width: 35px;
        height: 33px;
      }
    }
    &:nth-child(5) {
      div {
        width: 44px;
        height: 39px;
      }
    }
  }
`;
