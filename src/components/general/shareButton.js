import React, { useState } from "react";
import { RWebShare } from "react-web-share";
import styled from "styled-components";

const ShareButton = ({ title, text, right }) => {
  const url = window.location.href;

  return (
    <RWebShare
      data={{
        text: text,
        url: url,
        title: title,
      }}
      onClick={() => console.log("shared successfully!")}
      className="custom"
    >
      <SmallButton right={right}>
        <p className="content">بازنشر</p>
      </SmallButton>
    </RWebShare>
  );
};

export default ShareButton;

const SmallButton = styled.div`
  width: 20%;
  background-color: #ffffff;
  border: 1px solid #095644;
  border-radius: 4px;
  display: flex;
  padding: 5px;
  margin-right: ${(props) => (props.right ? "auto" : "")};
  cursor: pointer;
  .content {
    margin: 0 auto;
    font-size: 4vw;
    font-weight: 300;
    color: #095644;
  }
  @media (min-width: 481px) {
    border-radius: 8px;
    padding: 10px;
    .content {
      font-size: 1.25vw;
      margin: auto;
    }
  }
`;
