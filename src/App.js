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
import {
  clearFilterForAnyData,
  getAllInitialData,
} from "./dataFunctions/publicDataFunctions";
import ClearFilterButton from "./components/general/clearFilterButton";
import { useDispatch, useSelector } from "react-redux";
import LoadingScreen from "./components/loading/loadingScreen";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { settoken } from "./redux/slices/setTokenSlice";

function App() {
  const { isEnvoyLoaded } = useSelector((state) => state.envoy);
  const { isVoteLoaded } = useSelector((state) => state.vote);
  const { isBlogLoaded } = useSelector((state) => state.blog);
  const { isActivityLoaded } = useSelector((state) => state.activity);
  const { isCityLoaded, isDistrictLoaded } = useSelector((state) => state.city);
  const token = useSelector((state) => state.token.token);
  const dispatchRedux = useDispatch();
  const navigate = useNavigate();
  // console.log(
  //   isEnvoyLoaded,
  //   isVoteLoaded,
  //   isActivityLoaded,
  //   isBlogLoaded,
  //   isDistrictLoaded,
  //   isCityLoaded
  // );
  useEffect(() => {
    getAllInitialData();
  }, []);

  useEffect(() => {
    if (Cookies.get("token")) {
      dispatchRedux(settoken(Cookies.get("token")));
    } else {
      if (window.location.href.includes("/dashboard")) {
        navigate("/log-in");
      }
    }
  }, [token]);

  console.log(Cookies.get("token"));

  const { isFilterActive } = useSelector((state) => state.filter);
  return (
    <div className="App">
      <UserState>
        {isEnvoyLoaded &&
        isActivityLoaded &&
        isVoteLoaded &&
        isBlogLoaded &&
        isCityLoaded ? (
          <>
            {" "}
            <Navbar />
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/envoy" element={<Envoy />} />
              <Route path="/envoy/:id" element={<DetailsEnvoy />} />

              {/* <Route path="/votes" element={<Vote />} /> */}
              <Route
                path="votes/presentation/:title"
                element={<Presentation />}
              />
              <Route path="presentation/:title" element={<Presentation />} />
              <Route
                path="/actions/presentation/:title"
                element={<ActionPresentation />}
              />
              <Route
                path="presentation/:title"
                element={<ActionPresentation />}
              />
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
              speed={500}
              zindex={1000}
              // target={75}
            />
            <ToastContainer />
          </>
        ) : (
          <LoadingScreen />
        )}
      </UserState>
    </div>
  );
}

export default App;
