import React from "react";
import styled from "styled-components";
import CustomInput from "../../general/customInput";

export default function Contacts() {
  return (
    <Container>
      <Title>۳. اطلاعات تماس خود را بنویسید:</Title>
      <Form>
        <CustomInput label="شمارۀ همراه" back="#ffffff" />
        <CustomInput label=" ایمیل" back="#ffffff" />
        <CustomInput label=" نشانی" back="#ffffff" />
        <CustomInput label=" شمارۀ ثابت" back="#ffffff" />
      </Form>
    </Container>
  );
}

const Container = styled.div`
  background: #ffffff;
  border-radius: 4px;
  padding: 14px 10px 11px;
  margin-top:15px;
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
