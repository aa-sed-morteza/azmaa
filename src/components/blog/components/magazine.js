import React from "react";
import styled from "styled-components";
import leftArrow from "../../../assets/leftArrow.webp";
import mag from "../../../assets/blog.webp";
import user from "../../../assets/profile.webp";
import data from "../../../data.json";
import ScrollButton from "../../general/scrollButton";

const MagazineContainer = styled.section`
  background-color: #ffaa00;
  padding: 13px 0;
  margin-top: 15px;
  margin-right: -10px;
  margin-left: -10px;
  display: flex;
  margin-bottom: 15px;
  position: relative;
  @media (min-width: 481px) {
    padding: 20px;
    // margin-top:70px;
    margin-top: 0;
    padding-left: 30px;
    margin-inline: -12.5%;
  }
  @media (min-width: 769px) {
    padding: 36px 0 50px;
  }
`;

const Ttitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 100px;
  margin-right: 40px;
  position: relative;
  span {
    background-image: url(${mag});
    background-size: contain;
    background-repeat: no-repeat;
    width: 51px;
    height: 50px;
  }
  h1 {
    color: #095644;
    font-size: 4.65vw;
    font-weight: 300;
    text-align: center;
  }
  &:after {
    content: "";
    display: flex;
    position: absolute;
    background-image: url(${leftArrow});
    background-size: cover;
    background-repeat: no-repeat;
    width: 5px;
    height: 10px;
    left: -8px;
  }

  @media (min-width: 481px) {
    margin-right: 5%;
    max-width: 150px;
    padding-left: 7%;
    span {
      width: 50px;
      height: 50px;
    }
    h1 {
      font-size: 1.875vw;
      white-space: nowrap;
    }
    &:after {
      width: 15px;
      height: 30px;
      left: 25px;
      top: 50%;
      transform: translate(0, -50%);
    }
  }
  @media (min-width: 769px) {
    margin-right: 12%;
    max-width: 200px;
    span {
      width: 97px;
      height: 97px;
    }
    h1 {
      font-size: 1.875vw;
      white-space: nowrap;
    }
    &:after {
      width: 15px;
      height: 30px;
      left: 45px;
    }
  }
`;

const Wraper = styled.div`
  display: flex;
  overflow-x: scroll;
  gap: 10px;
  padding-right: 50px;
  ::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: 481px) {
    // padding-right: 90px;
    gap: 28px;
  }
`;

const Paper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 10px 14px 10px;
  background: #ffffff;
  box-shadow: 0px 0px 25px -5px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  cursor: pointer;
  .cover {
    width: 160px;
    height: 120px;
    border-radius: 2px;
    margin-bottom: 5px;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  .user {
    margin: 0;
    color: #707070;
    font-weight: 300;
    font-size: 3.72vw;
    display: flex;
    align-items: center;
    gap: 7px;
    margin-bottom: 10px;
    &:before {
      content: "";
      display: inline-flex;
      background-image: url(${user});
      background-size: cover;
      background-repeat: no-repeat;
      width: 15px;
      height: 15px;
    }
  }
  .content {
    color: #707070;
    font-size: 3.72vw;
    font-weight: 400;
    margin: 0;
    margin-bottom: 10px;
  }

  .date {
    color: rgba(0, 0, 0, 0.2);
    font-size: 3.25vw;
    font-weight: bold;
    margin: 0;
  }

  @media (min-width: 481px) {
    padding: 20px;
    box-shadow: 0px 0px 30px -5px rgba(0, 0, 0, 0.3);
    border-radius: 8px;
    .cover {
      width: 200px;
      height: 150px;
      border-radius: 4px;
      margin-bottom: 10px;
    }
    .user {
      font-size: 1.042vw;
      margin-bottom: 15px;
      &:before {
        width: 20px;
        height: 20px;
      }
    }
    .content {
      font-size: 1.25vw;
      margin-bottom: 15px;
    }
    .date {
      font-size: 1.042vw;
      font-weight: 500;
    }
  }
  @media (min-width: 1200px) {
    padding: 20px 19px 25px 19px;
    .cover {
      width: 330px;
      height: 253px;
      margin-bottom: 18px;
    }
    .user {
      font-size: 1.042vw;
      margin-bottom: 36px;
      padding-right: 30px;
      &:before {
        width: 20px;
        height: 20px;
      }
    }
    .content {
      font-size: 1.25vw;
      margin-bottom: 36px;
    }
    .date {
      font-size: 1.042vw;
      font-weight: 500;
    }
  }
`;

const Curtain = styled.div`
  position: absolute;
  width: 45%;
  height: 100%;
  background: linear-gradient(
    to left,
    rgba(250, 183, 50, 0) 63.02%,
    #fab732 100%
  );
  top: 0;
  left: 0;
`;
export default function Magazine({ posts }) {
  const magPaper = posts.map((x, i) => {
    return (
      <Paper key={i}>
        <div className="cover">
          <img src={x.img} alt={x.date} />
        </div>

        <p className="user">{x.writer}</p>

        <p className="content">{x.description.slice(0, 245) + " ..."}</p>

        <p className="date">{x.date}</p>
      </Paper>
    );
  });
  return (
    <MagazineContainer>
      <Ttitle>
        <span></span>
        <h1>جدیدترین مطالب</h1>
      </Ttitle>
      <Wraper id="magazine">
        {magPaper}
        <ScrollButton container="magazine" />
      </Wraper>
      <Curtain></Curtain>
    </MagazineContainer>
  );
}
