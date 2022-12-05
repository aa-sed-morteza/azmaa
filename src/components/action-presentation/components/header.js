import React from "react";
import styled from "styled-components";

export default function Header({img,type,icon}) {
  return (
    <Container>
      <Symbol>
        <img src={img} alt="symbol" />
      </Symbol>
      <Content>
        <Type icon={icon}>{type}</Type>
        <Ttile>دریافت خودرو دناپلاس</Ttile>
        <Date>۲۹ اسفند ۱۴۰۰</Date>
      </Content>

    </Container>
  );
}

const Container = styled.div`
  display: flex;
  padding: 0px 40px;
  justify-content: space-between;
  margin-bottom:20px;
  @media(min-width:480px){
    padding:0;
  }
`;

const Symbol = styled.div`
  width: 20.698vw;
  height: 20.698vw;
  img {
    width: 100%;
    height: auto;
    object-fit: contain;
  }
  @media(min-width:480px){
    width:6.771vw;
    height:6.771vw;
  }
`;

const Content = styled.div`
  display:flex;
  flex-direction:column;
  gap:10px;
  @media(min-width:480px){
    width: 67%;
  }
`

const Type = styled.p`
  position:relative;
  margin:0;
  padding-right:27px;
  font-size:3.721vw;
  color:#707070;
  font-weight:100;
  &:before{
    content:'';
    display:block;
    position:absolute;
    background-image: url(${props=>props.icon});
    background-size: contain;
    background-repeat: no-repeat;
    width:6.279vw;
    height:4.884vw;
    right:0;
    top:0.930vw;
  }
  @media(min-width:480px){
    padding-right:35px;
    font-size:1.250vw;
    font-weight:300;
    &:before{
      width:1.563vw;
      height:1.563vw;
      top:0.156vw;
      right:0.156vw;
    }
  }
`

const Ttile = styled.h3`
font-weight: 400;
font-size: 4.651vw;
color: #707070;
margin:0;
@media(min-width:480px){
  font-size:1.667vw;
  font-weight:700;
}
`

const Date =styled.p`
margin:0;
color:rgba(0, 0, 0, 0.2);
font-size:2.791vw;
font-weight:700;
@media(min-width:480px){
  font-size:1.250vw;
  font-weight:500;
}
`