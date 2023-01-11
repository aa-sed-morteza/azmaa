import React from "react";
import styled from "styled-components";
import BestEnvoy from "../../home/components/bestEnvoy";
import upArrow from "../../../assets/arrow.webp";

export default function NoVote() {
  return (
    <Container>
      <BestEnvoy />
     

      <ShowMore>
        <p>نمایش بیشتر </p>
      </ShowMore>
    </Container>
  );
}

const Container = styled.div`
  background-color: #9F9F9F;
  padding: 18px 12px 9px 8px;
  border-radius: 0 0 4px 4px;
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
