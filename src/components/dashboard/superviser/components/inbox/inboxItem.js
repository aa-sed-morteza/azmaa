import React, { useEffect, useState } from "react";
import styled from "styled-components";
import arrow from "../../../../../assets/arrow.webp";
import confirm from "../../../../../assets/ok.webp";
import disAgree from "../../../../../assets/disagree.webp";
import info from "../../../../../assets/not.webp";
import Button from "../../../../general/button";
import voteIcon from "../../../../../assets/vote.webp";
import symbol from "../../../../../assets/vote-logo.webp";
import actionsymbol from "../../../../../assets/action-rate.webp";
import action from "../../../../../assets/act.webp";
import SecondEnvoyCard from "../actions/secondEnvoyCard";

export default function InboxItem(props) {
  const [open, setOpen] = useState(false);
  const [color, setColor] = useState("");
  const [icon, setIcon] = useState([]);
  const [envoys, setEnvoys] = useState([]);

  useEffect(() => {
    if (props.envoys) {
      setEnvoys(props.envoys);
    }
  }, []);

  const EnvoyGallery = envoys.map((x, i) => {
    return (
      <SecondEnvoyCard
        key={i}
        name={x.name}
        state={x.state}
        commission={x.commission}
        img={x.img}
        persantage={x.persantage}
        id={x.id}
        action={x.action}
      />
    );
  });

  const handdleClick = () => {
    setOpen(!open);
  };

  useEffect(() => {
    if (props.type === "تأییدشده") {
      setColor("#6CBBA9");
      setIcon(confirm);
    } else if (props.type === "تأییدنشده") {
      setColor("#FFA5A5");
      setIcon(disAgree);
    } else if (props.type === "دردست‌بررسی") {
      setColor("#D8D8D8");
      setIcon(info);
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
          <Creator>
            ازطرف <span>{props.creator}</span>
          </Creator>
          <Date>{props.date}</Date>
        </Header>
      </Container>
      {open && (
        <>
          {props.detailType == "vote" && (
            <Content>
              <VoteCard>
                <div className="symbol"></div>
                <div className="content">
                  <p className="titr">رأی‌گیری</p>
                  <h2 className="title">{props.detailTitle}</h2>
                  <p className="date">{props.detailDate}</p>
                </div>
              </VoteCard>
              {EnvoyGallery}
            </Content>
          )}

          {props.detailType == "action" && (
            <Content>
              <ActionCard>
                <div className="symbol"></div>
                <div className="content">
                  <p className="titr">دیدگاه ها</p>
                  <h2 className="title">{props.detailTitle}</h2>
                  <p className="date">{props.detailDate}</p>
                </div>
              </ActionCard>
              {EnvoyGallery}
            </Content>
          )}
        </>
      )}
      <ButtonWraper>
        <Button
          text="تأیید درخواست"
          textColor="#FFFFFF"
          background="#095644"
          width="46%"
        />
        <Button
          text="رد درخواست"
          textColor="#095644"
          borderColor="#095644"
          width="46%"
        />
      </ButtonWraper>
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
  @media (min-width: 480px) {
    padding: 0;
    border-radius: 8px;
    width: 48%;
    height: fit-content;
    box-shadow: 0px 0px 30px -5px rgba(0, 0, 0, 0.15);
  }
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
  @media (min-width: 480px) {
    padding: 0;
    &:after {
      width: 0.521vw;
      height: 0.26vw;
      left: 3.385vw;
    }
  }
`;

const Header = styled.div`
  disaply: flex;
  flex-direction: column;
  gap: 7px;
  margin-bottom: ${(props) => (!props.space ? "30px" : "")};
  @media (min-width: 480px) {
    padding: 1.563vw 2.604vw;
    gap: 0.521vw;
  }
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
  @media (min-width: 480px) {
    font-size: 1.25vw;
    &:before {
      width: 1.563vw;
      height: 1.563vw;
    }
  }
`;

const Title = styled.h2`
  color: #707070;
  font-weight: 400;
  font-size: 4.651vw;
  margin: 0;
  @media (min-width: 480px) {
    font-size: 1.667vw;
  }
`;

const Date = styled.p`
  margin: 0;
  color: rgba(0, 0, 0, 0.2);
  font-weight: 700;
  font-size: 2.791vw;
  @media (min-width: 480px) {
    font-size: 1.25vw;
  }
`;

const Creator = styled.p`
  margin: 0;
  color: #707070;
  font-weight: 400;
  font-size: 3.721vw;
  span {
    color: #ffaa00;
  }
  @media (min-width: 480px) {
    display: none;
  }
`;

const ButtonWraper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (min-width: 480px) {
    margin: 0 1.771vw 2.396vw;
    flex-direction: row-reverse;
  }
`;

const VoteCard = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 13px 19px 18px 30px;
  margin: 30px 0 15px;
  .symbol {
    width: 20.698vw;
    height: 20.698vw;
    background-image: url(${symbol});
    background-size: contain;
    background-repeat: no-repeat;
  }
  .content {
    display: flex;
    flex-direction: column;
    gap: 7px;
    .titr {
      margin: 0;
      color: #707070;
      font-weight: 100;
      font-size: 3.721vw;
      display: flex;
      align-items: center;
      gap: 5px;
      &:before {
        content: "";
        display: inline-flex;
        background-image: url(${voteIcon});
        background-size: contain;
        background-repeat: no-repeat;
        width: 4.884vw;
        height: 4.884vw;
      }
    }
    .title {
      color: #707070;
      font-weight: 400;
      font-size: 4.651vw;
      margin: 0;
    }
    .date {
      margin: 0;
      font-weight: 700;
      font-size: 2.791vw;
      color: rgba(0, 0, 0, 0.2);
    }
  }
  @media(min-width:480px){
    padding:0.521vw 1.302vw;
    .symbol{
      width:6.771vw;
      height:6.771vw;
    }
    .content{
      gap:0.521vw;
      .titr{
        font-size:1.250vw;
        font-weight:300;
        &:before{
          width:1.250vw;
          height:1.250vw;
        }
      }
      .title{
        font-size:1.667vw;
        font-weight:700;
      }
      .date{
        font-size:1.250vw;
        font-weight:500;
      }
    }
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  margin-bottom: 15px;
  margin-top: 15px;
  & > * {
    box-shadow: none;
  }
`;

const ActionCard = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 13px 19px 18px 30px;
  margin: 30px 0 15px;
  &.active {
    background-color: #dff5f0;
    border: 1px solid #6cbba9;
    border-radius: 4px;
  }
  .symbol {
    width: 20.698vw;
    height: 20.698vw;
    background-image: url(${actionsymbol});
    background-size: contain;
    background-repeat: no-repeat;
  }
  .content {
    display: flex;
    flex-direction: column;
    gap: 7px;
    .titr {
      margin: 0;
      color: #707070;
      font-weight: 100;
      font-size: 3.721vw;
      display: flex;
      align-items: center;
      gap: 5px;
      &:before {
        content: "";
        display: inline-flex;
        background-image: url(${action});
        background-size: contain;
        background-repeat: no-repeat;
        width: 4.884vw;
        height: 4.884vw;
      }
    }
    .title {
      color: #707070;
      font-weight: 400;
      font-size: 4.651vw;
      margin: 0;
    }
    .date {
      margin: 0;
      font-weight: 700;
      font-size: 2.791vw;
      color: rgba(0, 0, 0, 0.2);
    }
  }
`;
