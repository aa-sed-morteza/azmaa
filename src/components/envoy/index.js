import React from "react";
import styled from "styled-components";
import useWidth from "../../hook/useWidth";
import AdvanceSearch from "./components/advanceSearch";
import EnvoyFiltering from "./components/envoyFiltering";
import Map from "./components/map";
import Search from "./components/search";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  padding: 10px 20px;
  overflow:hidden;

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
`;

const Content = styled.div`
background-color: #FFFFFF;
border-radius: 4px;
padding:10px;
`

export default function Envoy() {
  const width = useWidth()
  return (
    <Container>
      <Title>
        <p className="home">خانه / </p>
        <p className="component"> نمایندگان </p>
      </Title>
      <Content>
          {width<480 ? <Map/> : <h1>desktop</h1>}

          <Search/>
          <AdvanceSearch/>
          <EnvoyFiltering/>
      </Content>
    </Container>
  );
}
