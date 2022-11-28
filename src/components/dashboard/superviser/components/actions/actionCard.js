import React, { useEffect, useState } from "react";
import styled from "styled-components";
import arrow from "../../../../../assets/arrow.webp";
import useWidth from "../../../../../hook/useWidth";
import SecondEnvoyCard from "./secondEnvoyCard";

export default function ActionCard(props) {
  const [open, setopen] = useState(false);
  const width = useWidth();
  const envoys = props.envoys;

  const envoyGallery = envoys.map((x, i) => {
    return (
      <SecondEnvoyCard
        key={i}
        name={x.name}
        state={x.state}
        commission={x.commission}
        id={x.id}
        persantage={x.persantage}
        img={x.img}
        action={x.action}
      />
    );
  });

  const handdleClick = () => {
    if (width < 480) {
      setopen(!open);
    }
  };

  useEffect(() => {
    if (width > 480) {
      setopen(true);
    }
  }, []);

  return (
    <Wraper>
      <Container onClick={handdleClick} className={open ? "active" : ""}>
        <Header>
          <Symbol>
            <img src={props.img} alt="symbol" />
          </Symbol>
          <Content icon={props.icon}>
            <p className="titr">{props.titr}</p>
            <h2 className="title">{props.title}</h2>
            <p className="date">{props.date}</p>
          </Content>
        </Header>
      </Container>
      {open && (
        <Details>
          {envoyGallery}
          <Edit>
            <p className="text">ویرایش فعالیت</p>
          </Edit>
        </Details>
      )}
    </Wraper>
  );
}

const Wraper = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 30px -5px rgba(0, 0, 0, 0.25);
  background-color: #ffffff;
  border-radius: 4px;
  @media (min-width: 480px) {
    border-radius: 8px;
    width: 49%;
    height:fit-content;
    box-shadow: 0px 0px 30px -5px rgba(0, 0, 0, 0.15);
  }
`;

const Container = styled.div`
  padding: 13px 19px 18px 30px;
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
      display: none;
    }
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  @media (min-width: 480px) {
    gap: 1.458vw;
    padding: 0.781vw 0.521vw;
  }
`;

const Symbol = styled.div`
  width:20.698vw;
  height:20.698vw;
  img{
    width:100%;
    height:100%
    object-fit:contain;
  }
  @media(min-width:480px){
    width:6.771vw;
    height:6.771vw;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
  .titr {
    margin: 0;
    color: #707070;
    font-weight: 100;
    font-size: 3.721vw;
    text-align: start;
    display: flex;
    align-items: center;
    &:before {
      content: "";
      display: inline-flex;
      background-image: url(${(props) => props.icon});
      background-size: contain;
      background-repeat: no-repeat;
      width: 4.884vw;
      height: 4.884vw;
    }
  }
  .title {
    margin: 0;
    color: #707070;
    font-weight: 400;
    font-size: 4.651vw;
  }
  .date {
    margin: 0;
    color: rgba(0, 0, 0, 0.2);
    font-weight: 700;
    font-size: 2.791vw;
  }
  @media (min-width: 480px) {
    .titr {
      font-size: 1.25vw;
      font-weight: 300;
      &:before {
        width: 1.25vw;
        height: 1.25vw;
      }
    }
    .title {
      font-size: 1.667vw;
      font-weight: 700;
    }
    .date {
      font-size: 1.25vw;
      font-weight: 500;
    }
  }
`;

const Details = styled.div`
  background-color: #ffffff;
  padding: 15px 10px 13px;
  border-top: 1px solid #f5f5f5;

`;

const Edit = styled.div`
  border: 1px solid #095644;
  border-radius: 4px;
  padding: 6px;
  .text {
    color: #095644;
    font-weight: 400;
    font-size: 3.721vw;
    margin: 0;
    text-align: center;
  }
  @media (min-width: 480px) {
    border: 2px solid #095644;
    border-radius: 8px;
    width: 87%;
    margin: auto;
    padding:10px;
    .text {
      font-size: 1.25vw;
    }
  }
`;
