import React from "react";
import styled from "styled-components";
import CustomDatePicker from "../../general/datePicker";
import calendar from "../../../assets/calendar.webp";
import CustomInput from "../../general/customInput";

export default function DutieForm({ id, value, onChange,errors,touched,setDate }) {
 
  return (
    <Form>
      <CustomInput
        label={`سابقه${id}`}
        back="#FFFFFF"
        type="textarea"
        value={value.dutie}
        onChange={onChange}
        id="dutie"
      />
      {errors.dutie && touched.dutie && <ErrorText>{errors.dutie}</ErrorText>}

      <CustomDatePicker
        label="از تاریخ "
        background="#FFFFFF"
        icon={calendar}
        placeholder="انتخاب کنید"
        id="dateFrom"
        value={value.dateFrom}
        onChange={setDate}
      />
        {errors.dateFrom && touched.dateFrom && <ErrorText>{errors.dateFrom}</ErrorText>}
      <CustomDatePicker
        label="تا تاریخ "
        background="#FFFFFF"
        icon={calendar}
        placeholder="انتخاب کنید"
        id="dateTo"
        value={value.dateTo}
        onChange={setDate}
      />
        {errors.dateTo && touched.dateTo && <ErrorText>{errors.dateTo}</ErrorText>}
    </Form>
  );
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ErrorText = styled.p`
  color: #fc8181;
  font-size: 0.75rem;
  width: 100%;
  text-align: right;
  margin: 0;
  margin-right: 2%;
  margin-top: 2%;
  @media(min-width:480px){
    margin-top:0;
    font-size:1.042vw;
  }
`;
