import React from "react";
import styled from "styled-components";
import banner1 from "../../../assets/banner1.png";
import banner2 from "../../../assets/banner2.png";

const BannerContainer = styled.div`
  width: 100%;
  height: auto;
  margin-bottom: 20px;
  img {
    width: 100%;
    height: auto;
    object-fit: contain;
  }
`;

export default function FirstBanner() {
  return (
    <>
      <BannerContainer>
        <img src={banner1} alt="banner_1" />
      </BannerContainer>
      <BannerContainer>
        <img src={banner2} alt="banner_2" />
      </BannerContainer>
    </>
  );
}
