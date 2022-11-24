import React from "react";
import styled from "styled-components";
import arrow from "../../assets/green-arrow.webp";

export default function Select({ label, background, options ,value,onChange,id}) {
  const option = options.map((x, i) => {
    return (
      <option value={x} key={i}>
        {x}
      </option>
    );
  });

  return (
    <Wraper text={label} back={background} >
      <Container value={value} onChange={onChange} id={id}>
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
`;
