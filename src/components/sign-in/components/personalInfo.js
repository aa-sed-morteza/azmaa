import React from "react";
import styled from "styled-components";
import CustomInput from "../../general/customInput";
import Button from "../../general/button";
import { useNavigate } from "react-router-dom";

export default function PersonalInformation() {
  const navigate =useNavigate();

  return (
    <>
    <Container>
      <Title>۱. اطلاعات شخصی خود را بنویسید:</Title>
      <Form>
        <CustomInput label="نام" back="#ffffff" />
        <CustomInput label="نام خانوادگی" back="#ffffff" />
        <CustomInput label="محل تولد" back="#ffffff" />
        <CustomInput label="کد ملی" back="#ffffff" />
        <CustomInput label="تاریخ تولد" back="#ffffff" />
      </Form>
    </Container>
    <Box>
        <Button
          text="لغو"
          textColor="#095644"
          borderColor="#095644"
          width="35%"
          click={()=>{navigate('/')}}
        />
        <Button
          text="ثبت"
          textColor="#FFFFFF"
          background= "#095644"
          width="62%"
          // click={()=>{setStep(step +1)}}
        />
      </Box>
    </>
  );
}

const Container = styled.div`
  background: #ffffff;
  border-radius: 4px;
  padding: 14px 10px 11px;
`;
const Title = styled.h2`
  padding-right: 36px;
  margin: 0;
  color: #9f9f9f;
  font-size: 4.651vw;
  font-weight: 300;
  margin-bottom: 10px;
`;

const Form =styled.form`
  display:flex;
  flex-direction:column;
  gap:15px;
`
const Box = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 15px;
`;