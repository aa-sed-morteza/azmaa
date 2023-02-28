import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import edit from "../../../../assets/left.svg";
import { useUser } from "../../../context/userContext";
import axios from "axios";
import { BaseBackURL } from "../../../../constant/api";

export default function HistoryEnvoy() {
  const { state, dispatch } = useUser();
  const [hisroty, setHistory] = useState(state.experiences);
  const navigate = useNavigate();

  const refreshToken = () => {
    const data = new FormData();
    data.append("refresh", state.refreshToken);

    let config = {
      method: "post",
      url: `${BaseBackURL}api/token/refresh/`,
      headers: {
        Authorization: `Bearer ${state.token}`,
      },
      data: data,
    };

    axios(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        dispatch({ type: "SET_TOKEN", payload: response.data.access });
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const getExpriences = () => {
    let config = {
      method: "get",
      url: `${BaseBackURL}api/v1/accounts/experiences/`,
      headers: {
        Authorization: `Bearer ${state.token}`,
      },
    };

    axios(config)
      .then((res) => {
        console.log(JSON.stringify(res.data));
        dispatch({ type: "SET_USER_DATA", payload: { ...res.data } });
        setHistory([...res.data])
       
      })
      .catch((error) => {
        console.log("sagError", error);
        if (error.response.status == 401) {
          refreshToken();
        }
      });
  };

  useEffect(()=>{
    getExpriences();
  },[state.token])

  return (
    <Container>
      <Edit
        onClick={() => {
          navigate("edit-history-info");
        }}
      ></Edit>
      <Title>سوابق نماینده</Title>
      <Row>
        {hisroty  && hisroty.map((item, i) => {
          return <p className="text-history">{item.title}</p>;
        })}
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
  .text-history {
    margin: 0;
    padding: 0;
    color: #9f9f9f;
    font-weight: 700;
    font-size: 1.2vw;
  }
`;

const Edit = styled.div`
  position: absolute;
  top: 50%;
  left: 5.885vw;
  height: 2.326vw;
  width: 1.163vw;
  transform: translate(0%,-50%);
  background-repeat: no-repeat;
  background-image: url(${edit});
  background-size: contain;
  cursor: pointer;
  @media (min-width: 480px){
    width: 1.042vw;
    height: 0.521vw;
  }
`;
