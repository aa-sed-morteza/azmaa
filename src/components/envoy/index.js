import React, { useEffect, useState } from "react";
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
import { BaseBackURL } from "../../constant/api";
import axios from "axios";
import { useUser } from "../context/userContext";

export default function Envoy() {
  const width = useWidth();
  const {state,dispatch}=useUser();
  const [envoys, setEnvoys] = useState([]);
  const [citeis,setCiteis]=useState([]);

  const getEnvoys = () => {
    let config = {
      method: "get",
      url: `${BaseBackURL}api/v1/accounts/parliament_member/`,
    };

    axios(config).then((res) => {
      console.log(res.data);
      if (res.data.length > 0) {
        setEnvoys([...res.data]);
      }
    });
  };

  const getCiteis = () => {
    let config = {
      method: "get",
      url: `${BaseBackURL}api/v1/city/`,
    };

    axios(config).then((res) => {
      console.log(res.data);
      if (res.data.length > 0) {
        setCiteis([...res.data]);
      }
    });
  };

  const getDistrict = (id) => {
    var config = {
      method: "get",
      url: `${BaseBackURL}api/v1/electoral_district/?city__id=${id}&city__province__id`,
    };
    axios(config)
      .then(function (response) {
        console.log('sagsol',response.data[0].agent);
        setEnvoys([...response.data[0].agent]);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const filterEnvoyByCity = () => {
    const cityID = citeis.find((x) => x.name == state.city);
    if(cityID){
      getDistrict(cityID.id)
    }
  } 

 

  useEffect(() => {
    getEnvoys();
    getCiteis();
  }, []);

  useEffect(() => {
    filterEnvoyByCity();
    
  }, [state.city]);

  return (
    <Container>
      <Title>
        <p className="home">خانه / </p>
        <p className="component"> نمایندگان </p>
      </Title>
      <Content>
        {width < 481 ? (
          // <Map />
          <IranMap />
        ) : (
          <Wraper>
            {/* <Map />  */}
            <IranMap />
            {envoys && envoys.length > 0 && <HonestEnvoy envoys={envoys} />}
          </Wraper>
        )}

        <Search />
        <AdvanceSearch  setEnvoys={setEnvoys} />
        {width < 481 && <EnvoyFiltering envoys={envoys} />}
        {width > 481 && (
          <>
            <ActiveEnvoy envoys={envoys} />
            <Banner />
            <NewEnvoy envoys={envoys} />
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
