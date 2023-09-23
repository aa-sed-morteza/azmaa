import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useUser } from "../../context/userContext";

import { useDispatch, useSelector } from "react-redux";
import { timeout , notimeout } from "../../redux/slices/seTimOutSlice";


const Timer = ({ delayResend = "120" }) => {
  const { state, dispatch } = useUser();
  const [delay, setDelay] = useState(+delayResend);
  const minutes = Math.floor(delay / 60).toLocaleString("fa");
  const seconds = Math.floor(delay % 60).toLocaleString("fa");

  const istimeout = useSelector(state => state.istimeout.istimeout);
  const dispatchRedux = useDispatch();

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
      // dispatch({ type: "SET_TIME_OUT", payload: true });
      dispatchRedux(timeout());

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
  @media (min-width: 480px) {
    font-size: 1.563vw;
  }
`;
