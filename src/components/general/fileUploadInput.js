import React from "react";
import styled from "styled-components";
import upload from "../../assets/upload.webp";

export default function FileUploadInput({ placeholder, value, onChange, id }) {
  return (
    <Container text={placeholder}>
      <input
        type="file"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        id={id}
      />
      <span></span>
    </Container>
  );
}

const Container = styled.div`
  border: 1px solid #9f9f9f;
  border-radius: 4px;
  padding: 7px;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    background-image: url(${upload});
    background-size: contain;
    background-repeat: no-repeat;
    width: 13px;
    height: 14px;
  }
  input {
    &::-webkit-file-upload-button {
      visibility: hidden;
    }
    &:before {
      content: "${(props) => props.text}";
      display: inline-block;
      color: #9f9f9f;
      text-align: center;
      outline: none;
      white-space: nowrap;
      -webkit-user-select: none;
      cursor: pointer;
      font-weight: 300;
      font-size: 3.721vw;
    }
  }
  input[type='file'] {
    color: rgba(0, 0, 0, 0);
    width: 40%;

  }    

`;
