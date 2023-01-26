import React, { useEffect, useState } from "react";
import styled from "styled-components";
import useWidth from "../../hook/useWidth";
import FirstBanner from "./components/firstBanner";
import HomeDetails from "./components/homeDetails";
import Magazine from "./components/magazine";
import SecondBanner from "./components/secondBanner";
import Carousel from "./components/carousel";
import { BaseBackURL } from "../../constant/api";
import axios from "axios";

const HomeContainer = styled.section`
  height: 100vh;
  padding: 20px;
  overflow-x: hidden;
`;


export default function Home() {
  const width = useWidth();

  const [posts, setPosts] = useState([]);

  const getPosts = () => {
    let config = {
      method: "get",
      url: `${BaseBackURL}api/v1/blog/?writer__id&tag__id&is_suggested=True, False&ordering=created`,
    };

    axios(config).then((res) => {
      console.log("response" ,res)
      if (res.data.length > 0) {
        setPosts([...res.data]);
      }
    });
  };
  
  useEffect(() => {
    getPosts();
  }, []);
  return (
    <HomeContainer>
      {width > 480 ? (
        <Carousel />
        
       
      ) : (
        ""
      )}
      <FirstBanner />
      <HomeDetails />
      <Magazine posts={posts} />
      <SecondBanner />
    </HomeContainer>
  );
}
