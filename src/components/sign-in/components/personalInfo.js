import React from "react";
import styled from "styled-components";
import CustomInput from "../../general/customInput";

export default function PersonalInformation() {
  return (
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
