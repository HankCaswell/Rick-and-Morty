import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

const MyNavbar = () => {
  return (
    <Navbar>
      <Navbar.Brand>
        <Link to="/">Home</Link>
      </Navbar.Brand>
      <Container fluid>
        <Row>
          <Col>
            <Link to="about/">About</Link>
          </Col>
          <Col>
            <Link to="contacts/">Contacts</Link>
          </Col>
          <Col>
          <Link to="characters/">Charcters</Link>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
};

export default MyNavbar