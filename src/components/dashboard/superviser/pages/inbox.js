import React, { useState } from "react";
import styled from "styled-components";
import background from "../../../../assets/back-controll.webp";
import confirm from "../../../../assets/confirm.svg";
import activeConfirm from "../../../../assets/active-confirm.svg";
import failed from "../../../../assets/failed.svg";
import activeFailed from "../../../../assets/active-failed.svg";
import invalid from "../../../../assets/invalid.svg";
import activeInvalid from "../../../../assets/active-invalid.svg";
import InboxItem from "../components/inbox/inboxItem";

export default function Inbox() {
  const [select, setSelect] = useState(1);

  const envoys = [
    {
      name: "علیرضا پاکفطرت",
      state: "دماوند و فیروزکوه",
      commission: "امنیت ملی",
      img: "../../assets/ali.webp",
      persantage: "75",
      id: "1",
      action: "موافق",
    },
    {
      name: "یوسف داوودی سراب",
      state: "دماوند و فیروزکوه",
      commission: "امنیت ملی",
      img: "../../assets/jafi.webp",
      persantage: "25",
      id: "2",
      action: "مخالف",
    },
    {
      name: "مهدی اسماعیلی",
      state: "دماوند و فیروزکوه",
      commission: "امنیت ملی",
      img: "../../assets/abol.webp",
      persantage: "95",
      id: "3",
      action: "ممتنع",
    },
  ];

  const envoys_second = [
    {
      name: "علیرضا پاکفطرت",
      state: "دماوند و فیروزکوه",
      commission: "امنیت ملی",
      img: "../../assets/ali.webp",
      persantage: "75",
      id: "1",
      action: "همراه",
    },
    {
      name: "یوسف داوودی سراب",
      state: "دماوند و فیروزکوه",
      commission: "امنیت ملی",
      img: "../../assets/jafi.webp",
      persantage: "25",
      id: "2",
      action: "همراه",
    },
    {
      name: "مهدی اسماعیلی",
      state: "دماوند و فیروزکوه",
      commission: "امنیت ملی",
      img: "../../assets/abol.webp",
      persantage: "95",
      id: "3",
      action: "ناهمراه",
    },
  ];

  return (
    <Container>
      <Title>
        <p className="home">پنل / </p>
        <p className="component"> صندوق </p>
      </Title>

      <Wraper>
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
              icon={select == 2 ? activeInvalid : invalid}
              onClick={() => {
                setSelect(2);
              }}
              className={select == 2 ? "active" : ""}
            >
              دردست‌بررسی
            </Item>
            <Item
              icon={select == 3 ? activeConfirm : confirm}
              onClick={() => {
                setSelect(3);
              }}
              className={select == 3 ? "active" : ""}
            >
              تأییدشده
            </Item>
            <Item
              icon={select == 4 ? activeFailed : failed}
              onClick={() => {
                setSelect(4);
              }}
              className={select == 4 ? "active" : ""}
            >
              تأییدنشده
            </Item>
          </Items>
        </Filtering>
        {select == 1 && (
          <>
            <InboxItem
              type="دردست‌بررسی"
              title="ثبت فعالیت جدید"
              creator=" سید مرتضی یزدان‌پرست"
              date="۲۹ اسفند ۱۴۰۰"
              detailType="vote"
              detailDate="۲۹ اسفند ۱۴۰۰"
              detailTitle="کلیات لایحۀ بودجۀ سال ۱۴۰۱"
              envoys={envoys}
            />

            <InboxItem
              type="دردست‌بررسی"
              title="ثبت فعالیت جدید"
              creator=" سید مرتضی یزدان‌پرست"
              date="۲۹ اسفند ۱۴۰۰"
              detailType="action"
              detailTitle="تحویل خودرو دنا پلاس"
              detailDate="۲۹ اسفند ۱۴۰۰"
              envoys={envoys_second}
            />
          </>
        )}
        {select == 2 && (
          <>
            <InboxItem
              type="دردست‌بررسی"
              title="ثبت فعالیت جدید"
              creator=" سید مرتضی یزدان‌پرست"
              date="۲۹ اسفند ۱۴۰۰"
              detailType="vote"
              detailDate="۲۹ اسفند ۱۴۰۰"
              detailTitle="کلیات لایحۀ بودجۀ سال ۱۴۰۱"
              envoys={envoys}
            />

            <InboxItem
              type="دردست‌بررسی"
              title="ثبت فعالیت جدید"
              creator=" سید مرتضی یزدان‌پرست"
              date="۲۹ اسفند ۱۴۰۰"
              detailType="action"
              detailTitle="تحویل خودرو دنا پلاس"
              detailDate="۲۹ اسفند ۱۴۰۰"
              envoys={envoys_second}
            />
          </>
        )}
        {select == 3 && ""}
        {select == 4 && ""}
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
    left: 50%;
    transform: translate(-50%, 0%);
  }
`;
