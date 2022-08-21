import { Button, Navbar, Container, Nav, Row, Col } from "react-bootstrap";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";

export default function NavBar() {
  const navigate = useNavigate();

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">ShopShop</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link onClick={() => navigate("/detail")}>Detail</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
