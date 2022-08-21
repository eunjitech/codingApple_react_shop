import logo from "./logo.svg";
import { useState } from "react";
import { Button, Navbar, Container, Nav, Row, Col } from "react-bootstrap";
import "./App.css";
import data from "./data";
import NavBar from "./components/Navbar";
import Card from "./components/Card";

function App() {
  let [shoes, setShoes] = useState(data);
  console.log("shoes", shoes);

  return (
    <div className="App">
      <NavBar />
      {/* 메인이미지 */}
      <div className="main-bg"></div>
      <div className="container">
        <Card shoes={shoes} />
      </div>
    </div>
  );
}

export default App;
