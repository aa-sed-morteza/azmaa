import React from "react";
import styled from "styled-components";
import pic from "../../../assets/yazdan.webp";

export default function Profile() {
  return (
    <Container>
      <Content>
        <Image>
          <img src={pic} alt="profile-picture" />
        </Image>
        <Label>
          <p className="title">ناظر نمایندگان</p>
          <p className="name">سید مرتضی یزدان‌پرست</p>
          <p className="edit">ویرایش تصویر</p>
        </Label>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  background: #f3f3f3;
  margin-inline: -30%;
  margin-top: -19%;
  padding: 18px;
  @media (min-width: 480px) {
    margin: 0;
    background: inherit;
    margin-top: 5px;
    padding: 2.083vw 1.563vw;
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  @media (min-width: 480px) {
    justify-content: flex-start;
    gap: 20px;
  }
`;

const Image = styled.div`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  border: 4px solid #095644;
  box-shadow: 0px 6px 5px -3px rgba(0, 0, 0, 0.25);
  img {
    width: 100%;
    height: 100%;
    border-radius: 100%;
    object-fit: contain;
  }
  @media (min-width: 480px) {
    width: 7.292vw;
    height: 7.552vw;
    padding: 4px;
    img {
      object-fit: cover;
    }
  }
`;

const Label = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  .title {
    margin: 0;
    color: #707070;
    font-size: 2.791vw;
    font-weight: 300;
  }
  .name {
    margin: 0;
    color: #707070;
    font-weight: 700;
    font-size: 5.581vw;
  }
  .edit {
    display: none;
  }
  @media (min-width: 480px) {
    .title {
      font-size: 1.042vw;
      color: #095644;
    }
    .name {
      font-size: 1.667vw;
    }
    .edit {
      display: block;
      color: #ffaa00;
      font-weight: 400;
      font-size: 1.25vw;
      margin:0;
    }
  }
`;
