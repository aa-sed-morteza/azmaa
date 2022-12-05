import React, { useState } from "react";
import styled from "styled-components";
import vote from "../../../assets/vote-light.webp";
import voteAction from "../../../assets/vote-active.webp";
import action from "../../../assets/act-light.webp";
import background from "../../../assets/back-controll.webp";
import acts from "../../../assets/zero.svg";
import actsActive from "../../../assets/zero-active.svg";
import GeneralActionCard from "./generalActionCard";
import upArrow from "../../../assets/arrow.webp";
import check from "../../../assets/check.webp";
import line from "../../../assets/Line.webp";
import title from "../../../assets/title1.svg";

// import actionActive from "../../../assets/action-active.webp";

export default function Filtering() {
  const [select, setSelect] = useState(1);
  return (
    <Container>
      <FilteringWraper>
        <input placeholder="جستجو کن..." />
        <Items>
          <Item
            onClick={() => {
              setSelect(1);
            }}
            className={select == 1 ? "active" : ""}
          >
            همه
          </Item>
          <Item
            icon={select == 2 ? actsActive : acts}
            onClick={() => {
              setSelect(2);
            }}
            className={select == 2 ? "active" : ""}
          >
            فعالیت‌ها
          </Item>
          <Item
            icon={select == 3 ? voteAction : vote}
            onClick={() => {
              setSelect(3);
            }}
            className={select == 3 ? "active" : ""}
          >
            رأی‌گیری‌ها
          </Item>
          <Item
            icon={select == 4 ? action : action}
            onClick={() => {
              setSelect(4);
            }}
            className={select == 4 ? "active" : ""}
          >
            عملکردها
          </Item>
        </Items>
      </FilteringWraper>

      {select == 1 && (
        <Calendar>
          <CalendarTitle>کارنامۀ نماینده</CalendarTitle>
          <SubTitile>مرداد ۱۴۰۱</SubTitile>
          <Gallery>
            <GeneralActionCard
              act="vote"
              content="کلیات لایحۀ بودجۀ سال ۱۴۰۱"
              action="موافق"
            />
          </Gallery>
          <SubTitile>مرداد ۱۴۰۱</SubTitile>
          <Gallery>
            <GeneralActionCard
              act="vote"
              content="کلیات لایحۀ بودجۀ سال ۱۴۰۱"
              action="مخالف"
            />
            <GeneralActionCard
              act="action"
              content="دریافت خودرو دناپلاس"
              action="همراه"
            />
          </Gallery>

          <Title>سال ۱۴۰۰</Title>
          <SubTitile>مرداد ۱۴۰۰</SubTitile>
          <Gallery>
            <GeneralActionCard
              act="action"
              content="دریافت خودرو دناپلاس"
              action="ناهمراه"
            />
          </Gallery>
        </Calendar>
      )}
      {select == 2 && <>همه با فعالیت ها چه فرقی داره ؟</>}
      {select == 3 && (
        <Calendar>
          <CalendarTitle>کارنامۀ نماینده</CalendarTitle>
          <SubTitile>مرداد ۱۴۰۰</SubTitile>
          <Gallery>
            <GeneralActionCard
              act="vote"
              content="کلیات لایحۀ بودجۀ سال ۱۴۰۱"
              action="موافق"
            />
            <GeneralActionCard
              act="vote"
              content="کلیات لایحۀ بودجۀ سال ۱۴۰۱"
              action="مخالف"
            />
          </Gallery>
        </Calendar>
      )}
      {select == 4 && (
        <Calendar>
          <CalendarTitle>کارنامۀ نماینده</CalendarTitle>
          <SubTitile>مرداد ۱۴۰۰</SubTitile>
          <Gallery>
            <GeneralActionCard
              act="action"
              content="دریافت خودرو دناپلاس"
              action="همراه"
            />
            <GeneralActionCard
              act="action"
              content="دریافت خودرو دناپلاس"
              action="ناهمراه"
            />
          </Gallery>
        </Calendar>
      )}

      <ShowMore>
        <p>نمایش بیشتر </p>
      </ShowMore>
    </Container>
  );
}

const Container = styled.div``;

