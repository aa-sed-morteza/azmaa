import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useUser } from "../../context/userContext";
import arrow from "../../../assets/arrow.webp";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BaseBackURL } from "../../../constant/api";
import { ChangeToPersianDate } from "../../../utils";

export default function EnvoyHistory({ id }) {
  const navigate = useNavigate();
  const { state, dispatch } = useUser();
  const [open, setOpen] = useState(false);
  const [experiences, setExperiences] = useState([]);

  const handleClick = () => {
    setOpen(!open);
  };

  const getEnvoyHistory = () => {
    let config = {
      method: "get",
      url: `${BaseBackURL}api/v1/accounts/member/${id}`,
    };

    axios(config)
      .then(function (res) {
        // console.log(JSON.stringify(res.data));

        setExperiences([...res.data.experiences]);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    getEnvoyHistory();
  }, []);

  return (
    <Container onClick={handleClick} className={open ? "active" : ""}>
      <Title>سوابق نماینده</Title>
      <History>
        {!open && (
          <p className="text">
            {experiences.length !== 0
              ? experiences[0].title +
                " " +
                "|" +
                " " +
                ChangeToPersianDate(experiences[0].from_date).slice(0, 4) +
                "-" +
                ChangeToPersianDate(experiences[0].to_date).slice(0, 4)
              : ""}{" "}
          </p>
        )}
        {/* <p className="text">{experiences[0][1] ?experiences[0][1].title :""} </p> */}
      </History>

      <Content className={open ? "open" : ""}>
        <History>
          {experiences.length !== 0 &&
            experiences.map((item, i) => {
              return (
                <p className="text" key={i}>
                  {" "}
                  {item.title +
                    " " +
                    "|" +
                    " " +
                    ChangeToPersianDate(item.from_date).slice(0, 4) +
                    "-" +
                    ChangeToPersianDate(item.to_date).slice(0, 4)}
                </p>
              );
            })}
        </History>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  border: 1px solid #cbcbcb;
  border-radius: 4px;
  padding: 0px 29px 20px;
  margin-top: 15px;
  &:after {
    content: "";
    display: block;
    position: absolute;
    background-image: url(${arrow});
    background-size: contain;
    background-repeat: no-repeat;
    width: 3.488vw;
    height: 2.326vw;
    left: 5.581vw;
    top: 50%;
  }
  &.active {
    &:after {
      animation-name: rotating;
      animation-duration: 2s;
      animation-fill-mode: forwards;
    }
  }

  @keyframes rotating {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(180deg);
    }
  }
  @media (min-width: 481px) {
    padding: 0 2.292vw 1.875vw !important;
    margin-top: 2.083vw;
    &:after {
      width: 1.042vw;
      height: 0.521vw;
      left: 1.823vw;
    }
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
  @media (min-width: 481px) {
    font-size: 1.875vw;
    transform: translateY(-60%);
    width: 60%;
    margin-right: -0.354vw;
    margin-bottom: -1.042vw;
  }
`;

const History = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.163vw;
  .text {
    color: #707070;
    margin: 0;
    font-weight: 700;
    font-size: 3.721vw;
  }
  @media (min-width: 481px) {
    gap: 0.781vw;
    .text {
      font-size: 1.25vw;
    }
  }
`;

const Content = styled.div`
  height: 0;
  opacity: 0;
  &.open {
    height: fit-content;
    opacity: 1;
    transition: all 1s ease-in-out;
  }
`;
