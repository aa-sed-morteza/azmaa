import React from "react";
import styled from "styled-components";
import Control from "../../vote/components/controler";
import data from "../../../data.json";
import user from "../../../assets/profile.webp";
import upArrow from "../../../assets/arrow.webp";

const Container = styled.section`
  background-color: #ffffff;
  border-radius: 4px;
  padding: 10px;
  @media (min-width: 480px) {
    margin-top: 25%;
  }
`;

const Title = styled.h1`
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
    vertical-align: middle;
    width: 59%;
  }
  @media (min-width: 480px) {
    margin-top: 75px;
    font-size: 1.87vw;
    margin-bottom: 45px;
    &:after {
      width: 81%;
    }
  }
`;

const NewsWraper = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 10px;
  @media (min-width: 480px) {
    margin-bottom: 45px;
    justify-content:flex-start;
  }
`;

const Paper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 10px 14px 10px;
  background: #ffffff;
  box-shadow: 0px 0px 25px -5px rgba(0, 0, 0, 0.25);
  border-radius: 4px;

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
    padding-right: 20px;
    position: relative;
    margin-bottom: 10px;
    &:before {
      content: "";
      display: flex;
      position: absolute;
      background-image: url(${user});
      background-size: cover;
      background-repeat: no-repeat;
      width: 15px;
      height: 15px;
      right: 2px;
      top: 5px;
    }
  }
  .content {
    color: #707070;
    font-size: 3.72vw;
    font-weight: 400;
    margin: 0;
    margin-bottom: 10px;
    max-width: 160px;
  }

  .date {
    color: rgba(0, 0, 0, 0.2);
    font-size: 3.25vw;
    font-weight: bold;
    margin: 0;
  }

  &:nth-child(5) {
    display: none;
  }

  @media (min-width: 480px) {
    padding: 20px 19px 25px 19px;
    box-shadow: 0px 0px 30px -5px rgba(0, 0, 0, 0.3);
    border-radius: 8px;
    .cover {
      width: 17.188vw;
      height: 13.177vw;
      border-radius: 4px;
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
      max-width: 15.938vw;
    }
    .date {
      font-size: 1.042vw;
      font-weight: 500;
    }
  }
  @media(max-width:1600px){
    .cover{
      width:16vw;
    }
  }
  @media(max-width:1200px){
    .cover{
      width:15vw;
    }
    .content{
      max-width:14vw;
    }
  }
`;

const ShowMore = styled.div`
  border: 1px solid #9f9f9f;
  border-radius: 4px;
  display: flex;
  padding: 8px;
  background-color: #ffffff;
  margin-bottom: 10px;
  p {
    margin: auto;
    color: #9f9f9f;
    font-size: 4.65vw;
    position: relative;
    font-weight: 300;
    &:after {
      content: "";
      display: flex;
      position: absolute;
      left: -25px;
      bottom: 8px;
      background-image: url(${upArrow});
      background-size: cover;
      background-repeat: no-repeat;
      width: 9px;
      height: 5px;
    }
  }

  @media (min-width: 480px) {
    border: 2px solid #9f9f9f;
    border-radius: 8px;
    max-width: 500px;
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

const ChangeBack = styled.div`
  @media (min-width: 480px) {
    background-color: #f3f3f3;
    margin-inline: -13%;
    padding-inline: 13%;
    padding-bottom: 75px;
    padding-top: 1px;
    margin-top: 54px;
  }
`;

export default function SelectNews() {
  const magPaper = data.magazine.map((x, i) => {
    return (
      <Paper key={i}>
        <div className="cover">
          <img src={x.img} alt={x.date} />
        </div>

        <p className="user">{x.name}</p>

        <p className="content">{x.content}</p>

        <p className="date">{x.date}</p>
      </Paper>
    );
  });
  return (
    <Container>
      <Control />
      <Title> پربازدیدترین مطالب</Title>
      <NewsWraper>{magPaper}</NewsWraper>
      <ShowMore>
        <p>نمایش بیشتر</p>
      </ShowMore>

      <ChangeBack>
        <Title> آخرین مطالب</Title>
        <NewsWraper>{magPaper}</NewsWraper>
        <ShowMore>
          <p>نمایش بیشتر</p>
        </ShowMore>
      </ChangeBack>
    </Container>
  );
}
