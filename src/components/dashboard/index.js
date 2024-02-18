import React, { useEffect } from "react";
import styled from "styled-components";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import { useUser } from "../../context/userContext";
import SuperviserDashboard from "./superviser";
import EnvoyDashboard from "./envoy";
import useWidth from "../../hook/useWidth";
import Profile from "./components/profile";
import DashboardMenu from "./components/navbar";
//components
import MyEnvoys from "./superviser/pages/myEnvoys";
import MyActions from "./superviser/pages/myActions";
import MySection from "./superviser/pages/mySection";
import MySuggest from "./superviser/pages/mySuggest";
import Inbox from "./superviser/pages/inbox";
import MyHistory from "./superviser/pages/myHistory";
import News from "./superviser/components/sectionRoom/components/news";
import NewAction from "./superviser/components/newAction";
import AddNewSuggets from "./superviser/components/newSuggest";
import EditPersonalInformation from "./superviser/components/editProfile/EditPersonalInformation";
import EditLogInformation from "./superviser/components/editProfile/editLogInInfo";
import EditContactInformation from "./superviser/components/editProfile/editContactInfo";
import EditCommission from "./envoy/components/edit/editCommission";
import EditHistoryEnvoy from "./envoy/components/edit/editHistoryEnvoy";
import EditEnvoyState from "./envoy/components/edit/editEnvoyState";
import Cookies from "js-cookie";
import { BaseBackURL } from "../../constant/api";
import axios from "axios";
import { toast } from "react-toastify";
import GeneralEditInformation from "./superviser/components/editProfile/generalEditInformation";
import MyVotes from "./superviser/pages/myVotes";
import NewVote from "./superviser/components/newVote";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../../redux/slices/isLoginSlice";
import { settoken } from "../../redux/slices/setTokenSlice";
import { setuserdata } from "../../redux/slices/setuserDataSlice";
import { setusername } from "../../redux/slices/setUserNameSlice";


import { setUserType } from "../../redux/slices/userTypeSlice";
import { setID } from "../../redux/slices/setId";
import { setimage } from "../../redux/slices/setImageSlice";

