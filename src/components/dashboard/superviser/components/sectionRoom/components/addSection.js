import React, { useState } from "react";
import styled from "styled-components";
import { useUser } from "../../../../../../context/userContext";
import AddDocument from "./addDocument";
import ContentSection from "./contentSection";
import ImageSection from "./imageSection";
import TypeSection from "./typeSection";
import { useSelector } from "react-redux";

export default function AddSection() {
  const { state, dispatch } = useUser();
  const addArticleLevel = useSelector(state => state.addArticleLevel.addArticleLevel);
  return (
    <Container>
      {addArticleLevel === 1 && <TypeSection />}
      {addArticleLevel === 2 && (
        <>
          <TypeSection />
          <ContentSection />
        </>
      )}
      {addArticleLevel === 3 && (
        <>
          <TypeSection />
          <ContentSection />
          <ImageSection />
        </>
      )}
      {addArticleLevel === 4 && (
        <>
          <TypeSection />
          <ContentSection />
          <ImageSection />
          <AddDocument />{" "}
        </>
      )}
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
