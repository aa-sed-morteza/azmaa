import React from "react";
import styled from "styled-components";
import leftArrow from "../../../assets/leftArrow.webp";
import mag from "../../../assets/blog.webp";
import user from "../../../assets/profile.webp";
import note from "../../../assets/text.webp";
import news from "../../../assets/news.webp";
import report from "../../../assets/report.webp";
import article from "../../../assets/report.webp";
import data from "../../../data.json";
import ScrollButton from "../../general/scrollButton";
import { useNavigate } from "react-router-dom";
import { convertDateToFarsi } from "../../../utils";

const MagazineContainer = styled.section`
  background-color: #ffaa00;
  padding: 13px 0;
  margin-top: 15px;
  margin-right: -10px;
  margin-left: -10px;
  display: flex;
  margin-bottom: 15px;
  position: relative;
  flex-wrap: wrap;
  @media (min-width: 481px) {
    padding: 20px;
    // margin-top:70px;
    margin-top: 0;
    padding-left: 30px;
    margin-inline: -12.5%;
  }
  @media (min-width: 769px) {
    padding: 36px 0 50px;
    flex-wrap: nowrap;
  }
`;

const Ttitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-right: 20px;
  position: relative;
  span {
    background-image: url(${mag});
    background-size: contain;
    background-repeat: no-repeat;
    width: 20px;
    height: 20px;
  }
  h1 {
    width: 100%;
    color: #095644;
    font-size: 4vw;
    white-space: nowrap;
    font-weight: 300;
    text-align: right;
    margin-right: 10px;
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
    left: 5px;
  }

  @media (min-width: 481px) {
    width: 30%;
    margin-right: 5%;
    max-width: 150px;
    padding-left: 7%;
    flex-direction: column;
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
    width: 30%;
    margin-right: 8%;
    max-width: 200px;
    flex-direction: column;
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
  width: 100%;
  margin-right: 16px;
  ::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: 481px) {
    // padding-right: 90px;
    flex-grow: 1;
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
      background-image: ${(props) => props.icon == "note" && `url(${note})`};
      background-image: ${(props) => props.icon == "news" && `url(${news})`};
      background-image: ${(props) =>
        props.icon == "report" && `url(${report})`};
      background-image: ${(props) =>
        props.icon == "article" && `url(${article})`};
      background-size: contain;
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
  .ReadMore {
    color: #fab732;
    font-size: 14px;
    font-weight: bold;
    text-decoration: underline;
    margin-top: auto;
    cursor: pointer;
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
  display: none;
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
  const navigate = useNavigate();

  console.log("pos", posts);

  const magPaper = posts.map((x, i) => {
    return (
      <Paper key={i} icon={x.type}>
        <div className="cover">
          <img src={x.main_image} alt={x.date} />
        </div>

        <p className="user">
          {x.type == "note" && "یادداشت"}
          {x.type == "news" && "خبر"}
          {x.type == "report" && "گزارش"}
          {x.type == "article" && "مقاله"}
        </p>

        <h5 className="Ttitle">{x.title}</h5>

        <p className="content">{x.description.slice(0, 100) + " ..."}</p>

        <p
          className="ReadMore"
          onClick={() => {
            navigate(`/blog/${x.id}`);
          }}
        >
          ادامه مطلب
        </p>

        <p className="date">{convertDateToFarsi(x.created)}</p>
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
