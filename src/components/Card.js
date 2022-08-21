import { Button, Navbar, Container, Nav, Row, Col } from "react-bootstrap";

export default function Card(props) {
  const { shoes } = props;
  return (
    <Row>
      {shoes.map((item) => {
        return (
          <Col sm key={"item" + item.id}>
            <img src={item.src} width="80%" alt={"item" + item.id} />
            <h4>{item.title}</h4>
            <p>{item.content}</p>
          </Col>
        );
      })}
    </Row>
  );
}
