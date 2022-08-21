import logo from "./logo.svg";
import "./App.css";
import { Button, Navbar, Container, Nav, Row, Col } from "react-bootstrap";
//import imgName from './img/mainBg.jpg';

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      {/* 메인이미지 */}
      <div className="main-bg"></div>
      <div className="container">
        <Row>
          <Col sm>sm=true</Col>
          <Col sm>sm=true</Col>
          <Col sm>sm=true</Col>
        </Row>
      </div>
    </div>
  );
}

export default App;
