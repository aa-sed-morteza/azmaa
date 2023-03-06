import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Controler from "../vote/components/controler";
import Filtering from "../vote/components/filtering";
import Calendar from "./components/calendar";
import { BaseBackURL } from "../../constant/api";

export default function Actions() {
  const [selectedTag, setSelectedTag] = useState("همه");
  const [activities, setActivities] = useState([]);
  const [filteredActivities, setFilteredActivities] = useState([]);

  const getActivities = () => {
    let config = {
      method: "get",
      url: `${BaseBackURL}api/v1/activity/?ordering=name, date&name&tag__id&vote__voter`,
    };

    axios(config).then((res) => {
      console.log(res.data);
      if (res.data.length > 0) {
        setActivities([...res.data]);
        setFilteredActivities([...res.data])
      }
    });
  };

  useEffect(() => {
    getActivities();
  }, []);

  useEffect(() => {
    if( activities.filter((item) => item.tag[0].name === selectedTag)){
      setFilteredActivities(activities.filter((item) => item.tag[0].name === selectedTag))
    }else{
      setActivities(activities)
    }
    
    if(selectedTag == 'همه'){
      setFilteredActivities(activities)
    }
  }, [selectedTag]);

  console.log('active',filteredActivities)

  return (
    <Container>
      <Title>
        <p className="home">خانه / </p>
        <p className="component"> عملکردها </p>
      </Title>

      <Content>
        <Controler selectedTag={selectedTag} setSelectedTag={setSelectedTag} />
        <Filtering />
        <Calendar activities={filteredActivities} />
      </Content>
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
    padding-bottom: 0;
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
    margin-top: 25vh;
    padding-bottom: 0;
  }
`;
