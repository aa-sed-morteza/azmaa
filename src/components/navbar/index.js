import React, { useState } from "react";
import data from "../../data.json";
import LOGO from "../../assets/azmaa-logo.png";
import menu from "../../assets/menu.png";
import search from "../../assets/search.png";
import close from "../../assets/close.png";
import signIn from "../../assets/Sign_in.png";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import useWidth from "../../hook/useWidth";

// styled
const TopBar = styled.section`
  overflow-x: hidden;
  background-color: #095644;
  padding: 20px 30px;
  display: flex;
  justify-content: space-between;
  
  @media (min-width: 480px) {
    padding: 16px 10%;
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
    width: 58px;
    height: 48px;
  }
`;

const LeftSection = styled.div`
  display: flex;
  flex-direction: row;
  gap: 29px;
  @media (min-width: 480px) {
    gap: 19px;
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
  list-style: none;
  margin: 0;
  padding: 0;
  display: ${(props) => (props.open ? "flex" : "none")};
  position: absolute;
  left: 0;
  right: 0;
  top: 67px;
  background-color: #ffffff;
  flex-direction: column;
  padding: 51px 81px;
  gap: 10px;
  z-index:40;
`;

const List = styled.li`
  width: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  position: relative;
  color: #095644;
  font-size: 4.65vw;
  font-weight: light;
  &.active {
    font-weight: bolder;
    &:before {
      content: "";
      display: "flex";
      background-color: #095644;
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
    color: #ffaa00;
    font-size: 4.65vw;
    font-weight: bold;
    right: 20px;
    @media(min-width: 480px){
      display:none;
    }
  }
`;

const Search = styled.div`
  background-image: url(${search});
  background-size: contain;
  width: 20px;
  height: 20px;
  @media (min-width: 480px) {
    width: 45px;
    height: 45px;
  }
`;

const Panel = styled.div`
  display: flex;
  position: relative;
  cursor: pointer;
  & > .icon {
    background-image: url(${signIn});
    background-size: contain;
    width: 45px;
    height: 45px;
  }
  & > .content {
    background: #f3f3f3;
    position: absolute;
    top: -16px;
    right: -171px;
    padding: 11px 22px;
    color: #095644;
    font-size: 1.25vw;
    font-weight: bold;
    border-radius: 0px 0px 8px 8px;
  }
`;

const Category = styled.ul`
  display: flex;
  gap: 40px;
  margin-right: -27%;
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
  @media (max-width: 1300px) {
    gap: 20px;
    max-width: 350px;
    overflow-x: scroll;
    li {
      // font-size: 12px;
    }
  }
  @media (max-width: 800px) {
    gap: 20px;
    width: 20%;
    overflow-x: scroll;
    li {
      // font-size: 12px;
    }
  }
`;

export default function Navbar() {
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
          <Panel onClick={() => navigate("/log-in")}>
            <div className="content">ورود به پنل</div>{" "}
            <div className="icon"></div>
          </Panel>
        )}

        <Search></Search>
        {width < 480 ? <Menu onClick={handelClick} open={open}></Menu> : ""}
        {width < 480 ? <MenuList open={open}>{menuItem}</MenuList> : ""}
      </LeftSection>
    </TopBar>
  );
}
