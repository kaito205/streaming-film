import { Row, Container, Col, Button } from "react-bootstrap";

const Intro = () => {
  return (
    <div className="intro">
      <Container className="text-white text-center d-flex justify-content-center align-items-center">
        <Row>
          <Col>
            <div className="title">NONTON GERATIS</div>
            <div className="title">GAPAKE KARCIS</div>
            <div className="introButton mt-4 text-center">
                <Button variant="dark">Lihat Semua</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Intro;
