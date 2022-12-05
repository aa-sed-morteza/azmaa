import React, { useState } from "react";
import { RWebShare } from "react-web-share";
import styled from "styled-components";

const ShareButton = ({title,text}) => {
  const url = window.location.href;

  return (
    <RWebShare
      data={{
        text: text,
        url: url,
        title: title,
      }}
      onClick={() => console.log("shared successfully!")}
    >
      <SmallButton><p className="content">بازنشر</p></SmallButton>
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
  .content {
    margin: 0 auto;
    font-size: 4.65vw;
    font-weight: 300;
    color: #095644;
  }
  @media (min-width: 480px) {
    border-radius: 8px;
    padding: 10px;
    .content {
      font-size: 1.25vw;
      margin: auto;
    }
  }
`;
