import React from "react";
import styled from "styled-components";

export default function Button({text, background, textColor, borderColor, icon,click,width,type,disabled,simple}) {
  return (
    <Container
      bgColor={background}
      color={textColor}
      border={borderColor}
      icon={icon}
      onClick={click}
      width={width}
      type={type}
      disabled={disabled}
      className={disabled ? 'disable' : ""}
      simple={simple}
    >
      <p className="text">{text}</p>
    </Container>
  );
}

const Container = styled.button`
  width:${props=>props.width ? props.width : '100%'};
  max-width: 371px;
  display: flex;
  justifu-content: center;
  border-radius: 4px;
  box-shadow:${props=>props.simple ? '' :'0px 6px 8px -2px rgba(0, 0, 0, 0.3)'}  ;
  background-color: ${(props) => props.bgColor};
  border: ${(props) => props.border ? `1px solid ${props.border}` : "none"};
  cursor:pointer;
  &.disable{
    background-color:gray;
  }
  .text {
    font-family:YekanBakh;
    display: flex;
    align-items:center;
    text-align:center;
    font-weight: 700;
    font-size: 3.721vw;
    color: ${(props) => props.color};
    margin:0 auto;
    padding:7px;
    
    gap: 5px;
    &:after {
      content: "";
      display: ${props=>props.icon ? "inline-flex" :"none"} ;
      background-image: url(${(props) => props.icon});
      background-size: contain;
      background-repeat: no-repeat;
      width: 25px;
      height: 25px;
      
    }
  }
  @media(min-width:480px){
    .text{
      font-size:1.250vw;
      font-weight:400;
    }
  }
`;
