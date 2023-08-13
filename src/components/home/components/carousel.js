import React, { useEffect, useState } from "react";
import styled from "styled-components";
import data from "../../../data.json";
import leftArrow from "../../../assets/lightArrow.webp";
import SelectState from "./selectState";
import IranMap from "../../pluginIranMap/IranMap";
import { BaseBackURL } from "../../../constant/api";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Carousel() {
  const { postList } = useSelector((state) => state.blog);

  const items = data.slider;
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

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

  const index = items.map((x, i) => {
    return (
      <div
        onClick={() => setCurrentIndex(i)}
        key={i}
        className={i === currentIndex ? "item active" : "item"}
      ></div>
    );
  });

  const postsElements = postList.map((item, i) => {
    return (
      <Slide
        key={i}
        photo={item.image}
        style={{
          transform: `translate(${currentIndex * 100}%)`,
          backgroundColor: "#5e5e5e",
        }}
      >
        <img className="cover" src={item.image} alt="news" />
        <div className="content">
          <h1>{item.title}</h1>
          <p>{item.description}</p>
          <div
            className="show-more"
            onClick={() => {
              navigate(`/blog/${item.id}`);
            }}
          >
            ادامه مطلب
          </div>
        </div>
      </Slide>
    );
  });

  return (
    <Wrapper>
      {postsElements}
      <ShowIndex>{index}</ShowIndex>
      {/* <SelectState /> */}
      <IranMap
        style={{
          position: "absolute",
          top: "20%",
          bottom: "10%",
          margin: "auto",
        }}
      />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  height: 100vh;
  overflow: hidden;
  flex-wrap: nowrap;
  display: flex;
  padding: 0;
  margin: 0;
  position: relative;
`;

const ShowIndex = styled.div`
  display: flex;
  gap: 10px;
  position: absolute;
  bottom: 10%;
  right: 8%;
  .item {
    width: 15px;
    height: 15px;
    border-radius: 15px;
    background-color: #cbcbcb;
    cursor: pointer;
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
  justify-content: center;
  align-items: center;
  transition: 0.3s ease-in-out;
  .cover {
    position: absolute;
    left: 0px;
    top: 0px;
    z-index: -1;
    width: 100%;
    height: 100%;
    -webkit-filter: brightness(0.5); /*Safari 6.0 - 9.0 */
    filter: brightness(0.5);
    object-fit: cover;
  }
  .content {
    position: absolute;
    display: flex;
    flex-direction: column;
    width: 40%;
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
