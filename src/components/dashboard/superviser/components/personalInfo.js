import React, { useState } from "react";
import styled from "styled-components";
import { useUser } from "../../../context/userContext";
import edit from "../../../../assets/left.svg";
import { useNavigate } from "react-router-dom";
import {toFarsiNumber} from "../../../../utils"

export default function PersonalInfo() {
  const navigate =useNavigate();
  const { state, dispatch } = useUser();


  return (
    <Container>
      <Edit onClick={()=>{navigate('edit-personal-info')}}></Edit>
      <Title >اطلاعات شخصی</Title>
      <Row>
        <p className="type">نام : </p>
        <p className="expand">{state.first_name}</p>
      </Row>
      <Row>
        <p className="type">نام خانوادگی : </p>
        <p className="expand">{state.last_name}</p>
      </Row>
      <Row>
        <p className="type"> محل تولد : </p>
        <p className="expand">{state.birth_place}</p>
      </Row>
      <Row>
        <p className="type"> تاریخ تولد: </p>
        <p className="expand">{state.birth_date}</p>
      </Row>
      <Row>
        <p className="type"> کد ملی: </p>
        <p className="expand">{toFarsiNumber(state.national_code) }</p>
      </Row>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  border: 1px solid #cbcbcb;
  border-radius: 4px;
  padding: 0px 29px 20px;
  margin-top: 15px;
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
    width: 27%;
    margin-right: 1.646vw;
    margin-bottom: -1.042vw;
  }
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 5px;
  .type {
    color: #9f9f9f;
    font-weight: 300;
    font-size: 3.721vw;
    margin: 0;
    padding-bottom: 5px;
  }
  .expand {
    color: #9f9f9f;
    font-weight: 700;
    font-size: 4.651vw;
    margin: 0;
    padding-right: 10px;
  }
  @media (min-width: 480px) {
    margin-bottom: 10px;
    align-items: center;
    gap: 10px;
    .type {
      padding-bottom: 0;
      font-size: 1.458vw;
    }
    .expand {
      font-size: 1.667vw;
    }
  }
`;

const Edit = styled.div`
  position: absolute;
  top: 50%;
  left: 5.885vw;
  height:2.326vw;
  width:1.163vw;
  background-repeat: no-repeat;
  background-image: url(${edit});
  background-size: contain;
  cursor: pointer;
`;
