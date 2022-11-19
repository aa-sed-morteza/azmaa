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
        </Routes>
        <Footer />
      </UserState>
    </div>
  );
}

export default App;
