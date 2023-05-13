import React, { useState } from "react";
import styled from "styled-components";
import useWidth from "../../../hook/useWidth";
import data from "../../../data.json";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../context/userContext";

export default function DashboardMenu() {
  const width = useWidth();
  const navigate = useNavigate();
  const {state,dispatch}=useUser();
  const [active, setActive] = useState(0);


  const choiseItem = (num, path) => {
    setActive(num);
    navigate(path);
  };

  const dashboardItem = data.dashboardSuperviser.map((g, i) => {
    return (
      <List
        key={i}
        onClick={() => choiseItem(i, g.path)}
        className={i === active ? "active" : ""}
      >
        <span>
          <img src={active === i ? g.active_icon : g.icon} alt={g.title} />
        </span>{" "}
        {g.title}
      </List>
    );
  });

  const envoyDashboardItems = data.dashboardEnvoy.map((item, i) => {
    return (
      <List
        key={i}
        onClick={() => choiseItem(i, item.path)}
        className={i === active ? "active" : ""}
      >
        <span>
          <img
            src={active === i ? item.active_icon : item.icon}
            alt={item.title}
          />
        </span>{" "}
        {item.title}
      </List>
    );
  });

  return (
    <Container>
      <MenuList>{state.userType =="envoy" ? envoyDashboardItems :dashboardItem}</MenuList>
    </Container>
  );
}

const Container = styled.div`
  position: sticky;
  position: -webkit-sticky;
  top: 0; /* required */
`;

const MenuList = styled.ul`
  overflow: hidden;
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  background-color: #095644;
  flex-direction: column;
  padding: 1.563vw 3.906vw 2.604vw;
  gap: 1.563vw;
`;

const List = styled.li`
  width: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  position: relative;
  color: #ffffff;
  font-size: 1.25vw;
  font-weight: 400;
  cursor: pointer;
  &.active {
    font-weight: 900;
    &:before {
      content: "";
      display: "flex";
      background-color: #ffaa00;
      border-radius: 4px 0px 0px 4px;
      right: -4vw;
      position: absolute;
      width: 2.708vw;
      height: 100%;
    }
  }

  span {
    background-color: #f3f3f3;
    width: 50px;
    height: 48px;
    border-radius: 4px;
    display: flex;
    img {
      width: 40px;
      height: 40px;
      object-fit: contain;
      margin: auto;
    }
  }
  &:nth-child(3) {
    span {
      img {
        width: 30px;
        height: 30px;
      }
    }
  }
  &:nth-child(5) {
    span {
      img {
        width: 30px;
        height: 30px;
      }
    }
  }
  &:nth-child(6) {
    span {
      img {
        width: 30px;
        height: 30px;
      }
    }
  }
`;
