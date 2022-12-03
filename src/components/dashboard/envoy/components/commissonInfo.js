import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import edit from "../../../../assets/left.svg";
import { useUser } from "../../../context/userContext";


export default function CommissinInfo() {
  const {state,dispatch}=useUser();
  const navigate =useNavigate();
  return (
    <Container>
       <Edit onClick={()=>{navigate('edit-commission-info')}}></Edit>
      <Title> کمیسیون</Title>
      <Row>
        <p className="text">{state.commission}</p>
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
.text{
    margin:0;
    padding:0;
    color: #9F9F9F;
    font-weight:700;
    font-size:4.651vw;
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
`;
