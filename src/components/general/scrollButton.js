import React, { useEffect, useState } from "react";
import styled from "styled-components";
import scroll from "../../assets/scroll.svg";

export default function ScrollButton({ container }) {
 
  const [active,setActive]=useState(false);

  const scroll = (scrollOffset) => {
    const root = document.getElementById(container);
    root.scrollLeft += scrollOffset;
    setActive(true);
  };

 

  return (
    <Container>
      <Left className={active?"active":""} onClick={() => {scroll(300)}}></Left>
      <Right className="active" onClick={() => {scroll(-300)}}></Right>
    </Container>
  );
}

const Container = styled.div`
  display: none;
  @media (min-width: 481px) {
    position: absolute;
    width: 72%;
    display: flex;
    justify-content: space-between;
    left: 20px;
    top: 50%;
    transform: translate(0, -50%);
    z-index: 1000;
  }
  @media(min-width:769px){
    width:67%;
  }
`;

const Right = styled.div`
  &.active{
    width: 3.125vw;
    height: 3.125vw;
    border-radius: 3.125vw;
    background-image: url(${scroll});
    background-size: contain;
    background-repeat: no-repeat;
    margin-left: 10%;
  }
 
`;

const Left = styled(Right)`

  transform: rotate(180deg);
  margin: 0;

`;
