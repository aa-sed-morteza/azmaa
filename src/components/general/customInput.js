import React, { useState } from "react";
import styled from "styled-components";
import show from "../../assets/show.png";
import hide from "../../assets/hide.png";

export default function CustomInput({
  type,
  label,
  icon,
  back,
  value,
  onChange,
  id,
  show,
  dir,
}) {
  const [showPass, setShowPass] = useState(false);

  return (
    <Container icon={icon} text={label} back={back} type={type} show={showPass}>
      <span></span>
      {type == "textarea" ? (
        <textarea
          className="text-input"
          type={type}
          value={value}
          onChange={onChange}
          id={id}
          rows="4"
          cols="100"
        ></textarea>
      ) : (
        <input
          value={value}
          onChange={onChange}
          id={id}
          type={showPass ? "text" : type}
          dir={dir}
        />
      )}
      {show && (
        <div
          className="show-password"
          onClick={() => {
            setShowPass(!showPass);
          }}
        ></div>
      )}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  max-width: 371px;
  display: flex;
  position: relative;
  border: 1px solid #cbcbcb;
  border-radius: 4px;
  &:before {
    content: "${(props) => props.text}";
    display: flex;
    font-size: 3.721vw;
    font-weight: 400;
    position: absolute;
    right: 40px;
    top: ${(props) => (props.type === "textarea" ? "-12%" : "-25%")};
    color: #707070;
    background: ${(props) => props.back};
    transform: scale(0.6);
  }
  span {
    position: absolute;
    background-image: url(${(props) => props.icon});
    background-size: contain;
    background-repeat: no-repeat;
    width: 20px;
    height: 20px;
    right: 8px;
    top: 8px;
  }
  .show-password {
    width: 20px;
    height: 20px;
    background-image: ${(props) =>
      props.show ? `url(${show})` : `url(${hide})`};
    background-repeat: no-repeat;
    background-size: contain;
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translate(0%, -50%);
  }
  input {
    outline: none;
    border: none;
    color: #707070;
    padding: 10px;
    font-weight: 400;
    font-size: 3.721vw;
    width: 100%;
    background: inherit;
    border-radius: 4px;
    padding-right: 40px;
    height: ${(props) => (props.type === "textarea" ? "80px" : "")};
  }
  .text-input {
    resize:none;
    outline: none;
    border: none;
    padding: 10px;
    font-weight: 400;
    font-size: 3.721vw;
  }
  @media (min-width: 480px) {
    max-width: none;
    &:before {
      font-size: 1.25vw;
      top: ${(props) => (props.type === "textarea" ? "-12%" : "-30%")};
    }
    span {
      width: 1.563vw;
      height: 1.563vw;
      right: 0.781vw;
      top: 0.781vw;
    }
    input,
    .text-input {
      font-size: 1.25vw;
      padding: 0.885vw;
      padding-right: 3.125vw;
    }
  }
`;
