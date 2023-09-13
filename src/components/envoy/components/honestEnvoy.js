import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import eye from "../../../assets/eye.webp";
import BestEnvoy from "../../home/components/bestEnvoyCard";

export default function HonestEnvoy({ envoys }) {
  const navigate = useNavigate();
  const newList = [...envoys];
  newList.sort((a, b) => b.transparency - a.transparency);

  return (
    <Container>
      <Title>شفاف‌ترین نمایندگان</Title>
      <Gallery>
        {newList.map((item, i) => (
          <BestEnvoy
            key={i}
            envoy={item}
            click={() => {
              navigate(`/envoy/${item.id}`);
            }}
          />
        ))}
      </Gallery>
    </Container>
  );
}

const Container = styled.div`
  background-color: #f3f3f3;
  border: 1px solid #cbcbcb;
  border-radius: 8px 0px 0px 8px;
  padding: 2.292vw;
  padding-left: 9.792vw;
  max-height: 43.125vw;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  color: #707070;
  font-weight: 300;
  font-size: 1.7vw;
  margin-bottom: 50px;
  margin-top: 0;
  display: flex;
  align-items: center;
  gap: 10px;
  &:before {
    content: "";
    display: inline-flex;
    width: 47px;
    height: 32px;
    background-image: url(${eye});
    background-size: cover;
    background-repeat: no-repeat;
  }
  @media (min-width: 481px) {
    &:before {
      width: 22px;
      height: 15px;
    }
  }
`;

const Gallery = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding-right: 60px;
  overflow: auto;
  direction: ltr;
  overflow-x: hidden;

  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background-color: #eaeaea;
  }

  ::-webkit-scrollbar {
    width: 5px;
    background-color: #eaeaea;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #707070;
  }
  & > * {
    width: 100%;
  }
`;
