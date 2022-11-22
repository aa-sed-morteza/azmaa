import React, { useState } from "react";
import styled from "styled-components";
import data from "../../../../data.json";
import user from "../../../../assets/profile.png";
import upArrow from "../../../../assets/arrow.png";
import { useNavigate } from "react-router-dom";


export default function SectionRoom() {
  const [select, setSelect] = useState();
  const navigate =useNavigate();

  const magPaper = data.magazine.map((x, i) => {
    return (
      <Paper onClick={()=>{navigate(`${x.content}`)}} key={i}>
        <div className="cover" >
          <img src={x.img} alt={x.date} />
        </div>

        <p className="user">{x.name}</p>

        <p className="content">{x.content}</p>

        <p className="date">{x.date}</p>
      </Paper>
    );
  });
  return (
    <Container>
      <AddSection onClick={()=>{navigate("مطلب جدید")}}>
        <p className="text">ثبت مطلب جدید</p>
      </AddSection>
      <FilterBox>
        <FilterItem
          onClick={() => {
            setSelect(1);
          }}
          className={select === 1 ? "select" : ""}
        >
          جدیدترین
        </FilterItem>
        <FilterItem
          onClick={() => {
            setSelect(2);
          }}
          className={select === 2 ? "select" : ""}
        >
          قدیمی‌ترین
        </FilterItem>
        <FilterItem
          onClick={() => {
            setSelect(3);
          }}
          className={select === 3 ? "select" : ""}
        >
          پربازدیدترین
        </FilterItem>
        <FilterItem
          onClick={() => {
            setSelect(4);
          }}
          className={select === 4 ? "select" : ""}
        >
          محبوب‌ترین
        </FilterItem>
      </FilterBox>
      <CardContainer>{magPaper}</CardContainer>
      <ShowMore>
              <p>نمایش بیشتر</p>
            </ShowMore>
    </Container>
  );
}

const Container = styled.section`
  background-color: #ffffff;
  border-radius: 4px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const AddSection = styled.div`
  background-color: #ffaa00;
  box-shadow: 0px 6px 8px -2px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  padding: 4px;
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
`;

const FilterBox = styled.div`
  border: 1px solid #cbcbcb;
  border-radius: 4px;
  padding: 8px;
  display: flex;
  gap: 10px;
  @media (min-width: 480px) {
    max-width: 1080px;
    margin: auto;
    padding: 10px 13px;
    margin-top: 60px;
    margin-bottom: 45px;
  }
`;

const FilterItem = styled.p`
  background-color: #ffffff;
  color: #9f9f9f;
  font-size: 3.721vw;
  font-weight: 300;
  border-radius: 2px;
  margin: 0;
  padding: 5px 7px;
  &.select {
    background-color: #707070;
    color: #ffffff;
    font-weight: 700;
  }
  @media (min-width: 480px) {
    font-size: 1.25vw;
    font-weight: 700;
    width: 254px;
    text-align: center;
  }
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
`;

const Paper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 10px 14px 10px;
  background: #ffffff;
  box-shadow: 0px 0px 25px -5px rgba(0, 0, 0, 0.25);
  border-radius: 4px;

  .cover {
    width: 160px;
    height: 120px;
    border-radius: 2px;
    margin-bottom: 5px;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  .user {
    margin: 0;
    color: #707070;
    font-weight: 300;
    font-size: 3.72vw;
    padding-right: 20px;
    position: relative;
    margin-bottom: 10px;
    &:before {
      content: "";
      display: flex;
      position: absolute;
      background-image: url(${user});
      background-size: cover;
      background-repeat: no-repeat;
      width: 15px;
      height: 15px;
      right: 2px;
      top: 5px;
    }
  }
  .content {
    color: #707070;
    font-size: 3.72vw;
    font-weight: 400;
    margin: 0;
    margin-bottom: 10px;
    max-width: 160px;
  }

  .date {
    color: rgba(0, 0, 0, 0.2);
    font-size: 3.25vw;
    font-weight: bold;
    margin: 0;
  }

  &:nth-child(5) {
    display: none;
  }

  @media (min-width: 480px) {
    padding: 20px 19px 25px 19px;
    box-shadow: 0px 0px 30px -5px rgba(0, 0, 0, 0.3);
    border-radius: 8px;
    .cover {
      width: 330px;
      height: 253px;
      border-radius: 4px;
      margin-bottom: 18px;
    }
    .user {
      font-size: 1.042vw;
      margin-bottom: 36px;
      padding-right: 30px;
      &:before {
        width: 20px;
        height: 20px;
      }
    }
    .content {
      font-size: 1.25vw;
      margin-bottom: 36px;
      max-width: 306px;
    }
    .date {
      font-size: 1.042vw;
      font-weight: 500;
    }
  }
`;


const ShowMore = styled.div`
  border: 1px solid #9f9f9f;
  border-radius: 4px;
  display: flex;
  padding: 8px;
  margin-top: 16px;
  p {
    margin: auto;
    color: #9f9f9f;
    font-size: 4.65vw;
    position: relative;
    font-weight: 300;
    &:after {
      content: "";
      display: flex;
      position: absolute;
      left: -25px;
      bottom: 8px;
      background-image: url(${upArrow});
      background-size: cover;
      background-repeat: no-repeat;
      width: 9px;
      height: 5px;
    }
  }

  @media (min-width: 480px) {
    border: 2px solid #9f9f9f;
    border-radius: 8px;
    max-width: 500px;
    justify-content: center;
    align-items: center;
    margin: auto;
    padding: 13px;
    margin-top:78px;
    p {
      font-size: 1.25vw;
      font-weight: 400;
      &:after {
        width: 15px;
        height: 8px;
        left: -37px;
      }
    }
  }
`;