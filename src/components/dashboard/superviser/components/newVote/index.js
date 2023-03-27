import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useUser } from "../../../../context/userContext";
import Document from "./components/document";
import SelectActionType from "./components/selectActionType";
import SelectEnvoys from "./components/selectEnvoys";
import VoteEnvoy from "./components/voteEnvoy";

export default function NewVote() {
  const { state, dispatch } = useUser();
  const { title } = useParams();
  return (
    <Container>
      <Title>
        <p className="home">پنل / فعالیت ها /</p>
        <p className="component"> {title} </p>
      </Title>
      {state.addActionLevel === 1 && <SelectActionType />}
      {state.addActionLevel === 2 && (
        <>
          <SelectActionType />
          <SelectEnvoys />
        </>
      )}
      {state.addActionLevel === 3 && (
        <>
          <SelectActionType />
          <SelectEnvoys />
          <VoteEnvoy />
        </>
      )}
      {state.addActionLevel === 4 && (
        <>
          <SelectActionType />
          <SelectEnvoys />
          <VoteEnvoy />
          <Document />
        </>
      )}
    </Container>
  );
}

const Container = styled.section`
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  padding: 10px 20px;
  overflow: hidden;
  @media (min-width: 480px) {
    background-color: #ffffff;
    padding: 25px 10% 0;
  }
`;

const Title = styled.div`
  display: flex;
  margin-bottom: 12px;
  padding-right: 10px;
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
    .home,
    .component {
      font-size: 1.25vw;
    }
  }
`;
