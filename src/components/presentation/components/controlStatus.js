import React, { useState } from "react";
import styled from "styled-components";
import ok from "../../../assets/ok.webp";
import disagree from "../../../assets/disagree.webp";
import info from "../../../assets/info.webp";
import noVote from "../../../assets/noVote.webp";
import absent from "../../../assets/absent.webp";
import Agree from "./agree";
import Disagree from "./disagree";
import NoComment from "./noComment";
import Absent from "./absent";
import NoVote from "./noVote";
import useWidth from "../../../hook/useWidth";

export default function ControlStatus() {
  const [select, setSelect] = useState(1);
  const width = useWidth();

  return (
    <Container>
      {width < 481 ? (
        <>
          <Filtering>
            <Item
              color="#6CBBA9"
              icon={ok}
              onClick={() => {
                setSelect(1);
              }}
              className={select === 1 ? "select" : ""}
            >
              موافق
            </Item>
            <Item
              color="#FFA5A5"
              icon={disagree}
              onClick={() => {
                setSelect(2);
              }}
              className={select === 2 ? "select" : ""}
            >
              مخالف
            </Item>
            <Item
              color="#CBCBCB"
              icon={info}
              onClick={() => {
                setSelect(3);
              }}
              className={select === 3 ? "select" : ""}
            >
              ممتنع
            </Item>
            <Item
              color="#9F9F9F"
              icon={noVote}
              onClick={() => {
                setSelect(4);
              }}
              className={select === 4 ? "select" : ""}
            >
              بدون‌رأی
            </Item>
            <Item
              color="#9F9F9F"
              icon={absent}
              onClick={() => {
                setSelect(5);
              }}
              className={select === 5 ? "select" : ""}
            >
              غایب
            </Item>
          </Filtering>
          <ShowResult>
            {select === 1 && <Agree />}
            {select === 2 && <Disagree />}
            {select === 3 && <NoComment />}
            {select === 4 && <NoVote />}
            {select === 5 && <Absent />}
          </ShowResult>
        </>
      ) : (
        <>
          <Agree/>
          <Disagree />
          <NoComment />
        </>
      )}
    </Container>
  );
}

const Container = styled.div`
  margin-top: 20px;
  @media(min-width:481px){
    margin:0;
    width:72%;
  }
`;
const Filtering = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Item = styled.div`
  padding-top: 50px;
  position: relative;
  padding-bottom: 10px;
  font-size: 4.651vw;
  font-weight: 300;
  color: ${(props) => props.color};
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
    display: block;
    position: absolute;
    background-image: url(${(props) => props.icon});
    background-size: contain;
    background-repeat: no-repeat;
    width: 41px;
    height: 41px;
    right: 0;
    top: 0px;
  }
`;

const ShowResult = styled.div`
  margin-inline: -3%;
  border-radius: 0 0 4px 4px;
`;
