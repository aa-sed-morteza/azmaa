import React, { useState } from "react";
import styled from "styled-components";
import ok from "../../../assets/like.webp";
import disagree from "../../../assets/dislike.webp";
import info from "../../../assets/info.webp";

import Agree from "./agree";
import Disagree from "./disagree";
import UnKnown from "./unKnown";
// import NoComment from "./noComment";
// import Absent from "./absent";
// import NoVote from "./noVote";
import useWidth from "../../../hook/useWidth";

export default function ControlStatus({ action }) {
  
  const [select, setSelect] = useState(1);
  const width = useWidth();
  const agree = action.vote.filter(
    (x) => x.vote == action.activity_choice[0].name
  );

  const disagree = action.vote.filter(
    (x) => x.vote == action.activity_choice[1].name
  );
  const another = action.vote.filter(
    (x) => x.vote == action.activity_choice[2].name
  );

  
  
 

  const controlItem = action.activity_choice.map((item, i) => {
    return (
      <Item
        key={i}
        color="#6CBBA9"
        icon={ok}
        onClick={() => {
          setSelect(i + 1);
        }}
        className={select === i + 1 ? "select" : ""}
      >
        {item.name}
      </Item>
    );
  });

  return (
    <Container>
      {width < 480 ? (
        <>
          <Filtering>
            {controlItem}
            {/* <Item
              color="#6CBBA9"
              icon={ok}
              onClick={() => {
                setSelect(1);
              }}
              className={select === 1 ? "select" : ""}
            >
              همراه
            </Item> */}
            {/* <Item
              color="#FFA5A5"
              icon={disagree}
              onClick={() => {
                setSelect(2);
              }}
              className={select === 2 ? "select" : ""}
            >
              غیرهمراه
            </Item> */}
            {/* <Item
              color="#CBCBCB"
              icon={info}
              onClick={() => {
                setSelect(3);
              }}
              className={select === 3 ? "select" : ""}
            >
              نامشخص
            </Item> */}
          </Filtering>
          <ShowResult>
            {select === 1 && <Agree envoys={agree} />}
            {select === 2 && <Disagree envoys={disagree} />}
            {select === 3 && <UnKnown envoys={another} />}
          </ShowResult>
        </>
      ) : (
        <>
          <Agree envoys={agree} />
          <Disagree envoys={disagree} />
          <UnKnown envoys={another} />
        </>
      )}
    </Container>
  );
}

const Container = styled.div`
  margin-top: 20px;
  @media (min-width: 480px) {
    margin: 0;
    width: 72%;
  }
`;
const Filtering = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-inline: 20px;
  & > :nth-child(2) {
    color: #ffa5a5;
    &:before {
      background-image: url(${disagree});
    }
    &.select {
      &:after {
        background-color: #ffa5a5;
      }
    }
  }
  & > :nth-child(3) {
    color: #cbcbcb;
    &:before {
      background-image: url(${info});
    }
    &.select {
      &:after {
        background-color: #cbcbcb;
      }
    }
  }
`;

const Item = styled.div`
  /* padding-top: 50px; */
  position: relative;
  padding-bottom: 10px;
  font-size: 4.651vw;
  font-weight: 300;
  color: ${(props) => props.color};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 7px;
  &.select {
    font-weight: 700;
    &:after {
      content: "";
      display: block;
      position: absolute;
      width: 100%;
      height: 4px;
      bottom: 0;
      background-color: ${(props) => props.color};
    }
  }
  &:before {
    content: "";
    display: inline-flex;
    /* position: absolute; */
    background-image: url(${(props) => props.icon});
    background-size: contain;
    background-repeat: no-repeat;
    width: 41px;
    height: 41px;
    /* right: 0; */
    /* top: 0px; */
  }
`;

const ShowResult = styled.div`
  margin-inline: -3%;
  border-radius: 0 0 4px 4px;
`;
