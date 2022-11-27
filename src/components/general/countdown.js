import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useUser } from "../context/userContext";

const Timer = ({ delayResend = "120" }) => {
  const { state, dispatch } = useUser();
  const [delay, setDelay] = useState(+delayResend);
  const minutes = Math.floor(delay / 60).toLocaleString("fa");
  const seconds = Math.floor(delay % 60).toLocaleString("fa");

  useEffect(() => {
    const timer = setInterval(() => {
      setDelay(delay - 1);
    }, 1000);

    if (delay === 0) {
      clearInterval(timer);
    }

    return () => {
      clearInterval(timer);
    };
  });

  useEffect(() => {
    if (delay === 0) {
      dispatch({ type: "SET_TIME_OUT", payload: true });
    }
  }, [delay === 0]);

  return (
    <>
      <Swatch>
        {minutes}:{seconds}
      </Swatch>
    </>
  );
};

export default Timer;

const Swatch = styled.div`
  color: #ff5a5a;
  font-size: 5.581vw;
  font-weight: 300;
  margin: auto;
`;
