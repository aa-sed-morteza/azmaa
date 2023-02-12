import React, { useState } from "react";
import styled from "styled-components";
import PersonalInformation from "./components/personalInfo";
import SetPassword from "./components/setPassword";
import Button from "../general/button";
import Contacts from "./components/contacts";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/userContext";


export default function SignIn() {
  const { state, dispatch } = useUser();
  const [step, setStep] = useState(0);
  const navigate  =useNavigate();

  return (
    <Container>
      <Title>
        <p className="home">پنل / </p>
        <p className="component"> ثبت نام </p>
      </Title>
      
      {state.signInLevel === 1 && <PersonalInformation />}
      {state.signInLevel === 2 && <><PersonalInformation /><Contacts/></>}
      
     
      

    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 20px;
`;

const Title = styled.div`
  display: flex;
  margin-bottom: 12px;
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
    margin-bottom: 25px;
    padding-right: 10%;
    .home,
    .component {
      font-size: 1.25vw;
    }
  }
`;


