import React, { useState } from "react";
import styled from "styled-components";
import upArrow from "../../../assets/arrow.png";
import BestEnvoy from "../../home/components/bestEnvoy";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 10px;
`;

const FilterBox = styled.div`
  border: 1px solid #cbcbcb;
  border-radius: 4px;
  padding: 8px;
  display: flex;
  gap: 10px;
`;

const FilterItem = styled.p`
background-color: #FFFFFF;
color:#9F9F9F;
font-size:3.721vw;
font-weight:300;
border-radius: 2px;
margin: 0;
padding: 5px 7px;
&.select{
  background-color:#707070;
  color:#FFFFFF;
  font-weight:700;
}
}
`;

const Gallery = styled.div`
  display: flex;
  flex-direction: column;
  // gap:10px;
`;

const ShowMore = styled.div`
  border: 1px solid #9f9f9f;
  border-radius: 4px;
  display: flex;
  padding: 8px;
  p {
    margin: auto;
    color: #9f9f9f;
    font-size: 4.65vw;
    position: relative;
    font-weight: 300;
    &:after {
      content: "";
      display: flex;
      position: absolute;
      left: -25px;
      bottom: 8px;
      background-image: url(${upArrow});
      background-size: cover;
      background-repeat: no-repeat;
      width: 9px;
      height: 5px;
    }
  }

  @media (min-width: 480px) {
    border: 2px solid #9f9f9f;
    border-radius: 8px;
    max-width: 500px;
    justify-content: center;
    align-items: center;
    margin: auto;
    padding: 13px;
    p {
      font-size: 1.25vw;
      font-weight: 400;
      &:after {
        width: 15px;
        height: 8px;
        left: -37px;
      }
    }
  }
`;

export default function EnvoyFiltering() {
  const [select, setSelect] = useState(1);

  return (
    <Container>
      <FilterBox>
        <FilterItem
          onClick={() => {
            setSelect(1);
          }}
          className={select === 1 ? "select" : ""}
        >
          جوان‌ترین
        </FilterItem>
        <FilterItem
          onClick={() => {
            setSelect(2);
          }}
          className={select === 2 ? "select" : ""}
        >
          جدیدترین
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
          فعال‌ترین
        </FilterItem>
      </FilterBox>

      <Gallery>
        {select === 1 && (
          <>
            <BestEnvoy /> <BestEnvoy /> <BestEnvoy /> <BestEnvoy />{" "}
            <BestEnvoy />
          </>
        )}
        <ShowMore>
          <p>نمایش بیشتر</p>{" "}
        </ShowMore>
      </Gallery>
    </Container>
  );
}
