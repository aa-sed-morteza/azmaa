import React from "react";
import styled from "styled-components";
import arrow from "../../assets/green-arrow.webp";

export default function Select({
  label,
  background,
  options,
  value,
  onChange,
  id,
  white
}) {
  const option = options.map((x, i) => {
    return (
      <option value={x} key={i}>
        {x}
      </option>
    );
  });

  return (
    <Wraper text={label} back={background}>
      <Container value={value} onChange={onChange} id={id} white={white}>
        <option value="" disabled selected hidden>
          انتخاب کنید
        </option>
        {option}
      </Container>
    </Wraper>
  );
}

const Wraper = styled.div`
  width: 100%;
  position: relative;
  &:after {
    content: "";
    display: block;
    position: absolute;
    background-image: url(${arrow});
    background-size: cover;
    background-repeat: no-repeat;
    width: 12px;
    height: 7px;
    left: 15px;
    top: 15px;
  }
  &:before {
    content: "${(props) => props.text}";
    display: flex;
    font-size: 3.721vw;
    font-weight: 400;
    position: absolute;
    right: 40px;
    top: -13px;
    color: #6cbba9;
    background: ${(props) => (props.back ? props.back : "#F5F5F5")};
  }
  @media (min-width: 480px) {
    &:after {
      width: 1.302vw;
      height: 0.781vw;
      top: 50%;
      left: 1.302vw;
      transform:translate(0,-50%);
    }
    &:before {
      font-size: 1.25vw;
      top: -1.042vw;
    }
  }
`;

const Container = styled.select`
  width: 100%;
  border-color: #6cbba9;
  border-radius: 4px;
  outline: none;
  padding: 10px;
  text-align: center;
  color: #6cbba9;
  font-size: 3.721vw;
  font-weight: 400;
  appearance: none;
  background-color: ${props=>props.white ? '#F5F5F5':''};
  @media (min-width: 480px) {
    font-size: 1.25vw;
    padding: 0.885vw;
  }
`;
