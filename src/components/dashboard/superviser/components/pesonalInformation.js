import React from "react";
import styled from "styled-components";
import pic from "../../../../assets/yazdan.webp";
import { useUser } from "../../../context/userContext";
import ContactInfo from "./contactInfo";
import LogInInfo from "./logInInfo";
import PersonalInfo from "./personalInfo";

export default function PersonalInformation() {
  const {state,dispatch}=useUser();
  
  return (
    <Container>
      <Content>
        <Image>
          <img src={pic} alt="profile-picture" />
        </Image>
        <Label>
          <p className="title">ناظر نمایندگان</p>
          <p className="name">{`${state.firstName}   ${state.lastName}`}</p>
          <p className="edit">ویرایش تصویر</p>
        </Label>
      </Content>
      <PersonalInfo />
      <LogInInfo />
      <ContactInfo />
      <Edit>
        <p className="text">ویرایش حساب کاربری</p>
      </Edit>
    </Container>
  );
}

const Container = styled.div`
  background: #ffffff;
  border-radius: 4px;
  padding: 24px 10px 16px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  @media(min-width:480px){
    padding:0;
  }

`;

const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding-right: 10px;
  @media(min-width:480px){
    display:none;
  }
`;

const Image = styled.div`
  width: 90px;
  height: 90px;
  border-radius: 90px;
  border: 4px solid #707070;
  box-shadow: 0px 6px 5px -3px rgba(0, 0, 0, 0.25);
  img {
    width: 100%;
    height: 100%;
    border-radius: 100%;
    object-fit: contain;
  }
`;

const Label = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
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
    margin: 0;
    color: #ffaa00;
    font-weight: 400;
    font-size: 3.256vw;
  }
`;

const Edit = styled.div`
  border: 1px solid #095644;
  border-radius: 4px;
  padding: 7px;
  .text {
    text-align: center;
    margin: 0;
    font-weight: 300;
    font-size: 3.721vw;
    color: #095644;
  }
  @media(min-width:480px){
    display:none;
  }
`;
