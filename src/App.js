import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/navbar";
import Vote from "./pages/votePage";
import Actions from "./pages/ActionsPage";
import Blog from "./pages/blogPage";
import AboutMe from "./pages/aboutUs";
import LogIn from "./pages/loginPage";
import Footer from "./components/footer";
import NewsPage from "./pages/newsPage";
import Presentation from "./pages/presentationPage";
import ActionPresentation from "./pages/actionPresentationPage";
import SignIn from "./components/sign-in";
import Dashboard from "./components/dashboard";
import { UserState } from "./context/userContext";
import SetMobileNumber from "./components/sign-in/components/setMobileNumber";
import ForgetMobileNumber from "./components/forget/components/forgetMobileNumber";
import EnvoySignIn from "./components/envoy-sign-in";
import DetailsEnvoy from "./pages/EnvoyDetails";
import NotFound from "./notFound";
import ScrollTop from "react-scrolltop-button";
import Home from "./pages";
import Envoy from "./pages/envoyPage";
import { useEffect } from "react";
import { getAllEnvoysData } from "./dataFunctions/publicDataFunctions";
import { useSelector } from "react-redux";

function App() {
  useEffect(() => {
    console.log("hello");
    getAllEnvoysData();
  }, []);

  const { envoyList } = useSelector((state) => state.envoy);
  console.log(envoyList);
  return (
    <div className="App">
      <UserState>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/envoy" element={<Envoy />} />
          <Route path="/envoy/:title" element={<DetailsEnvoy />} />

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
          <Route path="/forget" element={<ForgetMobileNumber />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/sign-in/supervisor" element={<SignIn />} />
          <Route path="/sign-in/envoy" element={<EnvoySignIn />} />

          {/* dashboard routing */}
          <Route path="/dashboard/*" element={<Dashboard />} />

          {/* not found page */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />

        <ScrollTop
          text="برو بالا"
          distance={100}
          breakpoint={768}
          style={{
            backgroundColor: "#095644",
            borderColor: "#FFFFFF",
            color: "#FFFFFF",
          }}
          className="scroll-your-role"
          speed={1000}
          zindex={1000}
          // target={75}
        />
        <ToastContainer />
      </UserState>
    </div>
  );
}

export default App;
