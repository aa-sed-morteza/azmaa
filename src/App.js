import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Envoy from "./components/envoy";
import Vote from "./components/vote";
import Actions from "./components/actions";
import Blog from "./components/blog";
import AboutMe from "./components/about-me";
import Home from "./components/home";
import LogIn from "./components/log-in";
import Footer from "./components/footer";
import NewsPage from "./components/blog/components/newsPage";
import Presentation from "./components/presentation";
import ActionPresentation from "./components/action-presentation";
import SignIn from "./components/sign-in";
import Dashboard from "./components/dashboard";
import { UserState } from "./components/context/userContext";
import SetMobileNumber from "./components/sign-in/components/setMobileNumber";
import EnvoySignIn from "./components/envoy-sign-in";
import MyEnvoys from "./components/dashboard/superviser/pages/myEnvoys";
import MyActions from "./components/dashboard/superviser/pages/myActions";
import MySection from "./components/dashboard/superviser/pages/mySection";
import MySuggest from "./components/dashboard/superviser/pages/mySuggest";
import Inbox from "./components/dashboard/superviser/pages/inbox";
import MyHistory from "./components/dashboard/superviser/pages/myHistory";
import News from "./components/dashboard/superviser/components/sectionRoom/components/news";
import NewAction from "./components/dashboard/superviser/components/newAction";
import AddNewSuggets from "./components/dashboard/superviser/components/newSuggest";
function App() {
  return (
    <div className="App">
      <UserState>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/envoy" element={<Envoy />} />
          <Route path="/votes" element={<Vote />} />
          <Route path="votes/presentation/:title" element={<Presentation />} />
          <Route path="presentation/:title" element={<Presentation />} />
          <Route
            path="/actions/presentation/:title"
            element={<ActionPresentation />}
          />
          <Route path="presentation/:title" element={<ActionPresentation />} />
          <Route path="/actions" element={<Actions />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:title" element={<NewsPage />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/log-in" element={<LogIn />} />
          <Route path="/sign-in" element={<SetMobileNumber />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/sign-in/supervisor" element={<SignIn />} />
          <Route path="/sign-in/envoy" element={<EnvoySignIn />} />
          
          {/* dashboard routing */}
          <Route path="/dashboard/*" element={<Dashboard />} />

          {/* <Route path="/dashboard/myEnvoy" element={<MyEnvoys/>} />
          <Route path="/dashboard/myActions" element={<MyActions />} />
          <Route path="/dashboard/myActions/:title" element={<NewAction />} />
          <Route path="/dashboard/mySection" element={<MySection />} />
          <Route path="/dashboard/suggestion" element={<MySuggest />} />
          <Route path="/dashboard/suggestion/:title" element={<AddNewSuggets />} />
          <Route path="/dashboard/inbox" element={<Inbox />} />
          <Route path="/dashboard/history" element={<MyHistory />} />
          <Route path="/dashboard/mySection/:title" element={<News />} /> */}
        </Routes>
        <Footer />
      </UserState>
    </div>
  );
}

export default App;
