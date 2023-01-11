import React from "react";
import styled from "styled-components";
import banner1 from "../../../assets/banner1.webp";
import banner2 from "../../../assets/banner2.webp";

const Wraper=styled.div`
  display:flex;
  flex-direction:column;
  @media(min-width:481px){
    flex-direction:row;
    padding:0px 10%;
    gap:27px;
    margin-top:20px;
    
  }
  @media(min-width:769px){
    margin-top:81px;
  }
`


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
    <Wraper>
      <BannerContainer>
        <img src={banner1} alt="banner_1" />
      </BannerContainer>
      <BannerContainer>
        <img src={banner2} alt="banner_2" />
      </BannerContainer>
    </Wraper>
  );
}
