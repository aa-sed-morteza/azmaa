
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import edit from "../../../../assets/left.svg";
import { useUser } from "../../../../context/userContext";
import {  useDispatch, useSelector } from "react-redux";
import { setFraction } from "../../../../redux/slices/CommisionSlice";
import axios from "axios";


export default function CommissinInfo() {
  // const { state, dispatch } = useUser();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
    const envoyList = useSelector((state) => state.envoy.envoyListToShow);


  
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {  
  //       const response = await axios.get("https://azmaa-back.iran.liara.run/api/v1/fraction/");
  //       const data = response.data;
  //       console.log(data);
  //       let list = [];
  //       for(const item of data) {
  //         if(!list.includes(item.name)) {
  //           list.push(item.name)
  //         }
  //       }
        
        
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };
  //   fetchData();
  // }, []); 
  const userdata = useSelector(state => state.userdata);
  console.log(userdata)
  return (
    <Container>
      <Edit
        onClick={() => {
          navigate("edit-commission-info");
        }}
      ></Edit>
      <Title> کمیسیون مورد نظر</Title>
      <Row>
      {userdata && userdata.fraction ? (
    <p className="text">{userdata.fraction}</p>
  ) : (
    <p className="text"> کمیسیونی انتخاب نشده</p>
  )}
      </Row>
    </Container>
  );
}

const Container = styled.div`
  border: 1px solid #cbcbcb;
  border-radius: 4px;
  padding: 0px 29px 20px;
  margin-top: 15px;
  position: relative;

  @media (min-width: 480px) {
    padding: 0 2.292vw 1.875vw;
    margin-top: 2.083vw;
  }
`;

const Title = styled.h4`
  font-weight: 300;
  font-size: 4.651vw;
  color: #9f9f9f;
  transform: translateY(-63%);
  background: #ffffff;
  width: 40%;
  margin: 0;
  text-align: center;
  margin-right: -5%;
  white-space: nowrap;
  @media (min-width: 480px) {
    font-size: 1.875vw;
    transform: translateY(-60%);
    width: 21%;
    margin-right: 1.646vw;
    margin-bottom: -1.042vw;
  }
`;

const Row = styled.div`
  .text {
    margin: 0;
    padding: 0;
    color: #9f9f9f;
    font-weight: 700;
    font-size: 4.651vw;
  }
  @media (min-width: 480px) {
    .text {
      margin: 0;
      padding: 0;
      color: #9f9f9f;
      font-weight: 700;
      font-size: 2vw;
    }
  }
`;

const Edit = styled.div`
  position: absolute;
  top: 50%;
  left: 5.885vw;
  height: 4vw;
  width: 2vw;
  transform: translate(0%, -50%);
  background-repeat: no-repeat;
  background-image: url(${edit});
  background-size: contain;
  cursor: pointer;
  @media (min-width: 480px) {
    width: 1.2vw;
    height: 1.2vw;
  }
`;