import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import EnvoyCard from "../general/envoyCard";
import Census from "./components/census";
import EnvoyArea from "./components/envoyArea";
import EnvoyHistory from "./components/envoyHistory";
import Filtering from "./components/Filtering";
import SocialNetwork from "./components/socialNetwork";

export default function DetailsEnvoy() {
  const { title } = useParams();
  return (
    <Container>
      <Title>
        <p className="home"> / خانه / نمایندگان </p>
        <p className="component"> {title} </p>
      </Title>
      {/* personal info */}
      <FirstSection>
        <EnvoyCard
          name="علیرضا پاکفطرت"
          state="دماوند و فیروزکوه"
          commission="امنیت ملی"
          img="../../assets/abol.webp"
          persantage="65"
          id="1"
        />
        <Census/>
        <EnvoyArea/>
        <EnvoyHistory/>
      </FirstSection>
      {/* filtering */}
      <SecondSection>
        <Filtering/>
      </SecondSection>
      {/* socialNetwork */}
      <ThirdSection>
        <SocialNetwork/>
      </ThirdSection>
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  flex-direction: column;
  padding: 10px 20px;
  overflow: hidden;
  gap:3.488vw;
  @media (min-width: 480px) {
    padding: 20px 0;
    background-color: #ffffff;
  }
`;

const Title = styled.div`
  display: flex;
  margin-bottom: 12px;
  .home {
    font-size: 3.721vw;
    font-weight: 700;
    margin: 0;
    color: rgba(0, 0, 0, 0.2);
  }
  .component {
    font-size: 3.721vw;
    font-weight: 700;
    margin: 0;
    color: rgba(112, 112, 112, 1);
  }
  @media (min-width: 480px) {
    margin-bottom: 25px;
    padding-right: 10%;
    .home,
    .component {
      font-size: 1.25vw;
    }
  }
`;

const FirstSection = styled.div`
  background-color: #ffffff;
  border-radius: 4px;
  padding: 4.419vw 2.326vw 2.558vw;
  display: flex;
  flex-direction: column;
  gap: 2.326vw;
  & > * {
    box-shadow: none;
  }
`;

const SecondSection = styled.div`
background-color: #ffffff;
border-radius: 4px;
padding: 2.326vw;`;

const ThirdSection = styled.div`
  background-color: #ffffff;
  border-radius: 4px;
  padding: 1.628vw 2.558vw 2.093vw;
`;
