import React from "react";
import styled from "styled-components";
import Control from "../../vote/components/controler";
import data from "../../../data.json";
import user from "../../../assets/profile.png";
import upArrow from "../../../assets/arrow.png";

const Container = styled.section`
  background-color: #ffffff;
  border-radius: 4px;
  padding: 10px;
`;

const Title = styled.h1`
  color: #9F9F9F;
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
    margin-top: 47px;
    font-size: 1.87vw;
    margin-bottom: 24px;
    &:after {
      width: 81%;
    }
  
  }
`;

const NewsWraper = styled.div`
  display:flex;
  gap:10px;
  flex-wrap:wrap;
  justify-content:space-between;
  margin-bottom:10px;
 
`

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

  &:nth-child(5){
    display:none;
  }

  @media (min-width: 480px) {
    padding: 20px 19px 25px 19px;
    box-shadow: 0px 0px 30px -5px rgba(0, 0, 0, 0.3);
    border-radius: 8px;
    .cover {
      width: 330px;
      height: 253px;
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
    }
    .date {
      font-size: 1.042vw;
      font-weight: 500;
    }
  }
`;

const ShowMore = styled.div`
  border: 1px solid #9f9f9f;
  border-radius: 4px;
  display: flex;
  padding: 8px;
  background-color:#FFFFFF;
  margin-bottom:10px;
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


export default function SelectNews() {

  const magPaper = data.magazine.map((x, i) => {
    return (
      <Paper>
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
      <NewsWraper>
      {magPaper}
      </NewsWraper>
      <ShowMore>
        <p>نمایش بیشتر</p>
      </ShowMore>

      <Title>  آخرین مطالب</Title>
      <NewsWraper>
      {magPaper}
      </NewsWraper>
      <ShowMore>
        <p>نمایش بیشتر</p>
      </ShowMore>
    </Container>
  );
}
