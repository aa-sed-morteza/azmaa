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
import Footer from"./components/footer";
import NewsPage from "./components/blog/components/newsPage";
import Presentation from "./components/presentation";
import ActionPresentation from "./components/action-presentation";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/envoy" element={<Envoy />} />
        <Route path="/votes" element={<Vote />} />
        <Route path="votes/presentation/:title" element={<Presentation />} />
        <Route path="presentation/:title" element={<Presentation />} />
        <Route path="/actions/presentation/:title" element={<ActionPresentation />} />
        <Route path="presentation/:title" element={<ActionPresentation />} />
        <Route path="/actions" element={<Actions />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:title" element={<NewsPage/>} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/log-in" element={<LogIn />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
