import React, { useEffect, useState } from "react";
import styled from "styled-components";
import useWidth from "../hook/useWidth";
import ActiveEnvoy from "../components/envoy/components/activeEnvoy";
import AdvanceSearch from "../components/envoy/components/advanceSearch";
import Banner from "../components/envoy/components/banner";
import EnvoyFiltering from "../components/envoy/components/envoyFiltering";
import HonestEnvoy from "../components/envoy/components/honestEnvoy";
import Map from "../components/envoy/components/map";
import NewEnvoy from "../components/envoy/components/newEnvoy";
import Search from "../components/envoy/components/search";
import IranMap from "../components/pluginIranMap/IranMap";
import { BaseBackURL } from "../constant/api";
import axios from "axios";
import { useUser } from "../context/userContext";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Envoy() {
  const { enovyListToShow } = useSelector((state) => state.envoy);
  const width = useWidth();
  const navigate = useNavigate();
  const { state, dispatch } = useUser();
  const [envoys, setEnvoys] = useState([]);
  const [filterEnvoy, setFilterEnvoy] = useState([]);

  return (
    <Container>
      <Title>
        <p
          className="home"
          onClick={() => {
            navigate("/");
          }}
        >
          خانه /{" "}
        </p>
        <p
          className="component"
          onClick={() => {
            navigate("/envoy");
          }}
        >
          {" "}
          نمایندگان{" "}
        </p>
      </Title>
      <Content>
        {width < 481 ? (
          // <Map />
          <IranMap />
        ) : (
          <Wraper>
            {/* <Map />  */}
            <IranMap />
            {filterEnvoy.length > 0 ? (
              <HonestEnvoy envoys={filterEnvoy} />
            ) : (
              <HonestEnvoy envoys={envoys} />
            )}
          </Wraper>
        )}
        <RemoveCitySearch
          onClick={() => {
            dispatch({ type: "SET_PROVICE", payload: "" });
            dispatch({ type: "SET_CITY_SEARCH", payload: [] });
            dispatch({ type: "REMOVE_CITY_FILTER", payload: true });
          }}
        >
          حذف فیلتر نقشه
        </RemoveCitySearch>

        <Search />
        {/* <AdvanceSearch  setEnvoys={setEnvoys} /> */}
        {width < 481 &&
          (filterEnvoy.length > 0 ? (
            <EnvoyFiltering envoys={filterEnvoy} />
          ) : (
            <EnvoyFiltering envoys={envoys} />
          ))}
        {width > 481 && (
          <>
            {filterEnvoy.length > 0 ? (
              <ActiveEnvoy envoys={filterEnvoy} />
            ) : (
              <ActiveEnvoy envoys={envoys} />
            )}
            <Banner />
            {filterEnvoy.length > 0 ? (
              <NewEnvoy envoys={filterEnvoy} />
            ) : (
              <NewEnvoy envoys={envoys} />
            )}
          </>
        )}
      </Content>
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  flex-direction: column;
  padding: 10px 20px;
  overflow: hidden;
  @media (min-width: 481px) {
    padding: 20px 0;
    background-color: #ffffff;
  }
`;

const Title = styled.div`
  display: flex;
  margin-bottom: 12px;
  white-space: nowrap;
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
    padding-right: 5px;
  }
  @media (min-width: 481px) {
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
  position: relative;
  @media (min-width: 481px) {
    padding: 0;
    padding-right: 10%;
  }
`;

const Wraper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 70px;
`;

const RemoveCitySearch = styled.div`
  position: absolute;
  top: -15px;
  left: 10%;
  background: #ffaa00;
  border-radius: 4px;
  padding: 10px;
  font-size: 10px;
  font-weight: 400;
  color: #ffffff;
  cursor: pointer;
  @media (min-width: 481px) {
    font-size: 14px;
  }
`;
