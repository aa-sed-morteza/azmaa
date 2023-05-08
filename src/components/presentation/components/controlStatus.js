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

export default function ControlStatus({ bill }) {
  const [select, setSelect] = useState(1);
  const width = useWidth();
  const envoysAgree = bill.positive_vote.map((x) => x.voter);
  const envoysDisagree = bill.negative_vote.map((x) => x.voter);
  const envoysNoComment = bill.none_vote.map((x) => x.voter);
  const envoysAbsent = bill.absent_vote.map((x) => x.voter);
  const envoysNotVote = bill.without_vote.map((x) => x.voter);

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
            {select === 1 && <Agree envoys={envoysAgree} />}
            {select === 2 && <Disagree envoys={envoysDisagree} />}
            {select === 3 && <NoComment envoys={envoysNoComment} />}
            {select === 4 && <NoVote envoys={envoysNotVote} />}
            {select === 5 && <Absent envoys={envoysAbsent} />}
          </ShowResult>
        </>
      ) : (
        <>
          <Agree envoys={envoysAgree} />
          <Disagree envoys={envoysDisagree} />
          <NoComment envoys={envoysNoComment} />
        </>
      )}
    </Container>
  );
}

const Container = styled.div`
  margin-top: 20px;
  @media (min-width: 481px) {
    margin: 0;
    width: 72%;
  }
`;
const Filtering = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  background-color: #FFFFFF;
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
