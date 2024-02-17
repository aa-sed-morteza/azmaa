import React, { useRef, useEffect, useState } from "react";
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
import { useTrail, animated } from "react-spring";
import { useIsVisible } from "../hook/useIsVisible";
import FilterBox from "../components/general/filterBox";

export default function Envoy() {
  const [searchparams, setsearchparams] = useState("");
  const { envoyListToShow } = useSelector((state) => state.envoy);
  const [TheEnvoyListToShow, setTheEnvoyListToShow] = useState([...envoyListToShow]);

  const width = useWidth();
  const navigate = useNavigate();
  const SearchrRef = useRef(null);
  const ActionContainerRef = useRef(null);
  const isVisible = useIsVisible(ActionContainerRef);

  const [isseen , setIsseen] = useState(false);
    useEffect( 
    () => {
      if(isVisible) {
        setIsseen(true);
      }
    }
    , [isVisible])

  const trails = useTrail(8, {
    from: { opacity: 0 },
    to: { opacity: isseen ? 1 : 0 },
    config: { duration: 300 },
    delay: 100,
  });


  useEffect(() => {
    if (searchparams.length > 0) {
      let newFilteredList = [];
      for (const item of envoyListToShow) {
        const name = item.first_name + " " + item.last_name;
        if (name.includes(searchparams)) {
          newFilteredList.push(item);
        }
      }
      setTheEnvoyListToShow([...newFilteredList]);
    } else {
      setTheEnvoyListToShow([...envoyListToShow]);
    }
  }, [searchparams]);

  return (
    <Container>
      <Title>
        <p
          className="home"
          onClick={() => {
            navigate("/");
          }}
        >
          خانه /
        </p>
        <p
          className="component"
          onClick={() => {
            navigate("/envoy");
          }}
        >
          نامزد ها
        </p>
      </Title>
      <Content ref={SearchrRef}>
        {width < 481 ? (
          // <Map />
          <IranMap />
        ) : (
          <Wraper>
            <IranMap />
            <HonestEnvoy envoys={envoyListToShow} />
          </Wraper>
        )}
        <animated.div style={trails[1]} ref={ActionContainerRef}>
          <Search searchparams={searchparams} setsearchparams={setsearchparams}/>

        </animated.div>

        {/* <AdvanceSearch  setEnvoys={setEnvoys} /> */}
        {width < 481 && <EnvoyFiltering envoys={envoyListToShow} />}
        {width > 481 && (
          <>
            <ActiveEnvoy envoys={TheEnvoyListToShow} />

            <Banner />

            <NewEnvoy envoys={TheEnvoyListToShow} />
          </>
        )}
      </Content>
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  flex-direction: column;
  padding: 21vw 20px;
  overflow: hidden;
  @media (min-width: 481px) {
    padding: 7vw 0 6vw;
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
  }
`;

const Wraper = styled.div`
  display: flex;
  gap: 2vw;
  justify-content: space-between;
  margin-bottom: 70px;
  padding: 0 6%;
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
