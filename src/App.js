import "./App.css"
import Header from "./components/common/header/Header"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import About from "./components/about/About"
import StoreHome from "./components/store/StoreHome"
import Exofficio from "./components/exofficio/Exofficio"
import News from "./components/news/News"
import Register from "./components/register/Register"
import Home from "./components/home/Home"
import Single from "../src/components/news/single/Single";
import Footer from "./components/common/footer/Footer";
function App() {
  return (
    <>
    <Router>
    <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/store" element={<StoreHome />} />
        <Route exact path="/exofficio" element={<Exofficio />} />
        <Route exact path="/news" element={<News />} />
        <Route exact path="/post/:postId" element={<Single />} />
        <Route exact path="/register" element={<Register />} />
      </Routes>
      <Footer/>
    </Router>
    </>
  )
}

export default App
