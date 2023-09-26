import React from "react";
import styled from "styled-components";
import { useUser } from "../../../context/userContext";
import Tehran from "./tehran";

export default function SelectCity() {
  const { state, dispatch } = useUser();
  const provinceSearch = useSelector(state => state.provinceSearch.provinceSearch);
  return (
    <Container>{provinceSearch.name == "تهران" && <Tehran />}</Container>
  );
}

const Container = styled.div``;
