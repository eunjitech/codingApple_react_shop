<<<<<<< HEAD
import { Button, Navbar, Container, Nav, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
=======
import { Button, Navbar, Container, Nav, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
>>>>>>> abe702724a4d9c107505e1bc41317b6581d7cd81

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
<<<<<<< HEAD
          <Col sm key={"item" + item.id} onClick={() => clickShoes(item.id)}>
            <img src={item.src} width="80%" alt={"item" + item.id} />
            <h4>{item.title}</h4>
            <p>{item.content}</p>
=======
          <Col sm key={'item' + item.id}>
            <Link to={'detail/' + item.id}>
              <img src={item.src} width="80%" alt={'item' + item.id} />
              <h4>{item.title}</h4>
              <p>{item.content}</p>
            </Link>
>>>>>>> abe702724a4d9c107505e1bc41317b6581d7cd81
          </Col>
        );
      })}
    </Row>
  );
}
