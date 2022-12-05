import React, { useState } from "react";
import styled from "styled-components";

const FilterBox = styled.div`
  border: 1px solid #cbcbcb;
  border-radius: 4px;
  padding: 8px;
  display: flex;
  gap: 10px;
  @media (min-width: 480px) {
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
  font-size: 3.721vw;
  font-weight: 300;
  border-radius: 2px;
  margin: 0;
  padding: 5px 7px;
  &.select {
    background-color: #707070;
    color: #ffffff;
    font-weight: 700;
  }
  @media (min-width: 480px) {
    font-size: 1.25vw;
    font-weight: 700;
    width: 254px;
    text-align: center;
  }
`;

export default function Filtering() {
  const [select, setSelect] = useState(1);
  return (
    <FilterBox>
      <FilterItem
        onClick={() => {
          setSelect(1);
        }}
        className={select === 1 ? "select" : ""}
      >
        جدیدترین
      </FilterItem>
      <FilterItem
        onClick={() => {
          setSelect(2);
        }}
        className={select === 2 ? "select" : ""}
      >
        قدیمی‌ترین
      </FilterItem>
      <FilterItem
        onClick={() => {
          setSelect(3);
        }}
        className={select === 3 ? "select" : ""}
      >
        شفاف‌ترین
      </FilterItem>
      <FilterItem
        onClick={() => {
          setSelect(4);
        }}
        className={select === 4 ? "select" : ""}
      >
        حروف الفبا
      </FilterItem>
    </FilterBox>
  );
}
