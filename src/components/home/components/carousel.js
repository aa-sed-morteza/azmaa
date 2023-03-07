import React, { useEffect, useState } from "react";
import styled from "styled-components";
import data from "../../../data.json";
import leftArrow from "../../../assets/lightArrow.webp";
import SelectState from "./selectState";
import IranMap from "../../pluginIranMap/IranMap";
import { BaseBackURL } from "../../../constant/api";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Carousel() {
  const items = data.slider;
  const [posts, setPosts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate =useNavigate();


  function carouselInfiniteScroll() {
    if (currentIndex === data.slider.length - 1) {
      return setCurrentIndex(0);
    }
    return setCurrentIndex(currentIndex + 1);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      carouselInfiniteScroll();
    }, 3000);

    return () => clearInterval(interval);
  });

  const getPosts = () => {
    let config = {
      method: "get",
      url: `${BaseBackURL}api/v1/blog/?writer__id&tag__id&is_suggested=True, False&ordering=created`,
    };

    axios(config).then((res) => {
      // console.log(res);
      if (res.data.length > 0) {
        setPosts([...res.data.slice(0, 4)]);
      }
    });
  };

 

  useEffect(() => {
    getPosts();
  }, []);

  const index = items.map((x, i) => {
    return (
      <div
        key={i}
        className={i === currentIndex ? "item active" : "item"}
      ></div>
    );
  });


  return (
    <Wraper>
      {posts.map((item, i) => {
        return (
          <Slide
            key={i}
            photo={item.image}
            style={{
              transform: `translate(${currentIndex * 100}%)`,
              backgroundColor: "#5e5e5e",
            }}
          >
            <img className="cover" src={item.image} alt='news-picture'/>
            <div className="content">
              <h1>{item.title}</h1>
              <p>{item.description}</p>
              <div className="show-more" onClick={()=>{navigate(`/blog/${item.id}`)}} >ادامه مطلب</div>
            </div>
          </Slide>
        );
      })}
      <ShowIndex>{index}</ShowIndex>
      {/* <SelectState /> */}
      <IranMap position="absolute" />
    </Wraper>
  );
}

const Wraper = styled.section`
  overflow: hidden;
  flex-wrap: nowrap;
  display: flex;
  padding: 0;
  margin: 0;
  margin-left: -3%;
  margin-right: -3%;
  margin-top: -10%;
  position: relative;
  @media (min-width: 1025px) {
    margin-top: -9%;
  }
  @media (min-width: 1201px) {
    margin-top: -7%;
  }

  // @media (max-width: 1600px) {
  //   margin-left: -2%;
  //   margin-top: -7%;
  // }
  // @media (max-width: 1600px) {
  //   margin-top: -8%;
  // }
  // @media (max-width: 992px) {
  //   margin-left: -3%;
  //   margin-top: -9%;
  // }
`;

const ShowIndex = styled.div`
  display: flex;
  gap: 10px;
  position: absolute;
  bottom: 17%;
  right: 8%;
  .item {
    width: 15px;
    height: 15px;
    border-radius: 15px;
    background-color: #cbcbcb;
  }
  .active {
    background-color: #ffaa00;
  }
`;

const Slide = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  min-width: 100%;
  height: 20rem;
  justify-content: center;
  align-items: center;
  padding-top: 44%;
  .cover{
    position: absolute;
      left: 0px;
      top: 0px;
      z-index: -1;
      width: 100%;
      height: 100%;
      -webkit-filter:  brightness(0.5); /*Safari 6.0 - 9.0 */
      filter: brightness(0.5);

 
  }
  .content {
    position: absolute;
    display: flex;
    flex-direction: column;
    width: 35%;
    top: 20%;
    right: 7%;
    z-index: 30;
    h1 {
      color: #ffffff;
      font-size: 3.33vw;
      font-weight: 800;
      line-height: 5.78vw;
      margin-top: 0;
      margin-bottom: 28px;
      display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    }
    p {
      color: #ffffff;
      font-weight: 400;
      font-size: 1.45vw;
      line-height: 2.5vw;
      text-align: justify;

      display: -webkit-box;
      -webkit-line-clamp: 6;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    .show-more {
      background-color: #ffaa00;
      border-radius: 8px;
      color: #ffffff;
      font-size: 1.25vw;
      font-weight: 700;
      padding: 10px 60px;
      width: fit-content;
      margin-top: 30px;
      position: relative;
      cursor: pointer;
      &:before {
        content: "";
        display: block;
        position: absolute;
        width: 10px;
        height: 15px;
        background-image: url(${leftArrow});
        background-size: contain;
        background-repeat: no-repeat;
        top: 50%;
        left: 25px;
        transform: translate(0, -50%);
      }
    }
  }
`;
