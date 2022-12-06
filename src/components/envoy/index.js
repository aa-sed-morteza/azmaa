import React from "react";
import styled from "styled-components";
import useWidth from "../../hook/useWidth";
import ActiveEnvoy from "./components/activeEnvoy";
import AdvanceSearch from "./components/advanceSearch";
import Banner from "./components/banner";
import EnvoyFiltering from "./components/envoyFiltering";
import HonestEnvoy from "./components/honestEnvoy";
import Map from "./components/map";
import NewEnvoy from "./components/newEnvoy";
import Search from "./components/search";
import IranMap from "../pluginIranMap/IranMap";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  padding: 10px 20px;
  overflow: hidden;
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

const Content = styled.div`
  background-color: #ffffff;
  border-radius: 4px;
  padding: 10px;
  @media (min-width: 480px) {
    padding: 0;
    padding-right: 10%;
  }
`;

const Wraper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 70px;
`;



export default function Envoy() {
  const width = useWidth();
  return (
    <Container>
      <Title>
        <p className="home">خانه / </p>
        <p className="component"> نمایندگان </p>
      </Title>
      <Content>
        {width < 480 ? (
          // <Map />
          <IranMap />
        ) : (
          <Wraper>
            {/* <Map />  */}
            <IranMap />
            <HonestEnvoy />
          </Wraper>
        )}

        <Search />
        <AdvanceSearch />
        {width < 480 && <EnvoyFiltering />}
        {width > 480 && (
          <>
            {" "}
            <ActiveEnvoy /> <Banner /> <NewEnvoy />
          </>
        )}
      </Content>
    </Container>
  );
}
