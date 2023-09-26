import React, { useEffect, useState } from "react";
import styled from "styled-components";
import IranMap from "../../iranMap";
import arrow from "../../../assets/ggArrow.svg";
import { useUser } from "../../../context/userContext";
import SelectCity from "../../iranMap/components/selectCity";
import { useSelector } from "react-redux";

export default function SelectState() {
  const { state, dispatch } = useUser();
  const [input, setInput] = useState("استان خود را انتخاب کنید");

  const mapLevel = useSelector(state => state.mapLevel.mapLevel);
  const provinceSearch = useSelector(state => state.provinceSearch.provinceSearch);
  const citySearch = useSelector(state => state.citySearch.citySearch);




  useEffect(() => {
    if (mapLevel == 2) {
      setInput("حوزۀ انتخابی خود را انتخاب کنید");
    }
  }, [mapLevel]);

  return (
    <StateContainer>
      {mapLevel == 2 && (
        <p className="select">
          ایران <span>{provinceSearch.name}</span>
        </p>
      )}
      {ma == 3 && (
        <p className="select">
          ایران <span>{provinceSearch.name}</span>{" "}
          <span>{citySearch.name}</span>
        </p>
      )}

      {mapLevel !== 3 && <p className="input">{input}</p>}

      <div className="map">
        {mapLevel === 1 && <IranMap />}
        {mapLevel === 2 && <SelectCity />}
        {mapLevel === 3 && <h1>tamam</h1>}
      </div>
    </StateContainer>
  );
}

const StateContainer = styled.section`
  border: 1px solid black;
  border-radius: 4px;
  position: relative;
  .input {
    display: flex;
    align-items: center;
    margin: 0;
    padding: 0;
    padding-right: 9.07vw;
    color: #095644;
    font-weight: 500;
    font-size: 3.721vw;
    &:after {
      content: "";
      display: inline-flex;
      background-image: url(${arrow});
      background-repeat: no-repeat;
      background-size: contain;
      width: 2.326vw;
      height: 1.163vw;
    }
  }

  .select {
    margin: 0;
    padding-top: 2.093vw;
    padding-right: 11.395vw;
    color: #ffaa00;
    font-weight: 300;
    font-size: 5.581vw;
    display: flex;
    gap: 5px;
    align-items: center;
    span {
      font-weight: 500;
      display: flex;
      align-items: center;
      &:before {
        content: ">";
        display: inline-flex;
        color: #fab732;
        font-size: 6.977vw;
        font-weight: 300;
        padding-left: 5px;
      }
    }
  }
  @media (min-width: 480px) {
    position: absolute;
    top: 14%;
    left: 8%;
    width: 46%;
    background-color: rgba(255, 255, 255, 0.5);
    .map {
      width: 100%;
      img {
        width: 100%;
        height: auto;
      }
    }
  }
`;
