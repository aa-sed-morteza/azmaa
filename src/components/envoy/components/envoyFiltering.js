import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import upArrow from "../../../assets/arrow.webp";
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
  align-items: center;
  justify-content: space-between;
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
`;

const Gallery = styled.div`
  display: flex;
  flex-direction: column;
  // gap:10px;
  & > :nth-of-type(1n + 7) {
    display: ${(props) => (!props.hide ? "none" : "")};
  }
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
    font-weight: 300;
    display: flex;
    align-items: center;
    gap: 20px;
    &:after {
      content: "";
      content: "";
      display: inline-flex;
      background-image: url(${upArrow});
      transform: ${(props) => (props.arrow ? `rotate(180deg)` : "")};
      background-size: cover;
      background-repeat: no-repeat;
      width: 9px;
      height: 5px;
    }
  }

  @media (min-width: 481px) {
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
      }
    }
  }
`;

export default function EnvoyFiltering({ envoys }) {
  const [select, setSelect] = useState(1);
  const [showMore, setShowMore] = useState(false);
  const [searchparams, setsearchparams] = useSearchParams();

  const navigate = useNavigate();

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
        <Gallery hide={showMore}>
          {envoys
            .filter((item) => {
              let filter = searchparams.get("filter");
              if (!filter) return true;
              // let name= item.writer + item.description ;
              let name =
                item.first_name + item.last_name + item.electoral_district_name;
              // console.log(item);
              return name.includes(filter);
            })
            .map((item, i) => (
              <BestEnvoy
                key={i}
                envoy={item}
                click={() => {
                  navigate(`/envoy/${item.id}`);
                }}
              />
            ))}
        </Gallery>
        <ShowMore
          arrow={showMore}
          onClick={() => {
            setShowMore(!showMore);
          }}
        >
          <p>{showMore ? "نمایش کمتر" : "نمایش بیشتر "}</p>
        </ShowMore>
      </Gallery>
    </Container>
  );
}
