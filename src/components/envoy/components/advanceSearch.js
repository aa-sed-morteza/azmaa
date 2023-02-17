import React, { useState } from "react";
import styled from "styled-components";
import icon from "../../../assets/down.webp";
import arrow from "../../../assets/arrowUp.webp";

export default function AdvanceSearch() {
  const [open, setOpen] = useState(false);
  const [commission, setCommission] = useState(false);
  const [commissionText, setCommissionText] = useState("همۀ کمیسیون‌ها");
  const [area, setArea] = useState(false);
  const [areaText, setAreaText] = useState("همۀ حوزه‌ها");
  const [sex, setSex] = useState(false);
  const [sexText, setSexText] = useState("مرد و زن");

  const handleOpen = (e) => {
    e.preventDefault();
    setOpen(!open);
  };

  const checkCommission = (e) => {
    setCommissionText(e.target.innerHTML);
    setCommission(false);
  };

  const checkArea = (e) => {
    setAreaText(e.target.innerHTML);
    setArea(false);
  };

  const checkSex = (e) => {
    setSexText(e.target.innerHTML);
    setSex(false);
  };

  return (
    <Container open={open}>
      <SearchButton onClick={handleOpen}>
        <p className="label">{!open ? " جستجوی پیشرفته " : "جستجوی ساده"}</p>
      </SearchButton>

      {open ? (
        <>
          <Items style={{ marginTop: "10px" }}>
            <DropDown
              onClick={() => {
                setCommission(!commission);
              }}
            >
              <p className="label">{commissionText}</p>
            </DropDown>
            {commission && (
              <>
                <Item onClick={checkCommission}>ورزش</Item>
                <Item onClick={checkCommission}>سلامت وبهداشت</Item>
                <Item onClick={checkCommission}>امنیت ملی</Item>
              </>
            )}
          </Items>
          <Items>
            <DropDown
              onClick={() => {
                setArea(!area);
              }}
            >
              <p className="label">{areaText} </p>
            </DropDown>
            {area && (
              <>
                <Item onClick={checkArea}>غرب</Item>
                <Item onClick={checkArea}>شرق</Item>
                <Item onClick={checkArea}>شمال</Item>
              </>
            )}
          </Items>
          <Items>
            <DropDown
              onClick={() => {
                setSex(!sex);
              }}
            >
              <p className="label">{sexText} </p>
            </DropDown>
            {sex && (
              <>
                <Item onClick={checkSex}>مرد</Item>
                <Item onClick={checkSex}>زن</Item>
              </>
            )}
          </Items>
        </>
      ) : (
        ""
      )}
    </Container>
  );
}

const Container = styled.section`
  border: 1px solid #cbcbcb;
  border-radius: 4px;
  padding: 10px;
  margin-top: 10px;

  @media (min-width: 481px) {
    width: 50.5%;
    margin: auto;
    margin-top: 25px;
    padding: 14px;
    border-radius: 8px;
  }
`;

const SearchButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.521vw;
  cursor: pointer;
  &:after {
    content: "";
    width: 9px;
    height: 5px;
    display: inline-flex;
    background-image: url(${(props) => (props.open ? arrow : icon)});
    background-size: cover;
    background-repeat: no-repeat;
  }
  .label {
    font-size: 3.72vw;
    text-align: center;
    margin: 0;
    color: #9f9f9f;
  }
  @media (min-width: 481px) {
    &:after {
      width: 15px;
      height: 9px;
    }

    .label {
      font-size: 1.25vw;
    }
  }
`;

const DropDown = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  &:after {
    content: "";
    width: 9px;
    height: 5px;
    display: inline-flex;
    background-image: url(${icon});
    background-size: cover;
    background-repeat: no-repeat;
    margin-right: auto;
  }
  .label {
    color: #707070;
    margin: 0;
    margin-right: auto;
  }
  @media (min-width: 481px) {
    padding: 15px;
    border-radius: 4px;
    &:after {
      width: 15px;
      height: 9px;
    }
  }
`;

const Items = styled.div`
  border: 1px solid #707070;
  border-radius: 2px;
  padding: 5px 15px;
  margin-bottom: 10px;
  cursor: pointer;
`;

const Item = styled.div`
  border: 1px solid #707070;
  border-radius: 2px;
  padding: 5px 15px;
  margin-bottom: 10px;
  text-align: center;
`;
