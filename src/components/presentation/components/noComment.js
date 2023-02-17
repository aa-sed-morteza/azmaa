import React from "react";
import styled from "styled-components";
import BestEnvoy from "../../home/components/bestEnvoy";
import upArrow from "../../../assets/arrow.webp";
import icon from "../../../assets/info.webp";
import { useNavigate } from "react-router-dom";

export default function NoComment({ envoys }) {
  const navigate = useNavigate();

  const envoysList = envoys.map((item, i) => {
    return (
      <BestEnvoy
        key={i}
        envoy={item}
        click={() => {
          navigate(`/envoy/${item.id}`);
        }}
      />
    );
  });
  return (
    <Container>
      <Title>نمایندگان ممتنع</Title>
      <Gallery>{envoysList}</Gallery>
      <ShowMore>
        <p>نمایش بیشتر </p>
      </ShowMore>
    </Container>
  );
}

const Container = styled.div`
  background-color: #f3f3f3;
  padding: 18px 12px 9px 8px;
  border-radius: 0 0 4px 4px;
  @media (min-width: 481px) {
    padding: 40px 50px;
    border-radius: 0px 8px 8px 0px;
    margin-bottom: 50px;
  }
`;

const ShowMore = styled.div`
  border: 1px solid #9f9f9f;
  border-radius: 4px;
  display: flex;
  padding: 8px;
  margin-top: 32px;
  cursor: pointer;
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
    display: none;
  }
`;

const Title = styled.h2`
  display: none;
  @media (min-width: 481px) {
    display: flex;
    align-items: center;
    gap: 7px;
    font-size: 1.875vw;
    font-weight: 300;
    color: #9f9f9f;
    margin-bottom: 30px;
    &:before {
      content: "";
      display: inline-flex;
      background-image: url(${icon});
      background-size: cover;
      background-repeat: no-repeat;
      width: 20px;
      height: 20px;
    }
  }
  @media (min-width: 769px) {
    &:before {
      width: 2.604vw;
      height: 2.604vw;
    }
  }
`;

const Gallery = styled.div`
  @media (min-width: 481px) {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    & > div {
      width: 45%;
    }
  }
  @media (min-width: 769px) {
    gap: 15px;
  }
`;
