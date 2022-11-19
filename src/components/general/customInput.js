import React, { useState } from "react";
import styled from "styled-components";

export default function CustomInput({ type, label, icon ,back,value,onChange,id}) {
  return (
    <Container icon={icon} text={label} back={back}>
      <span></span>
      <input type={type}  value={value}  onChange={onChange} id={id}/>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  max-width: 371px;
  display: flex;
  position: relative;
  border: 1px solid #cbcbcb;
  border-radius: 4px;
  &:before {
    content: "${(props) => props.text}";
    display: flex;
    font-size: 3.721vw;
    font-weight: 400;
    position: absolute;
    right: 40px;
    top: -13px;
    color: #707070;
    background: ${props=>props.back}  ;
  }
  span {
    position: absolute;
    background-image: url(${(props) => props.icon});
    background-size: contain;
    background-repeat: no-repeat;
    width: 20px;
    height: 20px;
    right: 8px;
    top: 8px;
  }
  input {
    outline: none;
    border: none;
    color: #707070;
    padding: 10px;
    font-weight: 400;
    font-size: 3.721vw;
    width: 100%;
    background: inherit;
    border-radius: 4px;
    padding-right: 40px;
  }
`;
