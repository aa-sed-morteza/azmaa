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
        <Ttile>کلیات لایحۀ بودجۀ سال ۱۴۰۱</Ttile>
        <Date>۲۹ اسفند ۱۴۰۰</Date>
      </Content>

    </Container>
  );
}

const Container = styled.div`
  display: flex;
  padding: 0px 24px;
  justify-content: space-between;
  margin-bottom:20px;
`;

const Symbol = styled.div`
  width: 89px;
  height: 89px;
  img {
    width: 100%;
    height: auto;
    object-fit: contain;
  }
`;

const Content = styled.div`
  display:flex;
  flex-direction:column;
  gap:10px;
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
    width:21px;
    height:21px;
    right:0;
    top:2px;
  }
`

const Ttile = styled.h3`
font-weight: 400;
font-size: 4.651vw;
color: #707070;
margin:0;
`

const Date =styled.p`
margin:0;
color:rgba(0, 0, 0, 0.2);
font-size:2.791vw;
font-weight:700;
`