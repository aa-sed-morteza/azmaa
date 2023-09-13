import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Control from "../../vote/components/controler";
import data from "../../../data.json";
import user from "../../../assets/profile.webp";
import note from "../../../assets/text.webp";
import news from "../../../assets/news.webp";
import report from "../../../assets/report.webp";
import article from "../../../assets/report.webp";
import upArrow from "../../../assets/arrow.webp";
import { useNavigate, useSearchParams } from "react-router-dom";
import { convertDateToFarsi } from "../../../utils";

export default function SelectNews({ posts }) {
  const navigate = useNavigate();
  const [selectedTag, setSelectedTag] = useState("همه");
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [mostVisitedMore, setMostVisitedMore] = useState(false);
  const [lastNewsMore, setLastNewsMore] = useState(false);
  const [searchparams, setsearchparams] = useSearchParams();
  const [showLimit, setShowLimit] = useState(4);

  const showRef = useRef(null);

  useEffect(() => {
    setFilteredPosts(posts);
  }, [posts]);

  const magPaper = filteredPosts
    .filter((x) => {
      let filter = searchparams.get("filter");
      if (!filter) return true;
      let name = x.writer + x.description;
      return name.includes(filter);
    })
    .slice(0, showLimit)
    .map((x, i) => {
      return (
        <Paper
          key={i}
          icon={x.type}
          onClick={() => {
            navigate(`/blog/${x.id}`);
          }}
        >
          <div className="cover">
            <img src={x.main_image} alt={x.date} />
          </div>

          {/* <p className="user">{x.writer}</p> */}
          <p className="user">
            {x.type == "note" && "یادداشت"}
            {x.type == "news" && "خبر"}
            {x.type == "report" && "گزارش"}
            {x.type == "article" && "مقاله"}
          </p>
          <h5 className="title">{x.title}</h5>
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

  useEffect(() => {
    if (
      posts.filter((x) => x.tag.length > 0 && x.tag[0].name === selectedTag)
    ) {
      setFilteredPosts(
        posts.filter((x) => x.tag.length > 0 && x.tag[0].name === selectedTag)
      );
    } else {
    }

    if (selectedTag == "همه") {
      setFilteredPosts(posts);
    }
  }, [selectedTag]);
  return (
    <Container>
      <Control selectedTag={selectedTag} setSelectedTag={setSelectedTag} />

      {/* <Title> پربازدیدترین مطالب</Title>
      <NewsWraper hide={mostVisitedMore}>{magPaper}</NewsWraper>
      <ShowMore
        arrow={mostVisitedMore}
        onClick={() => {
          setMostVisitedMore(!mostVisitedMore);
        }}
      >
        <p>{mostVisitedMore ? "نمایش کمتر" : "نمایش بیشتر "}</p>
      </ShowMore> */}

      <ChangeBack>
        <Title> آخرین مطالب</Title>
        <NewsWraper ref={showRef}>{magPaper}</NewsWraper>
        <ShowMore
          arrow={showLimit >= filteredPosts.length}
          onClick={() => {
            if (showLimit < filteredPosts.length) {
              setShowLimit(showLimit + 4);
            } else {
              setShowLimit(4);
              showRef.current.scrollIntoView();
            }
          }}
          style={{ marginTop: "20px" }}
        >
          <p>{showLimit >= filteredPosts.length ? "نمایش کمتر" : "نمایش بیشتر "}</p>{" "}
        </ShowMore>
      </ChangeBack>
    </Container>
  );
}

const Container = styled.section`
  background-color: #ffffff;
  border-radius: 4px;
  padding: 10px;
  @media (min-width: 481px) {
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
  @media (min-width: 481px) {
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
  /* &:nth-of-type(1n + 4) {
    display: ${(props) => (!props.hide ? "none" : "")};
  } */
  @media (min-width: 481px) {
    margin-bottom: 45px;
    justify-content: flex-start;
  }
`;
const Paper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 10px 14px 10px;
  background: #ffffff;
  box-shadow: 0px 0px 25px -5px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  /* width: 43%; */
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
    /* padding-right: 20px; */
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    gap: 8px;
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
    max-width: 160px;
  }

  .date {
    color: rgba(0, 0, 0, 0.2);
    font-size: 3.25vw;
    font-weight: bold;
    margin: 0;
  }
  .ReadMore {
    color: #fab732;
    font-size: 18px;
    font-weight: bold;
    text-decoration: underline;
  }

  &:nth-child(5) {
    display: none;
  }

  @media (min-width: 481px) {
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
      /* padding-right: 30px; */
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
  @media (min-width: 1600px) {
    .cover {
      width: 16vw;
    }
  }
  @media (min-width: 1200px) {
    .cover {
      width: 15vw;
    }
    .content {
      max-width: 14vw;
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
    width: 50%;
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
  @media (min-width: 481px) {
    background-color: #f3f3f3;
    margin-inline: -13%;
    padding-inline: 13%;
    padding-bottom: 75px;
    padding-top: 1px;
    margin-top: 54px;
  }
`;
