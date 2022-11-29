import React, { useEffect } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import { useUser } from "../context/userContext";
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

export default function Dashboard() {
  const { state, dispatch } = useUser();
  const navigate = useNavigate();
  const width = useWidth();

  useEffect(()=>{
    if(state.userName == ""){
      navigate('/log-in')
    }
  },[])

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
        {state.voteNumber === 0 ? (
          // <SuperviserDashboard />

          <Routes>
            <Route path="/" element={<SuperviserDashboard />} />
            <Route path="/edit-personal-info" element={<EditPersonalInformation />} />
            <Route path="/edit-log-info" element={<EditLogInformation/>}/>
            <Route path="/edit-contact-info" element={<EditContactInformation/>}/>


            <Route path="/myEnvoy" element={<MyEnvoys />} />
            <Route path="/myActions" element={<MyActions />} />
            <Route path="/myActions/:title" element={<NewAction />} />
            <Route path="/mySection" element={<MySection />} />
            <Route path="/suggestion" element={<MySuggest />} />
            <Route path="/suggestion/:title" element={<AddNewSuggets />} />
            <Route path="/inbox" element={<Inbox />} />
            <Route path="/history" element={<MyHistory />} />
            <Route path="/mySection/:title" element={<News />} />
          </Routes>
        ) : (
          <EnvoyDashboard />
        )}
      </PageWraper>
    </Container>
  );
}

const Container = styled.section`
  @media (min-width: 480px) {
    display: flex;
    padding-right: 10vw;
    padding-top: 2.448vw;
    padding-bottom: 4.583vw;
    justify-content: space-between;
  }
`;

const Menu = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  width: 28%;
`;

const PageWraper = styled.div`
  width: 100%;
  @media (min-width: 480px) {
    width: 70.5%;
  }
`;
