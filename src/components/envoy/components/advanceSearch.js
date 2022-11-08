import React, { useState } from "react";
import styled from "styled-components";
import icon from "../../../assets/down.png";
import arrow from "../../../assets/arrowUp.png";

const Container = styled.section`
  border: 1px solid #cbcbcb;
  border-radius: 4px;
  padding: 10px;
  margin-top: 10px;
  position: relative;
  &:after {
    content: "";
    width: 9px;
    height: 5px;
    left: 111px;
    top: 19px;
    display: block;
    position: absolute;
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

  @media (min-width: 480px) {
    width: 50.5%;
    margin: auto;
    margin-top: 25px;
    padding: 14px;
    border-radius: 8px;
    &:after {
      width: 15px;
      height: 9px;
      left: 345px;
      top: 27px;
    }

    .label {
      font-size: 1.25vw;
    }
  }
`;

const DropDown = styled.div`
  border: 1px solid #707070;
  border-radius: 2px;
  padding: 5px 15px;
  margin-bottom: 10px;
  position: relative;
  &:after {
    content: "";
    width: 9px;
    height: 5px;
    left: 15px;
    top: 13px;
    display: block;
    position: absolute;
    background-image: url(${icon});
    background-size: cover;
    background-repeat: no-repeat;
  }
  .label {
    color: #707070;
  }
  @media (min-width: 480px) {
    padding: 15px;
    border-radius: 4px;
    &:after {
      width: 15px;
      height: 9px;
      left: 23px;
      top: 26px;
    }
  }
`;

export default function AdvanceSearch() {
  const [open, setOpen] = useState(false);

  const handleOpen = (e) => {
    e.preventDefault();

    setOpen(!open);
  };

  return (
    <Container onClick={handleOpen} open={open}>
      <p className="label">{!open ? " جستجوی پیشرفته " : "جستجوی ساده"}</p>
      {open ? (
        <>
          <DropDown style={{ marginTop: "10px" }}>
            <p className="label">همۀ کمیسیون‌ها</p>
          </DropDown>
          <DropDown>
            <p className="label">همۀ حوزه‌ها</p>
          </DropDown>
          <DropDown>
            <p className="label">مرد و زن</p>
          </DropDown>
        </>
      ) : (
        ""
      )}
    </Container>
  );
}
