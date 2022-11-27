import React, { useEffect, useState } from "react";
import styled from "styled-components";
import arrow from "../../../../../assets/arrow.webp";
import confirm from "../../../../../assets/ok.webp";
import disAgree from "../../../../../assets/disagree.webp";
import info from "../../../../../assets/not.webp";

export default function Suggest(props) {
  const [open, setOpen] = useState(false);
  const [color, setColor] = useState("");
  const [icon, setIcon] = useState([]);
  const [editButton, setEditButton] = useState("");
  const [firstIcon, setFirstIcon] = useState([]);
  const [secondIcon, setSecondIcon] = useState([]);

  const handdleClick = () => {
    setOpen(!open);
  };

  useEffect(() => {
    if (props.type === "تأییدشده") {
      setColor("#6CBBA9");
      setIcon(confirm);
      setEditButton("ویرایش درخواست");
      setFirstIcon(confirm);
      setSecondIcon(confirm);
    } else if (props.type === "تأییدنشده") {
      setColor("#FFA5A5");
      setIcon(disAgree);
      setFirstIcon(disAgree);
      setSecondIcon(info);
      setEditButton("بازنگری و ثبت مجدد");
    } else if (props.type === "دردست‌بررسی") {
      setColor("#D8D8D8");
      setEditButton("ویرایش فعالیت");
      setIcon(info);
      setFirstIcon(info);
      setSecondIcon(info);
    }
  }, []);

  return (
    <Wraper>
      <Container onClick={handdleClick} className={open ? "active" : ""}>
        <Header space={open}>
          <Type color={color} icon={icon}>
            {props.type}
          </Type>
          <Title>{props.title}</Title>
          <Date>{props.date}</Date>
        </Header>
      </Container>
      {open && (
        <>
          <Content supIcon={firstIcon} manIcon={secondIcon}>
            <p className="superviser">{props.superviser}</p>
            <p className="manager">{props.manager}</p>
          </Content>
          {props.type === "تأییدنشده" && (
            <Expand>
              <h4 className="title">توضیحات:</h4>
              <p className="expand">
                اسناد شما برای اثبات این مطلب کافی نبود. لطفاً مدارک خود را کامل
                کنید و دوباره بارگذاری کنید.{" "}
              </p>
            </Expand>
          )}
        </>
      )}
      <Edit className={props.type === "تأییدشده" ? "disabled" : ""}>
        <p className="text">{editButton}</p>
      </Edit>
    </Wraper>
  );
}

const Wraper = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 30px -5px rgba(0, 0, 0, 0.25);
  background-color: #ffffff;
  border-radius: 4px;
  padding: 22px 10px 14px;
`;

const Container = styled.div`
  padding-inline: 21px;
  position: relative;
  &:after {
    content: "";
    diplay: block;
    position: absolute;
    background-image: url(${arrow});
    background-size: contain;
    background-repeat: no-repeat;
    width: 3.488vw;
    height: 2.326vw;
    left: 5.581vw;
    top: 50%;
  }
  &.active {
    &:after {
      animation-name: rotating;
      animation-duration: 2s;
      animation-fill-mode: forwards;
    }
  }

  @keyframes rotating {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(180deg);
    }
  }
`;

const Header = styled.div`
  disaply: flex;
  flex-direction: column;
  gap: 7px;
  margin-bottom: ${(props) => (!props.space ? "30px" : "")};
`;

const Type = styled.p`
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: 400;
  font-size: 3.721vw;
  margin: 0;
  margin-bottom: 5px;
  color: ${(props) => props.color};
  &:before {
    content: "";
    display: inline-flex;
    width: 3.488vw;
    height: 3.488vw;
    background-image: url(${(props) => props.icon});
    background-size: contain;
    background-repeat: no-repeat;
  }
`;

const Title = styled.h2`
  color: #707070;
  font-weight: 400;
  font-size: 4.651vw;
  margin: 0;
`;

const Date = styled.p`
  margin: 0;
  color: rgba(0, 0, 0, 0.2);
  font-weight: 700;
  font-size: 2.791vw;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px 24px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  margin-bottom: 15px;
  margin-top: 15px;
  .superviser {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    color: #9f9f9f;
    font-weight: 700;
    font-size: 3.721vw;
    margin: 0;
    &:after {
      content: "ناظر";
      display: flex;
      color: rgba(0, 0, 0, 0.2);
      font-weight: 300;
      font-size: 3.721vw;
    }
    &:before {
      content: "";
      display: flex;
      width: 9.302vw;
      height: 9.302vw;
      background-image: url(${(props) => props.supIcon});
      background-size: contain;
      background-repeat: no-repeat;
    }
  }

  .manager {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    color: #9f9f9f;
    font-weight: 700;
    font-size: 3.721vw;
    &:after {
      content: "مدیر";
      display: flex;
      color: rgba(0, 0, 0, 0.2);
      font-weight: 300;
      font-size: 3.721vw;
    }
    &:before {
      content: "";
      display: flex;
      width: 9.302vw;
      height: 9.302vw;
      background-image: url(${(props) => props.manIcon});
      background-size: contain;
      background-repeat: no-repeat;
    }
  }
`;

const Edit = styled.div`
  border: 1px solid #095644;
  border-radius: 4px;
  padding: 7px;
  .text {
    margin: 0;
    text-align: center;
    color: #095644;
    font-weight: 400;
    font-size: 3.721vw;
  }
  &.disabled {
    border-color: #eaeaea;
    .text {
      color: #eaeaea;
    }
  }
`;

const Expand = styled.div`
  padding: 0px 14px 30px;
  .title {
    margin: 0;
    color: #707070;
    font-weight: 700;
    font-size: 3.721vw;
    margin-bottom: 5px;
  }
  .expand {
    margin: 0;
    color: #707070;
    font-weight: 300;
    font-size: 3.721vw;
  }
`;
