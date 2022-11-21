import React from "react";
import styled from "styled-components";
import { useUser } from "../context/userContext";
import SuperviserDashboard from "./superviser";
import EnvoyDashboard from "./envoy";

export default function Dashboard() {
  const { state, dispatch } = useUser();
  return (
    <Container>
      {state.voteNumber === 0 ? <SuperviserDashboard /> : <EnvoyDashboard />}
    </Container>
  );
}

const Container = styled.section``;
