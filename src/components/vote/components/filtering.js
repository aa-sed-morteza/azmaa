import React, { useState } from "react";
import styled from "styled-components";

const FilterBox = styled.div`
  border: 1px solid #cbcbcb;
  border-radius: 4px;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  @media (min-width: 481px) {
    max-width: 56.25vw;
    margin: auto;
    padding: 10px 13px;
    margin-top: 60px;
    margin-bottom: 45px;
  }
`;

const FilterItem = styled.p`
  background-color: #ffffff;
  color: #9f9f9f;
  font-size: 3.2vw;
  font-weight: 300;
  border-radius: 2px;
  margin: 0;
  padding: 5px 7px;
  cursor: pointer;
  &.select {
    background-color: #707070;
    color: #ffffff;
    font-weight: 700;
  }
  @media (min-width: 481px) {
    font-size: 1.25vw;
    font-weight: 700;
    width: 254px;
    text-align: center;
  }
`;

export default function Filtering({ selectedFilter, setSelectedFilter }) {
  // const [select, setSelect] = useState(1);
  return (
    <FilterBox>
      <FilterItem
        onClick={() => {
          setSelectedFilter(1);
        }}
        className={selectedFilter === 1 ? "select" : ""}
      >
        جدیدترین
      </FilterItem>
      <FilterItem
        onClick={() => {
          setSelectedFilter(2);
        }}
        className={selectedFilter === 2 ? "select" : ""}
      >
        قدیمی‌ترین
      </FilterItem>
      <FilterItem
        onClick={() => {
          setSelectedFilter(3);
        }}
        className={selectedFilter === 3 ? "select" : ""}
      >
        شفاف‌ترین
      </FilterItem>
      <FilterItem
        onClick={() => {
          setSelectedFilter(4);
        }}
        className={selectedFilter === 4 ? "select" : ""}
      >
        حروف الفبا
      </FilterItem>
    </FilterBox>
  );
}
