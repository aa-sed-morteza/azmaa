import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import upArrow from "../../../assets/arrow.webp";
import BestEnvoy from "../../home/components/bestEnvoyCard";

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
  /* & > :nth-of-type(1n + 7) {
    display: ${(props) => (!props.hide ? "none" : "")};
  } */
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
  const [select, setSelect] = useState(2);
  const [showLimit, setShowLimit] = useState(10);
  const [searchparams, setsearchparams] = useSearchParams();
  const [envoyFilter, setEnvoyFilter] = useState([]);
  const showRef = useRef(null);

  const navigate = useNavigate();



  useEffect(() => {
    let newFilteredList = [];
    if (searchparams.get("filter") !== "") {
      newFilteredList = [
        ...envoys.filter((item) => {
          let filter = searchparams.get("filter");
          if (!filter) return true;
          // let name= item.writer + item.description ;
          let name =
            item.first_name + item.last_name + item.electoral_district_name;
          return name.includes(filter);
        }),
      ];
    } else {
      newFilteredList = [...envoys];
    }

    if (select === 1) {
      const newList = newFilteredList.sort();
      setEnvoyFilter([...newList]);
    } else if (select === 2) {
      const newList = newFilteredList.sort(
        (a, b) => b.transparency - a.transparency
      );
      setEnvoyFilter([...newList]);
    } else if (select === 3) {
      const newList = newFilteredList.sort(
        (a, b) => a.transparency - b.transparency
      );
      setEnvoyFilter([...newList]);
    }

    // console.log(newFilteredList);
  }, [searchparams, select, envoys]);

  return (
    <Container>
      <FilterBox>
        <FilterItem
          onClick={() => {
            setSelect(1);
          }}
          className={select === 1 ? "select" : ""}
        >
          الفبا
        </FilterItem>
        <FilterItem
          onClick={() => {
            setSelect(2);
          }}
          className={select === 2 ? "select" : ""}
        >
          شفاف‌ ترین
        </FilterItem>
        <FilterItem
          onClick={() => {
            setSelect(3);
          }}
          className={select === 3 ? "select" : ""}
        >
          جوان‌ترین
        </FilterItem>
      </FilterBox>

      <Gallery>
        <Gallery ref={showRef}>
          {envoyFilter.slice(0, showLimit).map((item, i) => (
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
          arrow={showLimit >= envoyFilter.length}
          onClick={() => {
            if (showLimit < envoyFilter.length) {
              setShowLimit(showLimit + 10);
            } else {
              setShowLimit(10);
              showRef.current.scrollIntoView();
            }
          }}
          style={{ marginTop: "20px" }}
        >
          <p>
            {showLimit >= envoyFilter.length ? "نمایش کمتر" : "نمایش بیشتر "}
          </p>{" "}
        </ShowMore>
      </Gallery>
    </Container>
  );
}
