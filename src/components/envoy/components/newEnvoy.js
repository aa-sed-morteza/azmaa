import React from "react";
import styled from "styled-components";
import profile from "../../../assets/profile.png";
import upArrow from "../../../assets/arrow.png";
import BestEnvoy from "../../home/components/bestEnvoy";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding-left: 9%;
  margin-top: 70px;
  margin-bottom:70px;
`;

const Title = styled.h1`
  color: #707070;
  font-size: 1.875vw;
  font-weight: 300;
  overflow: hidden;
  text-align: center;
  margin: 0;
  &:after {
    background-color: #707070;
    content: "";
    display: inline-block;
    height: 2px;
    position: relative;
    vertical-align: middle;
    width: 79%;
  }

  &:before {
    content: "";
    display: inline-block;
    background-image: url(${profile});
    background-size: cover;
    background-repeat: no-repeat;
    width: 59px;
    height: 59px;
    margin-bottom: -1%;
  }
`;

const EnvoyContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
`;

const ShowMore = styled.div`
border: 2px solid #9f9f9f;
border-radius: 8px;
width: 500px;
display:flex;
justify-content: center;
align-items: center;
margin: auto;
padding: 13px;
margin-top:43px;
p {
  font-size: 1.25vw;
  font-weight: 400;
  color: #9f9f9f;
  position: relative;
  margin:0;
  &:after {
    content: "";
    display: flex;
    position: absolute;
    background-image: url(${upArrow});
    background-size: cover;
    background-repeat: no-repeat;
    width: 15px;
    height: 8px;
    left: -37px;
    bottom: 8px;
  }
}
}
`;


export default function NewEnvoy(){
    return(
        <Container>
      <Title> جدیدترین نمایندگان</Title>
      <EnvoyContainer>
        <BestEnvoy/>
        <BestEnvoy/>
        <BestEnvoy/>
        <BestEnvoy/>
        <BestEnvoy/>
        <BestEnvoy/>
      </EnvoyContainer>
      <ShowMore>
        <p>نمایش بیشتر</p>{" "}
      </ShowMore>
    </Container>
    )
}