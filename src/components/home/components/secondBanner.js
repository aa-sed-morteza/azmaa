import React from "react";
import styled from "styled-components";
import banner03 from "../../../assets/banner03.png";


const BannerContainer = styled.div`
  width: 100%;
  height: auto;
  margin-top:30px;
  img {
    width: 100%;
    height: auto;
    object-fit: contain;
  }
`;

export default function SecondBanner(){
    return(
        <BannerContainer>
            <img src={banner03} alt="banner"/>
        </BannerContainer>
    )
}