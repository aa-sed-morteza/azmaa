import React, { useState } from "react";
import styled from "styled-components";
import { useUser } from "../../../context/userContext";
import edit from "../../../../assets/left.svg";
import { useNavigate } from "react-router-dom";
import box from "../../../../assets/state.svg";
import {toFarsiNumber} from "../../../../utils"

export default function EnvoyState() {
  const navigate = useNavigate();
  const { state, dispatch } = useUser();

  return (
    <Container>
      <Edit
        onClick={() => {
          navigate("edit-envoy-state");
        }}
      ></Edit>
      <Title>حوزۀ انتخابیه</Title>
      <State>
        <span></span>
        <div className="content">
          {state.electoral_district &&  <p className="title">{state.electoral_district.name  }</p>}
         
          <p className="persentage">درصد آراء: ۳۵٪</p>
        </div>
      </State>

      <Row>
        <p className="type"> تعداد آراء: </p>
        <p className="expand">{toFarsiNumber(state.vote_number) }</p>
      </Row>
      <Row>
        <p className="type"> تعداد کل آراء صندوق : </p>
        <p className="expand">۸۰۶۹۸</p>
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
  height: 2.326vw;
  width: 1.163vw;
  background-repeat: no-repeat;
  background-image: url(${edit});
  background-size: contain;
  cursor: pointer;
`;

const State = styled.div`
  display: flex;
  align-items: center;
  gap: 4.651vw;
  margin-bottom:4.186vw;
  span {
    background-repeat: no-repeat;
    background-image: url(${box});
    background-size: contain;
    width: 16.279vw;
    height: 18.372vw;
  }
  .content {
    .title {
      margin: 0;
      padding: 0;
      font-size: 4.651vw;
      font-weight: 400;
      color: #707070;
    }
    .persentage {
      margin: 0;
      padding: 0;
      color: #6cbba9;
      font-weight: 400;
      font-size: 3.256vw;
    }
  }
`;
