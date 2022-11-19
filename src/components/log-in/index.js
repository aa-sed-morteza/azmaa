import React from "react";
import styled from "styled-components";
import wellcome from "../../assets/welcome.png";
import Button from "../general/button";
import login from "../../assets/log.png";
import signin from "../../assets/signin.png"
import CustomInput from "../general/customInput";
import profile from "../../assets/profile.png";
import lock from "../../assets/lock.png";
import { useNavigate } from "react-router-dom";

export default function LogIn() {
  const navigate =useNavigate();
  return (
    <Container>
      <Content>
        <Header></Header>
        <Form>
          <CustomInput label="نام کاربری" icon={profile} back="#f5f5f5"/>
          <CustomInput label="رمز عبور" icon={lock} back="#f5f5f5"/>
        </Form>
        <Button
          text="ورود"
          background="#095644"
          borderColor="inherit"
          textColor="#FFFFFF"
          icon={login}
        />
        <Button
          text="ثبت‌نام"
          background="#inherit"
          borderColor="#095644"
          textColor="#095644"
          icon={signin}
          click={()=>{navigate('/sign-in')}}
        />
        <Link>رمز عبور خود را فراموش کرده‌اید؟</Link>
      </Content>
    </Container>
  );
}

const Container = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  jusctify-content: center;
  overflow:hidden;

`;

const Content = styled.div`
  margin: auto;
  width: 86%;
  display:flex;
  flex-direction:column;
  gap:15px;
  align-items:center;
`;

const Header = styled.div`
  background-image: url(${wellcome});
  background-size: contain;
  background-repeat: no-repeat;
  width: 192px;
  height: 41px;
  margin-bottom: 4px;
`;

const Form = styled.form`
  width:100%;
  display:flex;
  flex-direction:column;
  gap:15px;
`;

const Link = styled.p`
  margin:0;
  color:#FFAA00;
  font-weight:300;
  font-size:3.721vw;
`;


