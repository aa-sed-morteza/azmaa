import styled from "styled-components";
import tik from "../../../assets/vote.webp";
import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import ActionCard from "./actionCard";
import upArrow from "../../../assets/arrow.webp";

export default function LastActivities() {
  const actionContainerRef = useRef(null);
  const [actionCardLimit, setActionCardLimit] = useState(3);
  const { activityListToShow } = useSelector((state) => state.activity);

  return (
    <Section ref={actionContainerRef}>
      <Title> آخرین عملکردها</Title>
      <ActionContainer>
        {activityListToShow.slice(0, actionCardLimit).map((item, i) => {
          return <ActionCard activity={item} key={"lastAction" + i} />;
        })}
      </ActionContainer>

      <ShowMore
        arrow={actionCardLimit >= activityListToShow.length}
        onClick={() => {
          if (actionCardLimit < activityListToShow.length) {
            setActionCardLimit(actionCardLimit + 10);
          } else {
            setActionCardLimit(3);
            actionContainerRef.current.scrollIntoView();
          }
        }}
      >
        <p>
          {actionCardLimit < activityListToShow.length
            ? "نمایش بیشتر"
            : "نمایش کمتر"}
        </p>
      </ShowMore>
    </Section>
  );
}

const Section = styled.div``;

const Album = styled.div``;

const Title = styled.h1`
  color: #9f9f9f;
  font-size: 4.65vw;
  font-weight: 300;
  overflow: hidden;
  text-align: center;
  margin-bottom: 10px;
  &:after {
    background-color: #9f9f9f;
    content: "";
    display: inline-block;
    height: 1px;
    position: relative;
    // vertical-align: middle;
    width: 58%;
  }
  @media (min-width: 481px) {
    margin-top: 47px;
    font-size: 1.87vw;
    margin-bottom: 24px;
    &:after {
      width: 75%;
    }
    &:before {
      content: "";
      display: inline-block;
      background-image: url(${tik});
      background-size: cover;
      background-repeat: no-repeat;
      width: 3.073vw;
      height: 3.073vw;
      margin-bottom: -1%;
    }
  }
  // @media(max-width:1400px){
  //   &:after{
  //     width:79%;
  //   }
  // }
  // @media(max-width:1000px){
  //   &:after{
  //     width:70%;
  //   }
  // }
`;

const ActionContainer = styled.div`
  @media (min-width: 481px) {
    display: grid;
    grid-template-columns: repeat(3, 29%);
    gap: 20px;
    justify-content: center;
    flex-wrap: wrap;
    // margin-left:-7%;
    // margin-right:-7%;
    & > :nth-of-type(1n + 2) {
      display: flex;
    }
  }
  @media (min-width: 769px) {
    justify-content: center;
  }
`;

const ShowMore = styled.div`
  border: 1px solid #9f9f9f;
  border-radius: 4px;
  display: flex;
  padding: 8px;
  cursor: pointer;
  p {
    margin: auto;
    color: #9f9f9f;
    font-size: 4.65vw;
    display: flex;
    align-items: center;
    gap: 20px;
    font-weight: 300;
    &:after {
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
    width: 31%;
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
