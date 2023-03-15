import logo from "./logo.svg";
import { useState, useContext } from "react";
import { Button, Navbar, Container, Nav, Row, Col } from "react-bootstrap";
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  Outlet,
} from "react-router-dom";
import "./App.css";
// import Context from "./provider/Context";
import data from "./data";
import NavBar from "./components/Navbar";
import Card from "./components/Card";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import About from "./pages/About";
import NoPage from "./pages/NoPage";

function App() {
  // const { value } = useContext(Context);
  let [shoes, setShoes] = useState(data);

  return (
    <div className="App">
      <NavBar />
      <Routes className="me-auto">
        <Route path="/" element={<Home shoes={shoes} />} />
        <Route path="/detail/:id" element={<Detail shoes={shoes} />} />
        <Route path="/about" element={<About />}>
          <Route path="/about/member" element={<div>맴버</div>} />
          <Route path="/about/location" element={<div>location</div>} />
        </Route>
        <Route path="*" element={<NoPage />} />
      </Routes>
      {/* 메인이미지 */}
    </div>
  );
}

export default App;
