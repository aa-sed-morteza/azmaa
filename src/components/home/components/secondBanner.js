import React from "react";
import styled from "styled-components";
import banner03 from "../../../assets/banner03.webp";
import useWidth from "../../../hook/useWidth";

const Wraper = styled.section`
  display: flex;
  flex-direction: column;
  @media (min-width: 481px) {
    margin: 20px 0;
    flex-direction: row;
    padding: 0 10%;
    gap: 19px;
  }
  @media (min-width: 769px) {
    margin-top: 80px;
    margin-bottom: 80px;
  }
`;

const BannerContainer = styled.div`
  width: 100%;
  height: auto;
  margin-top: 30px;
  img {
    width: 100%;
    height: auto;
    object-fit: contain;
  }
`;

export default function SecondBanner() {
  const width = useWidth();
  return (
    <Wraper>
      <BannerContainer>
        <img src={banner03} alt="banner" />
      </BannerContainer>

      {width > 481 ? (
        <BannerContainer>
          <img src={banner03} alt="banner" />
        </BannerContainer>
      ) : (
        ""
      )}
    </Wraper>
  );
}
