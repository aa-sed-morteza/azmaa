import { useEffect, useRef, useState } from "react";
import { BaseBackURL } from "../../../constant/api";
import axios from "axios";
import DistrictCard from "./districtCard";
import styled from "styled-components";
import tik from "../../../assets/vote.webp";
import upArrow from "../../../assets/arrow.webp";

export default function DistrictsPart({ searchPhrase }) {
  const [districts, setDistricts] = useState([]);
  const [districtsToShow, setDistrictsToShow] = useState([]);
  const [showLimit, setShowLimit] = useState(6);

  const districtContainerRef = useRef(null);

  const handleGetdistrcits = () => {
    let config = {
      method: "get",
      url: `${BaseBackURL}api/v1/electoral_district/?city__id&city__province__id`,
    };

    axios(config)
      .then(function (response) {
        // console.log(JSON.stringify(response.data));
        setDistricts([...response.data]);
        setDistrictsToShow([...response.data]);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    handleGetdistrcits();
  }, []);

  useEffect(() => {
    const list = [];
    for (const item of districts) {
      if (item.name.includes(searchPhrase)) {
        list.push(item);
      }
    }
    setDistrictsToShow([...list]);
  }, [searchPhrase]);

  const districtsElements = districtsToShow
    .slice(0, showLimit)
    .map((item) => <DistrictCard data={item} />);
  return (
    <div ref={districtContainerRef}>
      <Title>حوزه‌ها</Title>
      <SecondAlbum>{districtsElements}</SecondAlbum>
      <ShowMore
        arrow={showLimit >= districtsToShow.length}
        onClick={() => {
          if (showLimit < districtsToShow.length) {
            setShowLimit(showLimit + 10);
          } else {
            setShowLimit(3);
            districtContainerRef.current.scrollIntoView();
          }
        }}
      >
        <p>
          {showLimit < districtsToShow.length ? "نمایش بیشتر" : "نمایش کمتر "}
        </p>{" "}
      </ShowMore>
    </div>
  );
}

const Title = styled.h1`
  color: #9f9f9f;
  font-size: 4vw;
  width: 100%;
  font-weight: 300;
  overflow: hidden;
  text-align: center;
  margin-bottom: 10px;
  margin-top: 30px;
  &:after {
    background-color: #9f9f9f;
    content: "";
    display: inline-block;
    height: 1px;
    position: relative;
    // vertical-align: middle;
    width: 85%;
  }
  @media (min-width: 481px) {
    margin-top: 47px;
    font-size: 1.87vw;
    margin-bottom: 24px;
    &:after {
      width: 85%;
    }
    &:before {
      content: "";
      display: inline-block;
      background-image: url(${tik});
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
    width: 31%;
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

const SecondAlbum = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 40px;
  @media (min-width: 481px) {
    display: grid;
    grid-template-columns: repeat(3, 29%);
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
    margin-bottom: 30px;
    /* padding: 0 40px; */
  }
`;
