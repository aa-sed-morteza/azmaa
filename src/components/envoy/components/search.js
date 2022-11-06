import React from "react";
import styled from "styled-components";
import background from "../../../assets/back-controll.png";

const Container = styled.div`
  background-image: url(${background});
  background-size: cover;
  background-repeat: no-repeat;
  padding: 19px;
  border-radius: 4px;
  input {
    width:95%;
    background: #ffffff;
    outline: none;
    padding: 7px 8px;
    border-radius: 2px;
    border: none;
    font-size: 3.72vw;
    font-weight:400;
    font-family: FontAwesome;
    ::placeholder{
      color:#D8D8D8;
      
    }
  }
`;

export default function Search() {
  return (
    <Container>
      <input type="text"  placeholder="&#xF002; جستجو کن..."/>
    </Container>
  );
}
