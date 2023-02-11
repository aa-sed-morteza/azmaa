import React, { useEffect, useState } from "react";
import styled from "styled-components";

export default function SelectNumber({
  value,
  onChange,
  label,
  background,
  id,
  name,
}) {
  const [voteNumber, setVoteNumver] = useState(value);

  return (
    <Container text={label} back={background}>
      <span
        className="Decrease"
        onClick={() => {
          setVoteNumver(voteNumber - 1);
        }}
      >
        -
      </span>
      <input
        className="result"
        value={value}
        onChange={onChange}
        id={id}
        name={name}
      />
      <span
        className="Increase"
        onClick={() => {
          setVoteNumver(voteNumber + 1);
        }}
      >
        +
      </span>
    </Container>
  );
}

const Container = styled.div`
  //   width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border: 1px solid #6cbba9;
  border-radius: 4px;
  position: relative;
  &:before {
    content: "${(props) => props.text}";
    display: flex;
    font-size: 3.721vw;
    font-weight: 400;
    position: absolute;
    right: 40px;
    top: -13px;
    color: #6cbba9;
    background: ${(props) => props.back};
  }
  .Increase,
  .Decrease {
    color: #6cbba9;
    font-weight: 300;
    font-size: 4.651vw;
  }
  .result {
    width: fit-content;
    border: none;
    text-align: center;
  }
  @media (min-width: 480px) {
    // font-size: 1.25vw;
    padding: 0.885vw;
    &:before {
      font-size: 1.25vw;
      top: -1.042vw;
    }
    .Increase,
    .Decrease {
      font-size: 1.563vw;
    }
  }
`;
