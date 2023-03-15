import { Button, Navbar, Container, Nav, Row, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

export default function Card(props) {
  const { shoes } = props;
  const navigate = useNavigate();

  const clickShoes = (id) => {
    navigate(`/detail/${id}`);
  };

  return (
    <Row>
      {shoes.map((item) => {
        return (
          <Col sm key={"item" + item.id}>
            <Link to={"detail/" + item.id}>
              <img src={item.src} width="80%" alt={"item" + item.id} />
              <h4>{item.title}</h4>
              <p>{item.content}</p>
            </Link>
          </Col>
        );
      })}
    </Row>
  );
}
