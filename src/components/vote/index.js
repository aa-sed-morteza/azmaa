import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Calendar from "./components/calendar";
import Controler from "./components/controler";
import Filtering from "./components/filtering";
import { BaseBackURL } from "../../constant/api";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import VoteCard from "../home/components/voteCard";
import upArrow from "../../assets/arrow.webp";

export default function Vote() {
  const [selectedFilter, setSelectedFilter] = useState(0);
  const [selectedTag, setSelectedTag] = useState("همه");
  const [bills, setBills] = useState([]);
  const [filteredBills, setFilteredBills] = useState([]);
  const [firstHide, setFirstHide] = useState(false);
  const [searchparams, setsearchparams] = useSearchParams();
  const getActivities = () => {
    let config = {
      method: "get",
      url: `${BaseBackURL}api/v1/bill/?name&tag__id&vote__voter&ordering=name, date`,
    };

    axios(config).then((res) => {
      // console.log(res.data);
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
    if(bills.tag)
    if (bills.filter((item) =>item.tag[0].name === selectedTag )) {
      setFilteredBills(bills.filter((item) => item.tag[0].name === selectedTag))
    } else {
      setBills(bills)
    }

    if (selectedTag == 'همه') {
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
        {/* {console.log(selectedTag)} */}
        <Filtering selectedFilter={selectedFilter} setSelectedFilter={setSelectedFilter} />
        <Titleh1>آخرین رأی‌گیری‌ها</Titleh1>
        <VoterContainer hide={firstHide}>
          {bills.filter((item) => {
            let filter = searchparams.get("filter");
            if (!filter) return true;
            // let name= item.writer + item.description ;
            let name = item.name;
              console.log(item);
            return name.includes(filter);
          }).filter((item) => {
            if (selectedTag === 'همه') return true;
            let tag="";
            if(item.tag[0])
             tag = item.tag[0].name;
            return tag.includes(selectedTag);
          }).sort((a,b)=>{
            if(selectedFilter== 1){
              return new Date(b.date) - new Date(a.date);
            }else if (selectedFilter== 2){
              return new Date(a.date) - new Date(b.date);
            }else if (selectedFilter== 3){
              return a.bill_transparency - b.bill_transparency;
            }else{
              return 0;
            }
          }).map((item, i) => {
            return <VoteCard bill={item} key={i} />;
          })}
        </VoterContainer>
        <ShowMore
          arrow={firstHide}
          onClick={() => {
            setFirstHide(!firstHide);
          }}
        >
          <p>{firstHide ? "نمایش کمتر" : "نمایش بیشتر "}</p>
        </ShowMore>


        {/* <Calendar bills={filteredBills} /> */}
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

const VoterContainer = styled.div`
  & > :nth-of-type(1n + 2) {
    display: ${(props) => (!props.hide ? "none" : "")};
  }
  @media (min-width: 481px) {
    display: flex;
    gap: 20px;
    justify-content: center;
    flex-wrap: wrap;
    // margin-left:-7%;
    // margin-right:-7%;
    & > :nth-of-type(1n + 2) {
      display: flex;
    }
    & > :nth-of-type(1n + 4) {
      display: ${(props) => (!props.hide ? "none" : "")};
    }
  }
  @media (min-width: 769px) {
    justify-content: center;
  }
`;
const Titleh1 = styled.h1`
  color: #9f9f9f;
  font-size: 4.65vw;
  font-weight: 300;
  overflow: hidden;
  text-align: center;
  margin-bottom: 10px;
  &:after {
    background-color: #9f9f9f;
    content: "";
    display: inline-block;
    height: 1px;
    position: relative;
    // vertical-align: middle;
    width: 58%;
  }
  @media (min-width: 481px) {
    margin-top: 47px;
    font-size: 1.87vw;
    margin-bottom: 24px;
    &:after {
      width: 75%;
    }
    &:before {
      content: "";
      display: inline-block;
      background-size: cover;
      background-repeat: no-repeat;
      width: 3.073vw;
      height: 3.073vw;
      margin-bottom: -1%;
    }
  }
  // @media(max-width:1400px){
  //   &:after{
  //     width:79%;
  //   }
  // }
  // @media(max-width:1000px){
  //   &:after{
  //     width:70%;
  //   }
  // }
`;
const ShowMore = styled.div`
  border: 1px solid #9f9f9f;
  border-radius: 4px;
  display: flex;
  padding: 8px;
  background-color: #ffffff;
  margin-bottom: 10px;
  cursor: pointer;
  p {
    margin: auto;
    color: #9f9f9f;
    font-size: 4.65vw;
    display: flex;
    align-items: center;
    gap: 20px;
    font-weight: 300;
    &:after {
      content: "";
      display: inline-flex;
      background-image: url(${upArrow});
      transform: ${(props) => (props.arrow ? `rotate(180deg)` : "")};
      background-size: cover;
      background-repeat: no-repeat;
      width: 9px;
      height: 5px;
    }
  }

  @media (min-width: 481px) {
    border: 2px solid #9f9f9f;
    border-radius: 8px;
    width:50%;
    justify-content: center;
    align-items: center;
    margin: auto;
    padding: 13px;
    p {
      font-size: 1.25vw;
      font-weight: 400;
      &:after {
        width: 15px;
        height: 8px;
        left: -37px;
      }
    }
  }
`;