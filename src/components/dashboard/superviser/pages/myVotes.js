import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import background from "../../../../assets/back-controll.webp";
import vote from "../../../../assets/vote-light.webp";
import voteAction from "../../../../assets/vote-active.webp";
import action from "../../../../assets/act-light.webp";
import ActionCard from "../components/actions/actionCard";
import pic from "../../../../assets/vote-logo.webp";
import icon from "../../../../assets/vote.webp";
import pic2 from "../../../../assets/action-rate.webp";
import title from "../../../../assets/title.svg";
import { useUser } from "../../../context/userContext";
import axios from "axios";
import { BaseBackURL } from "../../../../constant/api";

export default function MyVotes() {
  const { state, dispatch } = useUser();
  const navigate = useNavigate();
  const [select, setSelect] = useState(1);
  const [bills, setBills] = useState([]);
  const [activities, setActivities] = useState([]);
  const [envoys, setEnvoys] = useState([]);

  const billVoteUnconfirmed = () => {
    let config = {
      method: "get",
      url: `${BaseBackURL}api/v1/bill/`,
      headers: {
        Authorization: `Bearer ${state.token}`,
      },
    };

    axios(config)
      .then((res) => {
        // console.log(res.data);
        if (res.data.length > 0) {
          setBills(res.data.filter((x) => x.voter.id === state.id));
        }
      })
      .catch((err) => {
        if (err.response.status === 401) {
          // refreshToken();
        }
      });
  };

  useEffect(() => {
    billVoteUnconfirmed();
    // activityVoteUnconfirmed();
  }, [state.token]);

  return (
    <Container>
      <Title>
        <p className="home">پنل / </p>
        <p className="component"> رأی‌گیری‌ها </p>
      </Title>
      <Wraper>
        <AddnewAction
          onClick={() => {
            navigate("رأی‌گیری  جدید");
          }}
        >
          <p className="text">ثبت رأی‌گیری جدید</p>
        </AddnewAction>
        <Filtering>
          <input placeholder="جستجو کن..." />
        </Filtering>
        <ActionGallery>
          <GalleryTitle>آخرین رأی‌گیری‌های من</GalleryTitle>
          {bills.length === 0 ? (
            <p style={{ margin: "0px" }}>
              در حال حاضر برای شما موردی ثبت نشده است.
            </p>
          ) : (
            <div>
              {bills.map((item, i) => (
                <ActionCard
                  img={pic}
                  titr="رأی‌گیری"
                  title={item.bill}
                  date="?"
                  icon={icon}
                  envoys={item.voter}
                  action={item.vote}
                />
              ))}
            </div>
          )}
        </ActionGallery>
      </Wraper>
    </Container>
  );
}

const Container = styled.section`
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  padding: 10px 20px;
  overflow: hidden;
  @media (min-width: 480px) {
    background-color: #f5f5f5;
    padding: 0;
  }
`;

const Title = styled.div`
  display: flex;
  margin-bottom: 12px;
  padding-right: 10px;
  .home {
    font-size: 3.721vw;
    font-weight: 700;
    margin: 0;
    color: rgba(0, 0, 0, 0.2);
  }
  .component {
    font-size: 3.721vw;
    font-weight: 700;
    margin: 0;
    color: rgba(112, 112, 112, 1);
  }
  @media (min-width: 480px) {
    display: none;
  }
`;

const Wraper = styled.div`
  background-color: #ffffff;
  border-radius: 4px;
  padding: 12px 9px 13px 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  @media (min-width: 480px) {
    padding: 0;
    background-color: #f5f5f5;
    gap: 1.302vw;
  }
`;

const AddnewAction = styled.div`
  background-color: #ffaa00;
  box-shadow: 0px 6px 8px -2px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  padding: 4px;
  cursor: pointer;
  .text {
    margin: 0;
    color: #ffffff;
    font-weight: 700;
    font-size: 3.721vw;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    &:before {
      content: "+";
      display: inline-flex;
      align-items: center;
      font-size: 4.651vw;
      font-weight: 500;
      color: #ffffff;
    }
  }
  @media (min-width: 480px) {
    box-shadow: 0px 6px 8px -2px rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    padding: 0.052vw;
    width: 26%;
    .text {
      font-size: 1.25vw;
      &:before {
        font-size: 2vw;
      }
    }
  }
`;

const Filtering = styled.div`
  padding: 19px 19px 12px 21px;
  border-radius: 4px;
  background-image: url(${background});
  background-size: cover;
  background-repeat: no-repeat;
  input {
    width: 94%;
    font-size: 3.721vw;
    padding: 9px;
    font-weight: 400;
    margin-bottom: 13px;
    &::placeholder {
      color: #d8d8d8;
    }
  }
  @media (min-width: 480px) {
    width: 74%;
    padding: 2.292vw 2.604vw 0.885vw;
    input {
      width: 97%;
      font-size: 1.563vw;
      margin-bottom: 1.563vw;
    }
  }
`;

const Items = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  @media (min-width: 480px) {
    gap: 6.406vw;
  }
`;
const Item = styled.p`
  color: #dff5f0;
  margin: 0;
  padding: 0;
  font-size: 3.721vw;
  font-weight: 300;
  padding-top: 35px;
  position: relative;
  cursor: pointer;
  &.active {
    font-weight: 700;
    &:after {
      content: "";
      display: block;
      position: absolute;
      width: 100%;
      height: 3px;
      background-color: #dff5f0;
      right: 0;
      bottom: -12px;
    }
  }
  &:before {
    content: "";
    display: flex;
    position: absolute;
    background-image: url(${(props) => props.icon});
    background-size: contain;
    background-repeat: no-repeat;
    width: 35px;
    height: 35px;
    top: 0;
    left: 50%;
    transform: translate(-50%, 0%);
  }
  &:nth-child(3) {
    &:before {
      top: 9px;
    }
  }
  @media (min-width: 480px) {
    font-size: 1.458vw;
    &:after {
      height: 5px !important;
      bottom: -0.885vw !important;
    }
    &:before {
      /* right: 35px; */
    }
  }
`;

const ActionGallery = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  @media (min-width: 480px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 1.302vw 1.302vw 2.604vw 6.667vw;
    background-color: #ffffff;
    border-radius: 0px 8px 8px 0px;
  }
`;

const GalleryTitle = styled.h2`
  display: none;
  @media (min-width: 480px) {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 20px;
    color: #707070;
    font-weight: 300;
    font-size: 1.875vw;
    margin: 0;
    margin-bottom: 1.302vw;
    &:before {
      content: "";
      display: flex;
      width: 1.25vw;
      height: 1.719vw;
      background-image: url(${title});
      background-size: contain;
      background-repeat: no-repeat;
    }
  }
`;