export default function Dashboard() {
  const { state, dispatch } = useUser();
  const navigate = useNavigate();
  const width = useWidth();

  const dispathRedux = useDispatch();

  const islogin = useSelector(state => state.islogin.islogin);
  const token = useSelector(state => state.token.token);
  const userdata = useSelector(state => state.userdata);
  const userType = useSelector((state) => state.userType.userType);
  


  const getPersonalInfo = (userId) => {
    let data = new FormData();

    let config = {
      method: "put",
      url: `${BaseBackURL}api/v1/accounts/profile/update/${userId}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios(config)
      .then((res) => {
        // dispatch({ type: "SET_USER_DATA", payload: { ...res.data } });
        dispathRedux(setuserdata(res.data ));
      })
      .catch((err) => {
        console.log("error", err);
      });
  };

  const refreshToken = () => {
    const data = new FormData();
    data.append("refresh", Cookies.get("refreshToken"));

    let config = {
      method: "post",
      url: `${BaseBackURL}api/token/refresh/`,
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
      data: data,
    };

    axios(config)
      .then((response) => {
        // console.log(JSON.stringify(response.data));
        // dispatch({ type: "SET_TOKEN", payload: response.data.access });
        dispathRedux(settoken(response.data.access));
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    refreshToken();
  }, []);

  useEffect(() => {
    getPersonalInfo(Cookies.get("userId"));
  }, [token]);

  useEffect(() => {
    // if (islogin) {
    //   navigate("/log-in");
    // }
    if (Cookies.get("userId")) {
      // dispatch({ type: "SET_LOGGED_IN", payload: false });
      dispathRedux(logout());

      handleAutoLogin(Cookies.get("userId"));
    } else {
      // dispatch({ type: "SET_LOGGED_IN", payload: false });
      dispathRedux(logout());
      navigate("/log-in");
    }
  }, [islogin]);

  const handleAutoLogin = (userId) => {
    // dispatch({ type: "SET_LOGGED_IN", payload: true });
    dispathRedux(login());
    let config = {
      method: "get",
      url: `${BaseBackURL}api/v1/accounts/member/${userId}`,
    };

    axios(config).then((res) => {
      // console.log(res);
      if (res.data.id) {
        Cookies.set("userId", res.data.id);
        // dispatch({ type: "SET_LOGGED_IN", payload: true });
        dispathRedux(setimage(res.data.image));
        dispathRedux(setID(res.data.id));
        dispathRedux(login());
        dispatch({ type: "SET_LOGIN_INFO", payload: { ...res.data } });
        // dispatch({ type: "SET_USERNAME", payload: Cookies.get("userName") });
        dispathRedux(setusername(Cookies.get("userName")));
        // dispatch({ type: "SET_TYPE_USER", payload: Cookies.get("userType") });
        dispathRedux(setUserType(Cookies.get("userType")));
     

        getPersonalInfo(userId);
        navigate("/dashboard");
      } else if (res.data.code === -1) {
        // console.log(res);
        Cookies.remove("userId");
        Cookies.remove("userName");
        Cookies.remove("userType");
      }
    });
  };

  return (
    <Container>
      {width < 480 ? (
        ""
      ) : (
        <Menu>
          <Profile />
          <DashboardMenu />
        </Menu>
      )}

      <PageWraper>
        {userType === "superviser" ? (
          // <SuperviserDashboard />

          <Routes>
            <Route path="/" element={<SuperviserDashboard />} />
            <Route
              path="/edit-personal-info"
              element={<EditPersonalInformation />}
            />
            <Route path="/edit-log-info" element={<EditLogInformation />} />
            <Route
              path="/edit-contact-info"
              element={<EditContactInformation />}
            />
            <Route path="/myEnvoy" element={<MyEnvoys />} />
            <Route path="/myActions" element={<MyActions />} />
            <Route path="/myVotes" element={<MyVotes />} />
            <Route path="/myActions/:title" element={<NewAction />} />
            <Route path="/myVotes/:title" element={<NewVote />} />
            <Route path="/mySection" element={<MySection />} />
            <Route path="/suggestion" element={<MySuggest />} />
            <Route path="/suggestion/:title" element={<AddNewSuggets />} />
            <Route path="/inbox" element={<Inbox />} />
            <Route path="/history" element={<MyHistory />} />
            <Route path="/mySection/:title" element={<News />} />
            <Route path="/edit" element={<GeneralEditInformation />} />
          </Routes>
        ) : (
          <Routes>
            <Route path="/" element={<EnvoyDashboard />} />
            <Route
              path="/edit-personal-info"
              element={<EditPersonalInformation />}
            />
            <Route path="/edit-log-info" element={<EditLogInformation />} />
            <Route
              path="/edit-contact-info"
              element={<EditContactInformation />}
            />
            <Route path="/edit-commission-info" element={<EditCommission />} />
            <Route path="/edit-history-info" element={<EditHistoryEnvoy />} />
            <Route path="/edit-envoy-state" element={<EditEnvoyState />} />

            <Route path="/myEnvoy" element={<MyEnvoys />} />
            <Route path="/myVotes" element={<MyVotes />} />
            <Route path="/myVotes/:title" element={<NewVote />} />
            <Route path="/myActions" element={<MyActions />} />
            <Route path="/myActions/:title" element={<NewAction />} />
            <Route path="/mySection" element={<MySection />} />
            <Route path="/suggestion" element={<MySuggest />} />
            <Route path="/suggestion/:title" element={<AddNewSuggets />} />
            <Route path="/inbox" element={<Inbox />} />
            <Route path="/history" element={<MyHistory />} />
            <Route path="/mySection/:title" element={<News />} />
            <Route path="/edit" element={<GeneralEditInformation />} />
          </Routes>
        )}
      </PageWraper>
    </Container>
  );
}

const Container = styled.section`
  @media (min-width: 480px) {
    display: flex;
    padding-right: 10vw;
    padding-top: 3vw;
    padding-bottom: 4.583vw;
    justify-content: space-between;
  }
`;

const Menu = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  width: 28%;
  /* overflow: scroll; */
`;

const PageWraper = styled.div`
  width: 100%;
  @media (min-width: 480px) {
    width: 70.5%;
  }
`;