const FilteringWraper = styled.div`
  padding: 19px 19px 12px 21px;
  border-radius: 4px;
  background-image: url(${background});
  background-size: cover;
  background-repeat: no-repeat;
  input {
    width: 94%;
    font-size: 3.721vw;
    padding: 9px;
    font-weight: 400;
    margin-bottom: 13px;
    &::placeholder {
      color: #d8d8d8;
    }
  }
  @media (min-width: 480px) {
    width: 74%;
    padding: 1.875vw 1.927vw 0.938vw;
    border-radius: 8px;
    input {
      width: 96%;
      font-size: 1.563vw;
      padding: 0.833vw;
      margin-bottom: 1.823vw;
    }
  }
`;

const Items = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const Item = styled.p`
  color: #dff5f0;
  margin: 0;
  padding: 0;
  font-size: 3.721vw;
  font-weight: 300;
  padding-top: 35px;
  position: relative;
  &.active {
    font-weight: 700;
    &:after {
      content: "";
      display: block;
      position: absolute;
      width: 100%;
      height: 3px;
      background-color: #dff5f0;
      right: 0;
      bottom: -12px;
    }
  }
  &:before {
    content: "";
    display: block;
    position: absolute;
    background-image: url(${(props) => props.icon});
    background-size: contain;
    background-repeat: no-repeat;
    width: 35px;
    height: 35px;
    top: 0;
    right: 15px;
  }

  &:nth-child(2) {
    &:before {
      width: 27px;
      height: 30px;
      top: 4px;
    }
  }
  &:nth-last-child(1) {
    &:before {
      top: 9px;
    }
  }
  @media (min-width: 480px) {
    font-size: 1.458vw;
    &.active {
      &:after {
        height: 5px;
        bottom: -0.938vw;
      }
    }
    &:before {
      width: 1.875vw;
      height: 1.875vw;
      right: 1.771vw;
    }
  }
`;

const ShowMore = styled.div`
  border: 1px solid #9f9f9f;
  border-radius: 4px;
  display: flex;
  padding: 8px;
  margin-top: 32px;
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
      left: -5.814vw;
      bottom: 1.86vw;
      background-image: url(${upArrow});
      background-size: cover;
      background-repeat: no-repeat;
      width: 2.093vw;
      height: 1.163vw;
    }
  }
  @media (min-width: 480px) {
    display: none;
  }
`;

const Calendar = styled.div`
  margin-top: 10px;
  border-right: 1px dashed #cbcbcb;
  padding-right: 2%;
  @media (min-width: 480px) {
    margin-top: 1.563vw;
    background-color: #f3f3f3;
    border-radius: 0px 8px 8px 0px;
    padding: 2.083vw 2.083vw 1.042vw 0;
    position: relative;
    overflow: hidden;
    &:before {
      content: "";
      display: block;
      position: absolute;
      width: 1.198vw;
      height: 90%;
      border-right: 3px dashed #cbcbcb;
      top: 8.854vw;
    }
  }
`;

const CalendarTitle = styled.h2`
  display: none;
  @media (min-width: 480px) {
    display: flex;
    align-items: center;
    color: #707070;
    gap: 10px;
    font-weight: 300;
    font-size: 1.875vw;
    &:before {
      content: "";
      display: inline-flex;
      width: 2.396vw;
      height: 2.604vw;
      background-image: url(${title});
      background-size: cover;
      background-repeat: no-repeat;
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
    right: 3.721vw;
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
    height: 1px;
    right: -0.698vw;
    top: 2.326vw;
  }
  @media (min-width: 480px) {
    width: 100%;
    font-size: 1.667vw;
    margin: 0;
    padding-right: 2.604vw;

    &:before {
      width: 1.563vw;
      height: 1.563vw;
      right: 0.781vw;
      top: 0.365vw;
    }
    &:after {
      width: 1.042vw;
      height: 0.156vw;
      right: -0.313vw;
      top: 1.198vw;
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

  @media (min-width: 480px) {
    border-radius: 8px;
    width: 500px;
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
      width: 17vw;
      right: -17vw;
      top: 1.667vw;
    }
  }
`;

const Gallery = styled.div`
  @media (min-width: 480px) {
    display: flex;
    flex-wrap: wrap;
    padding-right: 1.198vw;
    gap: 1.042vw;
  }
`;
