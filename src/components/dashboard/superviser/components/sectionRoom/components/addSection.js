import React, { useState } from "react";
import styled from "styled-components";
import { useUser } from "../../../../../context/userContext";
import AddDocument from "./addDocument";
import ContentSection from "./contentSection";
import ImageSection from "./imageSection";
import TypeSection from "./typeSection";

export default function AddSection() {
  const { state, dispatch } = useUser();
  return (
    <Container>
      {state.addArticleLevel === 1 &&  <TypeSection />}
      {state.addArticleLevel ===2 && <><TypeSection /><ContentSection/></>}
      {state.addArticleLevel ===3 && <><TypeSection /><ContentSection/><ImageSection/></>}
      {state.addArticleLevel ===4 && <><TypeSection /><ContentSection/><ImageSection/><AddDocument/> </>}

    </Container>
  );
}

const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
