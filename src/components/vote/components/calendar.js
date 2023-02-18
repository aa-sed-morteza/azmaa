import React from "react";
import styled from "styled-components";
import check from "../../../assets/check.webp";
import line from "../../../assets/Line.webp";
import VoteCard from "../../home/components/voteCard";
import upArrow from "../../../assets/arrow.webp";
import useWidth from "../../../hook/useWidth";
import { ChangeToPersianDate, fixNumbers } from "../../../utils";

const Container = styled.section`
  margin-top: 10px;
  border-right: 1px dashed #cbcbcb;
  margin-right: -5px;
  padding-right: 5px;
  @media (min-width: 481px) {
    background-color: #f3f3f3;
    margin-inline: -2.5vw;
    padding-inline: 10%;
    padding-bottom: 130px;
    position: relative;
    border-right: none;
    &:before {
      content: "";
      display: block;
      position: absolute;
      width: 0.208vw;
      height: 94%;
      border-right: 3px dashed #cbcbcb;
      right: 7%;
      top: 0.938vw;
    }
  }
`;

const SubTitile = styled.h2`
  font-weight: 700;
  font-size: 3.721vw;
  color: #9f9f9f;
  padding-right: 40px;
  position: relative;
  margin-bottom: 5px;
  &:before {
    content: "";
    display: block;
    position: absolute;
    background-image: url(${check});
    background-size: cover;
    background-repeat: no-repeat;
    width: 4.186vw;
    height: 4.186vw;
    right: 4.186vw;
    top: 0.465vw;
  }
  &:after {
    content: "";
    display: block;
    position: absolute;
    background-image: url(${line});
    background-size: cover;
    background-repeat: no-repeat;
    width: 3.721vw;
    height: 0.233vw;
    right: -0.698vw;
    top: 2.326vw;
  }
  @media (min-width: 481px) {
    font-size: 1.667vw;
    margin-bottom: 20px;
    padding-top: 45px;
    &:before {
      width: 1.563vw;
      height: 1.563vw;
      right: -0.156vw;
      top: 2.76vw;
    }
    &:after {
      width: 1.979vw;
      height: 0.156vw;
      right: -2.292vw;
      top: 3.438vw;
    }
  }
`;

const Title = styled.div`
  border: 1px solid #d8d8d8;
  border-radius: 4px;
  background-color: #ffffff;
  padding: 1px 16px;
  width: fit-content;
  margin: auto;
  font-size: 3.721vw;
  font-weight: 700;
  color: #9f9f9f;
  position: relative;
  margin-top: 24px;
  &:before {
    content: "";
    display: flex;
    position: absolute;
    border-bottom: 1px dashed #cbcbcb;
    width: 32.558vw;
    right: -33.023vw;
    top: 2.558vw;
  }
  &:after {
    content: "";
    display: flex;
    position: absolute;
    border-bottom: 1px dashed #cbcbcb;
    width: 32.558vw;
    left: -33.023vw;
    top: 2.558vw;
  }

  @media (min-width: 481px) {
    border-radius: 8px;
    width: 26.042vw;
    text-align: center;
    color: #707070;
    font-size: 1.667vw;
    font-weight: 400;
    padding: 11px;
    background-color: inherit;
    &:after {
      display: none;
    }
    &:before {
      border-bottom: 2px dashed #cbcbcb;
      width: 107%;
      right: -107%;
      top: 27px;
    }
  }
`;

const ShowMore = styled.div`
  border: 1px solid #9f9f9f;
  border-radius: 4px;
  display: flex;
  padding: 8px;
  margin-top: 16px;
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

  @media (min-width: 481px) {
    border: 2px solid #9f9f9f;
    border-radius: 8px;
    max-width: 500px;
    justify-content: center;
    align-items: center;
    margin: auto;
    padding: 13px;
    margin-top: 78px;
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

const List = styled.div`
  @media (min-width: 481px) {
    display: flex;
    justify-content: flex-start;
    gap: 20px;
  }
`;
export default function Calendar({ bills }) {
  const width = useWidth();
  let today = new Date().toLocaleDateString("fa-IR", {
    year: "numeric",
    month: "numeric",
  });
  const year = today.slice(0, 4);
  const month = fixNumbers(today.slice(5));

  const monthArray = [
    "فروردین",
    "اردیبهشت",
    "خرداد",
    "تیر",
    "مرداد",
    "شهریور",
    "مهر",
    "آبان",
    "آذر",
    "دی",
    "بهمن",
    "اسفند",
  ];

  const elements = [];

  for (let i = parseInt(month) - 1; i > 0; i--) {
    const newList = [];
    for (const item of bills) {
      const itemDate = ChangeToPersianDate(item.date);
      const itemYear = itemDate.slice(0, 4);
      const itmeMonth = fixNumbers(itemDate.slice(5));

      if (itemYear === year && parseInt(itmeMonth) === i + 1) {
        newList.push(item);
      }
    }

    elements.push(
      <>
        <SubTitile>
          {monthArray[i]} {year}
        </SubTitile>
        <List>
          {width < 480 ? (
            <>
              {newList.map((item) => (
                <VoteCard bill={item} />
              ))}
            </>
          ) : (
            <>
              {newList.map((item) => (
                <VoteCard bill={item} />
              ))}
            </>
          )}
        </List>
      </>
    );
  }
  return (
    <Container>
      {elements}

      <ShowMore>
        <p> نمایش بیشتر</p>
      </ShowMore>
    </Container>
  );
}
