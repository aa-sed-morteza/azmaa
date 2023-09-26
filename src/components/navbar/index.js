import React, { useEffect, useState } from "react";
import data from "../../data.json";
import LOGO from "../../assets/azmaa-logo.webp";
import menu from "../../assets/menu.webp";
import search from "../../assets/search.webp";
import close from "../../assets/closed.svg";
import signIn from "../../assets/Sign_in.webp";
import signInMobile from "../../assets/signMobile.svg";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import useWidth from "../../hook/useWidth";
import exit from "../../assets/exit.webp";
import Profile from "../dashboard/components/profile";
import Cookies from "js-cookie";
import { useUser } from "../../context/userContext";
import { useDispatch, useSelector } from "react-redux";
import { login , logout } from "../../redux/slices/isLoginSlice";
import {togglmenu , openmenu , closemenu} from "../../redux/slices/menuOpenSlice";
import { settoken } from "../../redux/slices/setTokenSlice";





// styled
const TopBar = styled.section`
  /* overflow: hidden; */
  background-color: #095644;
  padding: 20px 30px;
  display: flex;
  justify-content: space-between;
  z-index: 100;
  position: absolute;
  right: 0;
  left: 0;
  top: 0;

  @media (min-width: 481px) {
    justify-content: flex-start;
    align-items: center;
  }
  @media (min-width: 769px) {
    padding: 1.2vw 10%;
    justify-content: flex-start;
    align-items: center;
  }
`;

const Logo = styled.div`
  width: 31px;
  height: 26px;
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  @media (min-width: 481px) {
    margin-left: 7.292vw;
    width: 3.021vw;
    height: 2.5vw;
  }
`;

const LeftSection = styled.div`
  display: flex;
  flex-direction: row;
  gap: 29px;
  @media (min-width: 481px) {
    gap: 19px;
    margin-right: auto;
  }
`;

const Menu = styled.div`
  background-image: ${(props) =>
    props.open ? `url(${menu})` : `url(${close})`};
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
  background-color: ${(props) => (props.back ? "#095644" : "#FFFFFF")};
  flex-direction: column;
  padding: 51px 81px 115px;
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
`;

const MobilePanel = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  gap: 3.488vw;
  padding-right: 4.186vw;
  bottom: 9vw;
  right: 0;
  .icon {
    display: flex;
    border-radius: 4px;
    width: 11.628vw;
    height: 11.163vw;
    background-color: ${(props) => props.color};
    img {
      margin: auto;
      width: 90%;
      height: 90%;
      object-fit: contain;
      mix-blend-mode: lighten;
    }
  }
  .content {
    margin: 0;
    padding: 0;
    font-size: 5.581vw;
    font-weight: 700;
    color: ${(props) => props.color};
  }
`;

const Search = styled.div`
  display: none;
  background-image: url(${search});
  background-size: contain;
  width: 20px;
  height: 20px;
  @media (min-width: 481px) {
    width: 3vw;
    height: 3vw;
  }
  @media (min-width: 769px) {
    width: 2.344vw;
    height: 2.344vw;
  }
`;

const Panel = styled.div`
  display: flex;
  position: relative;
  cursor: pointer;
  .icon {
    background-image: url(${(props) => props.icon});
    background-size: contain;
    background-repeat: no-repeat;
    width: 3vw;
    height: 3vw;
  }
  .content {
    background: #f3f3f3;

    right: -15.5vw;

    padding: 11px;
    color: ${(props) => props.color};
    font-size: 2.25vw;
    font-weight: bold;
    border-radius: 8px 8px 8px 8px;
  }

  @media (min-width: 769px) {
    .icon {
      width: 2.344vw;
      height: 2.344vw;
    }
    .content {
      font-size: 1.25vw;
      right: -9.5vw;
    }
  }

  @media (min-width: 1201px) {
    .content {
      padding: 11px 22px;
      font-size: 1.25vw;
      right: -10.5vw;
    }
  }
