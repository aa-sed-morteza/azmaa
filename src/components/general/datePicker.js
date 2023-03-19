import React, { useEffect } from "react";
import styled from "styled-components";
import DatePicker from "react-multi-date-picker";
import persian_fa from "react-date-object/locales/persian_fa";
import persian from "react-date-object/calendars/persian";
import transition from "react-element-popper/animations/transition";

export default function CustomDatePicker({
  label,
  background,
  icon,
  placeholder,
  id,
  value,
  onChange,
}) {
  const language = "fa";
  return (
    <Container text={label} back={background} icon={icon}>
      <DatePicker
        inputClass="custom-input"
        animations={[
          transition({
            from: 35,
            transition: "all 400ms cubic-bezier(0.335, 0.010, 0.030, 1.360)",
          }),
        ]}
        calendar={persian}
        locale={persian_fa}
        format={language === "en" ? "MM/DD/YYYY" : "YYYY/MM/DD"}
        calendarPosition="top-center"
        placeholder={placeholder}
        id={id}
        value={value}
        onChange={(val) => {
          
          onChange(id, `${val.year}-${val.month}-${val.day}`);
        }}
      />
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  &:before {
    content: "${(props) => props.text}";
    display: flex;
    font-size: 3.721vw;
    font-weight: 400;
    position: absolute;
    right: 40px;
    top: -25%;
    color: #6cbba9;
    background: ${(props) => props.back};
    transform: scale(.6);
  }
  &:after {
    content: "";
    position: absolute;
    background-image: url(${(props) => props.icon});
    background-size: contain;
    background-repeat: no-repeat;
    width: 22px;
    height: 22px;
    left: 18px;
    top: 8px;
  }
  .rmdp-container {
    width: 94.5%;
  }
  .custom-input {
    width: 100%;
    border: 1px solid #6cbba9;
    border-radius: 4px;
    padding: 10px;
    color: #6cbba9;
    font-weight: 400;
    font-size: 3.721vw;
    text-align: center;
    &::focus {
      outline: none;
      border: 1px solid #0c8af8;
      box-shadow: 0 0 10px 2px #0074d9;
    }
    &::placeholder {
      color: #6cbba9;
      font-weight: 400;
      font-size: 3.721vw;
    }
  }
  @media (min-width: 480px) {
    &:before {
      font-size: 1.25vw;
      top: -30%;
    }
    &:after {
      width:1.563vw;
      height:1.563vw;
      top:0.677vw;
    }
    .rmdp-container {
      width: 97%;
    }
    .custom-input {
      font-size: 1.25vw;
      padding: 0.885vw;
      &::placeholder {
        font-size: 1.25vw;
      }
    }
  }
`;

const CustomPicker = styled(DatePicker)``;
