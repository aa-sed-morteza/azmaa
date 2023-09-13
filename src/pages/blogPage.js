import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Magazine from "../components/blog/components/magazine";
import Poster from "../components/blog/components/poster";
import SelectNews from "../components/blog/components/selectNews";
import useWidth from "../hook/useWidth";
import Carousel from "../components/blog/components/carousel";
import axios from "axios";
import { BaseBackURL } from "../constant/api";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Blog() {
  const { postList } = useSelector((state) => state.blog);
  const width = useWidth();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container>
      <Title>
        <p
          className="home"
          onClick={() => {
            navigate("/");
          }}
        >
          خانه /{" "}
        </p>
        <p className="component"> بلاگ </p>
      </Title>
      {width < 481 ? (
        <Poster posts={postList} />
      ) : (
        <Carousel posts={postList} />
      )}

      <Magazine posts={postList} />
      <SelectNews posts={postList} />
    </Container>
  );
}

const Container = styled.section`
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  padding: 10px;
  overflow: hidden;
  @media (min-width: 481px) {
    background-color: #ffffff;
    padding: 25px 10% 0;
  }
`;

const Title = styled.div`
  display: flex;
  margin-bottom: 12px;
  padding-right: 10px;
  white-space: nowrap;
  .home {
    font-size: 3.721vw;
    font-weight: 700;
    margin: 0;
    color: rgba(0, 0, 0, 0.2);
  }
  .component {
    font-size: 3.721vw;
    font-weight: 700;
    padding-right: 5px;
    margin: 0;
    color: rgba(112, 112, 112, 1);
  }
  @media (min-width: 481px) {
    margin-bottom: 25px;
    .home,
    .component {
      font-size: 1.25vw;
    }
  }
`;
