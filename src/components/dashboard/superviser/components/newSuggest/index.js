import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useUser } from "../../../../context/userContext";
import SuggestDocument from "./components/document";
import TypeSuggest from "./components/typeSuggest";

export default function AddNewSuggets() {
  const { state, dispatch } = useUser();
  const { title } = useParams();
  return (
    <Container>
      <Title>
        <p className="home">پنل / درخواست ها /</p>
        <p className="component"> {title} </p>
      </Title>
      {state.addSuggestLevel ==1 && <TypeSuggest/>}
      {state.addSuggestLevel ==2 && <><TypeSuggest/><SuggestDocument/> </>}
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
