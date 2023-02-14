import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import edit from "../../../../assets/left.svg";
import { useUser } from "../../../context/userContext";
import {toFarsiNumber} from "../../../../utils"


export default function LogInInfo() {
  const {state,dispatch}=useUser();
  const navigate =useNavigate();
  return (
    <Container>
       <Edit onClick={()=>{navigate('edit-log-info')}}></Edit>
      <Title> اطلاعات ورود</Title>
      <Row>
        <p className="type">نام کاربری : </p>
        <p className="expand">{toFarsiNumber(state.userName) }</p>
      </Row>
      <Row>
        <p className="type">رمز ورود: </p>
        <input type="password" className="expand" value={state.password}/>
      </Row>
    </Container>
  );
}

const Container = styled.div`
  border: 1px solid #cbcbcb;
  border-radius: 4px;
  padding: 0px 29px 20px;
  margin-top:15px;
  position:relative;

  @media (min-width: 480px) {
    padding:0 2.292vw 1.875vw ;
    margin-top: 2.083vw;
  }
`;

const Title = styled.h4`
  font-weight: 300;
  font-size: 4.651vw;
  color: #9f9f9f;
  transform: translateY(-16px);
  background: #ffffff;
  width: 40%;
  margin: 0;
  text-align: center;
  margin-right: -5%;
  @media (min-width: 480px) {
    font-size: 1.875vw;
    transform: translateY(-1.615vw);
    width: 21%;
    margin-right:1.646vw;
    margin-bottom:-1.042vw;
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
    border:none;
    outline:none;
    pointer-events: none;
  }
  @media (min-width: 480px) {
    margin-bottom:10px;
    gap: 10px;
    .type{
      font-size:1.458vw;
      padding-bottom:0;
    }
    .expand {
      font-size: 1.667vw;
      color:#FFA5A5;
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
