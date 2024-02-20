import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useUser } from "../../../../../context/userContext";
import Document from "./components/document";
import SelectActionType from "./components/selectActionType";
import SelectEnvoys from "./components/selectEnvoys";
import VoteEnvoy from "./components/voteEnvoy";
import { useDispatch, useSelector } from "react-redux";
import { setactionlevel } from "../../../../../redux/slices/addActionLevelSlice";
import { setselectEnvoy } from "../../../../../redux/slices/setSelectEnvoySlice";

export default function NewAction() {
  const { state, dispatch } = useUser();
  const { title } = useParams();

  const dispatchRedux = useDispatch();
  const addActionLevel = useSelector(state => state.addActionLevel.addActionLevel);
  const selectEnvoy = useSelector(state => state.selectEnvoy.selectEnvoy);
  const userType = useSelector((state) => state.userType.userType);


  useEffect(() => {
    return () => {
      console.log("end");
      // dispatch({ type: "SET_ADD_ACT_LEVEL", payload: 1 });
      dispatchRedux(setactionlevel(1));
    };
  }, []);

  useEffect(() => {
    if (userType == "envoy") {
      // dispatch({ type: "SET_SELECT_ENVOUY", payload: state });
      dispatchRedux(setselectEnvoy(selectEnvoy));
    }
  }, []);

  const goNextLevel = () => {
    // dispatch({ type: "SET_ADD_ACT_LEVEL", payload: 3 });
    dispatchRedux(setactionlevel(3));
  };

  return (
    <Container>
      <Title>
        <p className="home">پنل / فعالیت ها /</p>
        <p className="component"> {title} </p>
      </Title>
      {addActionLevel === 1 && <SelectActionType />}
      {addActionLevel === 2 && (
        <>
          <SelectActionType />
          {userType == "parliament_member" ? goNextLevel() : <SelectEnvoys />}
        </>
      )}
      {addActionLevel === 3 && (
        <>
          <SelectActionType />
          {userType !== "parliament_member" && <SelectEnvoys />}
          <VoteEnvoy />
        </>
      )}
      {addActionLevel === 4 && (
        <>
          <SelectActionType />
          {userType !== "parliament_member" && <SelectEnvoys />}
          <VoteEnvoy />
          <Document />
        </>
      )}
    </Container>
  );
}

const Container = styled.section`
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  padding: 21vw 20px;
  overflow: hidden;
  @media (min-width: 480px) {
    background-color: #ffffff;
    padding: 25px 10% 0;
  }
`;

const Title = styled.div`
  display: flex;
  margin-bottom: 12px;
  padding-right: 10px;
  .home {
    font-size: 3.721vw;
    font-weight: 700;
    margin: 0;
    color: rgba(0, 0, 0, 0.2);
  }
  .component {
    font-size: 3.721vw;
    font-weight: 700;
    margin: 0;
    margin-right: 5px;
    color: rgba(112, 112, 112, 1);
  }
  @media (min-width: 480px) {
    margin-bottom: 25px;
    .home,
    .component {
      font-size: 1.25vw;
    }
  }
`;
