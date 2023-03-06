import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Calendar from "./components/calendar";
import Controler from "./components/controler";
import Filtering from "./components/filtering";
import { BaseBackURL } from "../../constant/api";
import axios from "axios";

export default function Vote() {
  const [selectedTag, setSelectedTag] = useState("همه");
  const [bills, setBills] = useState([]);
  const [filteredBills, setFilteredBills] = useState([]);

  const getActivities = () => {
    let config = {
      method: "get",
      url: `${BaseBackURL}api/v1/bill/?name&tag__id&vote__voter&ordering=name, date`,
    };

    axios(config).then((res) => {
      console.log(res.data);
      if (res.data.length > 0) {
        setBills([...res.data]);
        setFilteredBills([...res.data])
      }
    });
  };

  useEffect(() => {
    getActivities();
  }, []);


  
  useEffect(() => {
    if( bills.filter((item) => item.tag[0].name === selectedTag)){
      setFilteredBills(bills.filter((item) => item.tag[0].name === selectedTag))
    }else{
      setBills(bills)
    }

    if(selectedTag == 'همه'){
      setFilteredBills(bills)
    }
   
  }, [selectedTag]);

  
  
  return (
    <Container>
      <Title>
        <p className="home">خانه / </p>
        <p className="component"> رأی‌گیری‌ها </p>
      </Title>

      <Content>
        <Controler selectedTag={selectedTag} setSelectedTag={setSelectedTag} />
        <Filtering />
        <Calendar bills={filteredBills} />
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
  @media (min-width: 481px) {
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
    margin-top: 25vh;
    padding-bottom: 0;
  }
`;