`;

const Category = styled.ul`
  display: flex;
  gap: 2.083vw;
  margin: 0;
  padding: 0;
  li {
    color: #ffffff;
    font-size: 2vw;
    font-weight: light;
    cursor: pointer;
    white-space: nowrap;
    span {
      display: none;
    }
    &.active,
    &:hover {
      font-weight: bolder;
      &:before {
        content: "";
        display: flex;
        background-color: white;
        bottom: -3.2vw;
        position: absolute;
        width: 100%;
        height: 5px;
        right: 0;
      }
    }
  }
  @media (min-width: 769px) {
    li {
      font-size: 1.25vw;
      &.active,
      &:hover {
        &:before {
          bottom: -1.7vw;
        }
      }
    }
  }
  @media (min-width: 1201px) {
    li {
      &.active,
      &:hover {
        &:before {
          bottom: -1.4vw;
        }
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
  const [dashboard, setDashboard] = useState(false);

  const islogin = useSelector(state => state.islogin.islogin);
  const ismenuopen = useSelector(state => state.ismenuopen.ismenuopen);

  const dispatchRedux = useDispatch();

  const token = useSelector(state => state.token.token);
  const userType = useSelector((state) => state.userType.userType);



  useEffect(() => {
    setDashboard(true);
    // setOpen(true);
    dispatchRedux(openmenu());
  }, [ismenuopen]);

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

  const dashboardSuperviserItem = data.dashboardSuperviser.map((g, i) => {
    return (
      <List
        key={i}
        onClick={() => choiseItem(i, g.path)}
        className={i === active ? "active" : ""}
        active={islogin}
      >
        <span>
          <img src={active === i ? g.active_icon : g.icon} alt={g.title} />
        </span>{" "}
        {g.title}
      </List>
    );
  });

  const dashboardEnvoyItem = data.dashboardEnvoy.map((g, i) => {
    return (
      <List
        key={i}
        onClick={() => choiseItem(i, g.path)}
        className={i === active ? "active" : ""}
        active={islogin}
      >
        <span>
          <img src={active === i ? g.active_icon : g.icon} alt={g.title} />
        </span>{" "}
        {g.title}
      </List>
    );
  });

  const checkUserMenu = () => {
    if (userType == "envoy") {
      return dashboardEnvoyItem;
    } else {
      return dashboardSuperviserItem;
    }
  };

  const goDashboard = () => {
    if (islogin) {
      Cookies.remove("userId");
      Cookies.remove("userName");
      // dispatch({ type: "SET_LOGGED_IN", payload: false });
      dispatchRedux(logout());
      // dispatch({ type: "SET_TOKEN", payload: null });
      dispatchRedux(settoken(null));
      // dispatch({ type: "OPEN_MENU", payload: false });
      dispatchRedux(closemenu());
    } else {
      navigate("/dashboard");
      setDashboard(true);
    }
    setOpen(!open);
    // setDashboard(!dashboard);
    // setOpen(false);
    // if (!dashboard) {
    //   navigate("/dashboard");
    // } else {
    //   navigate("/");
    //   let config = {
    //     method: "post",
    //     url: `${BaseBackURL}api/v1/accounts/logout/`,
    //   };
    //   axios(config).then((res) => {
    //     console.log(res);
    //     dispatch({ type: "SET_LOGGED_IN", payload: false });
    //   });
    // }
  };

  function choiseItem(num, path) {
    setActive(num);
    navigate(path);
    // setOpen(!open);
    dispatchRedux(togglmenu());
  }

  return (
    <TopBar>
      <Logo
        onClick={() => {
          navigate("/");
        }}
      >
        <img src={LOGO} alt="logo" />
      </Logo>

      {width > 481 ? <Category>{menuItem}</Category> : ""}
      <LeftSection>
        {width < 481 ? (
          ""
        ) : (
          <Panel
            icon={islogin ? exit : signIn}
            color={islogin ? "#FF5A5A" : "#095644"}
            onClick={goDashboard}
          >
            <div className="content">
              {" "}
              {islogin ? "خروج از پنل" : "ورود به پنل"}{" "}
              {/* <div className="icon"></div> */}
            </div>{" "}
          </Panel>
        )}

        <Search></Search>
        {width < 481 ? (
          <Menu
            onClick={() => {
              // setOpen(!open);
              dispatchRedux(togglmenu());
            }}
            open={ismenuopen}
          ></Menu>
        ) : (
          ""
        )}
        {width < 481 ? (
          <MenuList open={!ismenuopen} back={dashboard && islogin}>
            {dashboard && islogin ? <Profile /> : ""}
            {dashboard && islogin ? checkUserMenu() : menuItem}{" "}
            <MobilePanel
              color={islogin ? "#FF5A5A" : "#FFAA00"}
              onClick={goDashboard}
            >
              <div className="icon">
                <img src={islogin ? exit : signInMobile} />
              </div>
              <p className="content">
                {" "}
                {islogin ? "خروج از پنل" : "ورود به پنل"}{" "}
              </p>{" "}
            </MobilePanel>
          </MenuList>
        ) : (
          ""
        )}
      </LeftSection>
    </TopBar>
  );
}
