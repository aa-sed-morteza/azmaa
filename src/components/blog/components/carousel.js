import React, { useState, useEffect } from "react";
import styled from "styled-components";
import data from "../../../data.json";
import leftArrow from "../../../assets/lightArrow.png";

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
  //   height: 20rem;
  justify-content: center;
  align-items: center;
`;
const PicWraper = styled.div`
  width: 60%;
  height: auto;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const Content = styled.div`
  width:35%
  display:flex;
  flex-direction:column;
  gap:30px;
  justify-content:flex-start;
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
    left: 30px;
    top: 25px;
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

export default function Carousel() {
  const items = data.newspaper;
  const [currentIndex, setCurrentIndex] = useState(0);

  function carouselInfiniteScroll() {
    if (currentIndex === data.envoy.length - 1) {
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

  //   style={{transform:`translate(${currentIndex*100}%)`}}
  return (
    <Container>
      {items.map((x, i) => {
        return (
          <Slide key={i}>
            <PicWraper>
              <img src={x.img} alt="poster" />
            </PicWraper>
            <Content>
              <h1 className="title">{x.title}</h1>
              <p className="text">{x.expand} </p>
              <div className="identity">
                <p className="user">{x.user}</p>
                <p className="date">{x.date}</p>
              </div>
              <Button>
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
