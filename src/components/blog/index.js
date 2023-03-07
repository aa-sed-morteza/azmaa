import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Magazine from "./components/magazine";
import Poster from "./components/poster";
import SelectNews from "./components/selectNews";
import useWidth from "../../hook/useWidth";
import Carousel from "./components/carousel";
import axios from "axios";
import { BaseBackURL } from "../../constant/api";

export default function Blog() {
  const width = useWidth();
  const [posts, setPosts] = useState([]);

  const getPosts = () => {
    let config = {
      method: "get",
      url: `${BaseBackURL}api/v1/blog/?writer__id&tag__id&is_suggested=True, False&ordering=created`,
    };

    axios(config).then((res) => {
      console.log(res);
      if (res.data.length > 0) {
        setPosts([...res.data]);
      }
    });
  };

  useEffect(() => {
    getPosts();
  }, []);


  return (
    <Container>
      <Title>
        <p className="home">خانه / </p>
        <p className="component"> بلاگ </p>
      </Title>
      {width < 481 ? <Poster posts={posts} /> : <Carousel posts={posts} />}

      <Magazine posts={posts} />
      <SelectNews posts={posts} />
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
