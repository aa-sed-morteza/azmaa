import React from "react";
import styled from "styled-components";
import background from "../../../assets/back-controll.webp";


const Container = styled.div`
  background-image: url(${background});
  background-size: cover;
  background-repeat: no-repeat;
  padding: 19px;
  border-radius: 4px;
  margin-top:10px;
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
      font-family: FontAwesome;
      
    }
  }
  @media(min-width:481px){
    width: 48%;
    display:flex;
    margin:auto;
    padding:20px;
    // margin-left:10%;
  
    input{
      font-size:1.563vw;
      padding: 10px;
      margin:auto;
      width:90%;
    }
  }
  @media(min-width:769px){
    padding:41px 34px;
    input{
      padding: 18px;    
    }
  
`;

export default function Search() {
  return (
    <Container>
      <input type="text"  placeholder="&#xF002; جستجو کن..."/>      
    </Container>
  );
}
