import styled from "styled-components";
import BestEnvoyCard from "./bestEnvoyCard";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import upArrow from "../../../assets/arrow.webp";
import tik from "../../../assets/vote.webp";

export default function BestEnvoys() {
  const navigate = useNavigate();
  const { envoyListToShow } = useSelector((state) => state.envoy);
  const [thirdHide, setThirdHide] = useState(false);

  return (
    <Section>
      <Title>شفاف‌ترین نمایندگان</Title>
      <SecondAlbum hide={thirdHide}>
        {envoyListToShow.map((item, i) => {
          return (
            <BestEnvoyCard
              envoy={item}
              key={"transparentEnvoy" + i}
              click={() => {
                navigate(`/envoy/${item.id}`);
              }}
            />
          );
        })}
      </SecondAlbum>

      <ShowMore
        arrow={thirdHide}
        onClick={() => {
          setThirdHide(!thirdHide);
        }}
      >
        <p>{thirdHide ? "نمایش کمتر" : "نمایش بیشتر "}</p>{" "}
      </ShowMore>
    </Section>
  );
}

const Section = styled.div``;

const Title = styled.h1`
  color: #9f9f9f;
  font-size: 4vw;
  font-weight: 300;
  overflow: hidden;
  text-align: center;
  margin-bottom: 10px;
  margin-top: 30px;
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

const SecondAlbum = styled.div`
    & > :nth-of-type(1n + 2) {
      display: ${(props) => (!props.hide ? "none" : "")};
    }

  @media (min-width: 481px) {
    & > :nth-of-type(1n + 4) {
      display: ${(props) => (!props.hide ? "none" : "")};
    }
    display: grid;
    grid-template-columns: repeat(3, 29%);
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
    margin-bottom: 30px;
    /* padding: 0 40px; */

  }
`;
