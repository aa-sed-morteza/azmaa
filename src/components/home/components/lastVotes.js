import styled from "styled-components";
import tik from "../../../assets/vote.webp";
import upArrow from "../../../assets/arrow.webp";
import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import EnvoyvoteCard from "./EnvoyvoteCard";
import VoteCard from "./voteCard";

export default function LastVotes({ vote_voter }) {
  const voterContainerRef = useRef(null);
  const { voteListToShow } = useSelector((state) => state.vote);
  const [voteCardLimit, setVoteCardLimit] = useState(3);

  return (
    <Section ref={voterContainerRef}>
      <Title>آخرین رأی‌گیری‌ها</Title>
      <VoterContainer>
        {voteListToShow.slice(0, voteCardLimit).map((item, i) => {
          if (vote_voter > 0)
            return (
              <EnvoyvoteCard
                bill={item}
                vote_voter={vote_voter}
                key={"vote" + i}
              />
            );
          else return <VoteCard bill={item} key={i} />;
        })}
      </VoterContainer>

      <ShowMore
        onClick={() => {
          if (voteCardLimit < voteListToShow.length) {
            setVoteCardLimit(voteCardLimit + 10);
          } else {
            setVoteCardLimit(3);
            voterContainerRef.current.scrollIntoView();
          }
        }}
        arrow={voteCardLimit >= voteListToShow.length}
      >
        <p>
          {voteCardLimit < voteListToShow.length
            ? "نمایش بیشتر"
            : "نمایش کمتر "}
        </p>{" "}
      </ShowMore>
    </Section>
  );
}

const Section = styled.div`
  @media (min-width: 481px) {
    margin-bottom: 90px;
  }
`;

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

const VoterContainer = styled.div`
  /* & > :nth-of-type(1n + 2) {
    display: ${(props) => (!props.hide ? "none" : "")};
  } */
  @media (min-width: 481px) {
    display: flex;
    gap: 20px;
    justify-content: center;
    flex-wrap: wrap;
    // margin-left:-7%;
    // margin-right:-7%;
    & > :nth-of-type(1n + 2) {
      display: flex;
    }
    /* & > :nth-of-type(1n + 4) {
      display: ${(props) => (!props.hide ? "none" : "")};
    } */
  }
  @media (min-width: 769px) {
    justify-content: center;
  }
`;