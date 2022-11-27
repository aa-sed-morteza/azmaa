import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import background from "../../../../assets/back-controll.webp";
import confirm from "../../../../assets/confirm.svg";
import activeConfirm from "../../../../assets/active-confirm.svg";
import failed from "../../../../assets/failed.svg";
import activeFailed from "../../../../assets/active-failed.svg";
import invalid from "../../../../assets/invalid.svg";
import activeInvalid from "../../../../assets/active-invalid.svg";
import Suggest from "../components/suggest";

export default function MySuggest() {
  const navigate = useNavigate();
  const [select, setSelect] = useState(1);
  return (
    <Container>
      <Title>
        <p className="home">پنل / </p>
        <p className="component"> درخواست ها </p>
      </Title>
      <Wraper>
        <AddnewAction
          onClick={() => {
            navigate("درخواست جدید");
          }}
        >
          <p className="text">ثبت درخواست جدید</p>
        </AddnewAction>
        <Filtering>
          <input placeholder="جستجو کن..." />
          <Items>
            <Item
              onClick={() => {
                setSelect(1);
              }}
              className={select == 1 ? "active" : ""}
            >
              همه
            </Item>
            <Item
              icon={select == 2 ? activeConfirm : confirm}
              onClick={() => {
                setSelect(2);
              }}
              className={select == 2 ? "active" : ""}
            >
              تأییدشده
            </Item>
            <Item
              icon={select == 3 ? activeFailed : failed}
              onClick={() => {
                setSelect(3);
              }}
              className={select == 3 ? "active" : ""}
            >
              تأییدنشده
            </Item>
            <Item
              icon={select == 4 ? activeInvalid : invalid}
              onClick={() => {
                setSelect(4);
              }}
              className={select == 4 ? "active" : ""}
            >
              دردست‌بررسی
            </Item>
          </Items>
        </Filtering>
        {select === 1 && (
          <>
            <Suggest
              type="تأییدشده"
              title="ویرایش نام کاربری"
              date="۲۹ اسفند ۱۴۰۰"
              superviser="مرتضی یزدان‌پرست"
              manager="سید یزدان حبیبی"
            />
            <Suggest
              type="تأییدنشده"
              title="ثبت مطلب جدید"
              date="۲۹ اسفند ۱۴۰۰"
              superviser="مرتضی یزدان‌پرست"
              manager="سید یزدان حبیبی"
            />
            <Suggest
              type="دردست‌بررسی"
              title="ثبت فعالیت جدید"
              date="۲۹ اسفند ۱۴۰۰"
              superviser="مرتضی یزدان‌پرست"
              manager="سید یزدان حبیبی"
            />
          </>
        )}
        {select == 2 && (
          <Suggest
            type="تأییدشده"
            title="ویرایش نام کاربری"
            date="۲۹ اسفند ۱۴۰۰"
            superviser="مرتضی یزدان‌پرست"
            manager="سید یزدان حبیبی"
          />
        )}
        {select == 3 && (
          <Suggest
            type="تأییدنشده"
            title="ثبت مطلب جدید"
            date="۲۹ اسفند ۱۴۰۰"
            superviser="مرتضی یزدان‌پرست"
            manager="سید یزدان حبیبی"
          />
        )}
        {select == 4 && (
          <Suggest
            type="دردست‌بررسی"
            title="ثبت فعالیت جدید"
            date="۲۹ اسفند ۱۴۰۰"
            superviser="مرتضی یزدان‌پرست"
            manager="سید یزدان حبیبی"
          />
        )}
      </Wraper>
    </Container>
  );
}

const Container = styled.section`
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  padding: 10px;
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

const Wraper = styled.div`
  background-color: #ffffff;
  border-radius: 4px;
  padding: 12px 9px 13px 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const AddnewAction = styled.div`
  background-color: #ffaa00;
  box-shadow: 0px 6px 8px -2px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  padding: 4px;
  .text {
    margin: 0;
    color: #ffffff;
    font-weight: 700;
    font-size: 3.721vw;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    &:before {
      content: "+";
      display: inline-flex;
      align-items: center;
      font-size: 4.651vw;
      font-weight: 500;
      color: #ffffff;
    }
  }
`;

const Filtering = styled.div`
  padding: 19px 19px 12px 21px;
  border-radius: 4px;
  background-image: url(${background});
  background-size: cover;
  background-repeat: no-repeat;
  input {
    width: 94%;
    font-size: 3.721vw;
    padding: 9px;
    font-weight: 400;
    margin-bottom: 13px;
    &::placeholder {
      color: #d8d8d8;
    }
  }
`;

const Items = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
const Item = styled.p`
  color: #dff5f0;
  margin: 0;
  padding: 0;
  font-size: 3.721vw;
  font-weight: 300;
  padding-top: 10.465vw;
  position: relative;
  &.active {
    font-weight: 700;
    &:after {
      content: "";
      display: block;
      position: absolute;
      width: 100%;
      height: 3px;
      background-color: #dff5f0;
      right: 0;
      bottom: -12px;
    }
  }
  &:before {
    content: "";
    display: block;
    position: absolute;
    background-image: url(${(props) => props.icon});
    background-size: contain;
    background-repeat: no-repeat;
    width: 9.302vw;
    height: 9.302vw;
    top: 0;
    right: 8px;
  }
`;
