import React from "react";
import styled from "styled-components";

export default function Button({text, background, textColor, borderColor, icon,click,width,type,disabled}) {
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
  box-shadow: 0px 6px 8px -2px rgba(0, 0, 0, 0.3);
  background-color: ${(props) => props.bgColor};
  border: ${(props) => props.border ? `1px solid ${props.border}` : "none"};
  &.disable{
    background-color:gray;
  }
  .text {
    font-family:YekanBakh;
    text-align:center;
    font-weight: 700;
    font-size: 3.721vw;
    color: ${(props) => props.color};
    margin:0 auto;
    padding:7px;
    display: flex;
    gap: 5px;
    &:after {
      content: "";
      display: ${props=>props.icon ? "inline-flex" :"none"} ;
      align-items:center;
      background-image: url(${(props) => props.icon});
      background-size: contain;
      background-repeat: no-repeat;
      width: 25px;
      height: 25px;
      
    }
  }
`;
