import React, { useState } from "react";
import data from "../../data.json";
import LOGO from "../../assets/azmaa-logo.webp";
import menu from "../../assets/menu.webp";
import search from "../../assets/search.webp";
import close from "../../assets/close.webp";
import signIn from "../../assets/Sign_in.webp";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import useWidth from "../../hook/useWidth";
import { useUser } from "../context/userContext";
import exit from "../../assets/exit.webp";
import Profile from "../dashboard/components/profile";

// styled
const TopBar = styled.section`
  overflow: hidden;
  background-color: #095644;
  padding: 20px 30px;
  display: flex;
  justify-content: space-between;

  @media (min-width: 480px) {
    padding: 0.3vw 10%;
    justify-content: flex-start;
    align-items: center;
  }
`;

const Logo = styled.div`
  width: 31px;
  height: 26px;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  @media (min-width: 480px) {
    margin-left: 7.292vw;
    width: 3.021vw;
    height: 2.500vw;
  }
`;

const LeftSection = styled.div`
  display: flex;
  flex-direction: row;
  gap: 29px;
  @media (min-width: 480px) {
    gap: 19px;
    margin-right: auto;
  }
`;

const Menu = styled.div`
  background-image: ${(props) =>
    props.open ? `url(${close})` : `url(${menu})`};
  background-size: contain;
  width: 20px;
  height: 20px;
`;

const MenuList = styled.ul`
  // overflow: hidden;
  list-style: none;
  margin: 0;
  padding: 0;
  display: ${(props) => (props.open ? "flex" : "none")};
  position: absolute;
  left: 0;
  right: 0;
  top: 67px;
  background-color: ${(props) => (props.back ? "#095644" : "#FFFFFF")};
  flex-direction: column;
  padding: 51px 81px;
  gap: 10px;
  z-index: 40;
`;

const List = styled.li`
  width: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  position: relative;
  color: ${(props) => (props.active ? "#FFFFFF" : "#095644")};
  font-size: 4.65vw;
  font-weight: light;
  &.active {
    font-weight: bolder;
    &:before {
      content: "";
      display: "flex";
      background-color: ${(props) => (props.active ? "#FFAA00" : "#095644")};
      border-radius: 4px 0px 0px 4px;
      right: -81px;
      position: absolute;
      width: 68px;
      height: 48px;
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

  &:nth-last-child(1) {
    position: absolute;
    bottom: -66px;
    color: ${(props) => (props.active ? "#FF5A5A" : "#ffaa00")};
    font-size: 4.65vw;
    font-weight: bold;
    right: 20px;
    span {
      background-color: ${(props) => (props.active ? "#FF5A5A" : "#f3f3f3")};
    }
    @media (min-width: 480px) {
      display: none;
    }
  }
`;

const Search = styled.div`
  background-image: url(${search});
  background-size: contain;
  width: 20px;
  height: 20px;
  @media (min-width: 480px) {
    width: 2.344vw;
    height: 2.344vw;
  }
`;

const Panel = styled.div`
  display: flex;
  position: relative;
  cursor: pointer;
  & > .icon {
    background-image: url(${(props) => props.icon});
    background-size: contain;
    background-repeat: no-repeat;
    width: 2.344vw;
    height: 2.344vw;
  }
  & > .content {
    background: #f3f3f3;
    position: absolute;
    right: -8.5vw;
    top:-0.885vw;
    padding: 11px 22px;
    color: ${(props) => props.color};
    font-size: 1.25vw;
    font-weight: bold;
    border-radius: 0px 0px 8px 8px;
  }
  @media(max-width:1400px){
    .content{
      right: -9.5vw;
      top: -1.2vw;
    }
  }
  @media(max-width:992px){
    .content{
      right: -10.5vw;
      top: -2.2vw;
      padding-top:14px;
    }
  }
  @media(max-width:768px){
    .content{
      right: -12.5vw;
    }
  }
`;

const Category = styled.ul`
  display: flex;
  gap: 2.083vw;
  li {
    color: #ffffff;
    font-size: 1.25vw;
    font-weight: light;
    cursor: pointer;
    white-space: nowrap;
    span {
      display: none;
    }
    &.active {
      font-weight: bolder;
      &:before {
        content: "";
        display: "flex";
        background-color: white;
        bottom: -32px;
        position: absolute;
        width: 100%;
        height: 5px;
        right: 0;
      }
    }
  }
`;

export default function Navbar() {
  const { state, dispatch } = useUser();
  const width = useWidth();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);

  const menuItem = data.navbar.map((x, i) => {
    return (
      <List
        key={i}
        onClick={() => choiseItem(i, x.path)}
        className={i === active ? "active" : ""}
      >
        <span>
          <img src={active === i ? x.active_icon : x.icon} alt={x.title} />
        </span>{" "}
        {x.title}
      </List>
    );
  });

  const dashboardItem = data.dashboardSuperviser.map((g, i) => {
    return (
      <List
        key={i}
        onClick={() => choiseItem(i, g.path)}
        className={i === active ? "active" : ""}
        active={state.loggedIn}
      >
        <span>
          <img src={active === i ? g.active_icon : g.icon} alt={g.title} />
        </span>{" "}
        {g.title}
      </List>
    );
  });

  function choiseItem(num, path) {
    setActive(num);
    navigate(path);
    setOpen(false);
  }

  function handelClick() {
    if (open) {
      setOpen(false);
    } else {
      setOpen(true);
    }
    return open;
  }

  return (
    <TopBar>
      <Logo>
        <img src={LOGO} alt="logo" />
      </Logo>

      {width > 480 ? <Category>{menuItem}</Category> : ""}
      <LeftSection>
        {width < 480 ? (
          ""
        ) : (
          <Panel
            icon={state.loggedIn ? exit : signIn}
            color={state.loggedIn ? "#FF5A5A" : "#095644"}
            onClick={() => {
              state.loggedIn ? navigate("/") : navigate("/log-in");
            }}
          >
            <div className="content">
              {" "}
              {state.loggedIn ? "خروج از پنل" : "ورود به پنل"}{" "}
            </div>{" "}
            <div className="icon"></div>
          </Panel>
        )}

        <Search></Search>
        {width < 480 ? <Menu onClick={handelClick} open={open}></Menu> : ""}
        {width < 480 ? (
          <MenuList open={open} back={state.loggedIn}>
            {state.loggedIn ? <Profile /> : ""}
            {state.loggedIn ? dashboardItem : menuItem}{" "}
          </MenuList>
        ) : (
          ""
        )}
      </LeftSection>
    </TopBar>
  );
}
