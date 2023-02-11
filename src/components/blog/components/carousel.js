import React, { useState, useEffect } from "react";
import styled from "styled-components";
import data from "../../../data.json";
import leftArrow from "../../../assets/lightArrow.webp";
import profile from "../../../assets/profile.webp";
import { useNavigate } from "react-router-dom";

const Container = styled.section`
  overflow: hidden;
  flex-wrap: nowrap;
  display: flex;
  padding: 0;
  margin: 0;
  position: relative;
  padding-bottom: 82px;
`;

const ShowIndex = styled.div`
  display: flex;
  gap: 10px;
  position: absolute;
  bottom: 11%;
  left: 30%;
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
  //   height: 20rem;
  justify-content: center;
  align-items: center;
  gap: 2.6vw;
`;
const PicWraper = styled.div`
  width: 116%;
  height: auto;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const Content = styled.div`
  width: 71%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  justify-content: flex-start;
  height: 100%;
  .title {
    color: #707070;
    font-weight: 800;
    font-size: 3.33vw;
    margin: 0;
    line-height: 5.78vw;
  }
  .text {
    font-weight: 400;
    font-size: 1.66vw;
    line-height: 2.86vw;
    text-align: justify;
    color: #707070;
    margin: 0;
  }
  .identity {
    display: flex;
    align-items: center;
    .user {
      padding-left: 10px;
      display: flex;
      align-items: center;
      gap: 7px;
      color: #9f9f9f;
      font-weight: 700;
      font-size: 1.25vw;
      margin: 0;
      border-left: 1px solid #9f9f9f;
      &:before {
        content: "";
        display: inline-flex;
        background-image: url(${profile});
        background-size: cover;
        background-repeat: no-repeat;
        width: 30px;
        height: 30px;
      }
    }
    .date {
      font-weight: 500;
      font-size: 1.25vw;
      color: rgba(0, 0, 0, 0.2);
      padding-right: 10px;
      margin: 0;
    }
  }
`;

const Button = styled.div`
  background-color: #095644;
  border-radius: 8px;
  position: relative;
  padding: 14px 80px 15px 30px;
  width: fit-content;
  &:after{
    content: "";
    display: block;
    position: absolute;
    background-image: url(${leftArrow});
    background-size: cover;
    background-repeat: no-repeat;
    width: 9px;
    height: 15px;
    left: 9%;
    top: 50%;
    transform:translate(0,-50%);
}
   
  }
  .text-button {
    margin: 0;
    padding-left: 60px;
    color: #ffffff;
    font-size: 1.25vw;
    font-weight: 700;
  }
`;

export default function Carousel({ posts }) {
  const items = posts;
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  function carouselInfiniteScroll() {
    if (currentIndex === data.newspaper.length - 1) {
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
        key={i}
        className={i === currentIndex ? "item active" : "item"}
      ></div>
    );
  });

  //
  return (
    <Container>
      {items.map((x, i) => {
        return (
          <Slide
            key={i}
            style={{ transform: `translate(${currentIndex * 100}%)` }}
          >
            <PicWraper>
              <img src={x.img} alt="poster" />
            </PicWraper>
            <Content>
              <h1 className="title">{x.title.slice(0, 50) + "..."}</h1>
              <p className="text">{x.description.slice(0, 250) + "..."} </p>
              <div className="identity">
                <p className="user">{x.writer}</p>
                <p className="date">{x.created}</p>
              </div>
              <Button
                onClick={() => {
                  navigate(`/blog/${x.title}`);
                }}
              >
                <p className="text-button">ادامه مطلب</p>{" "}
              </Button>
            </Content>
          </Slide>
        );
      })}
      <ShowIndex>{index}</ShowIndex>
    </Container>
  );
}
