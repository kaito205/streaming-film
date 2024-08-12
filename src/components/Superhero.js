import { Card, Image, Container, Row, Col } from "react-bootstrap";
import antmanImage from "../asset/images/superhero/antman.jpg";
import avengerImage from "../asset/images/superhero/avenger.jpg";
import batmanImage from "../asset/images/superhero/batman.jpg";
import robinhoodImage from "../asset/images/superhero/robinhood.jpg";
import spidermanImage from "../asset/images/superhero/spiderman-cover.jpg";
import supermanImage from "../asset/images/superhero/superman.jpg";

const SuperHero = () => {
  return (
    <div>
      <Container>
        <br/>
        <h1 className="text-white mt-5" id="superhero">SUPERHERO MOVIES</h1>
        <br/>
        <Row>
          <Col md={4} className="movieWrapper" >
            <Card className="movieImage">
              <Image
                src={antmanImage} alt="Dune Movis" className="images"/>
                <div className="bg-dark">
                    <div className="p-2 m-1 text-white">
                <Card.Title className="text-center">ANT MAN</Card.Title>
                <Card.Text className="text-left">
                    card with supporting text below as a natural This content is a little bit
                    longer.
                </Card.Text>
                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                    </div>
                </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image
                src={avengerImage} alt="Dune Movis" className="images"/>
                <div className="bg-dark">
                    <div className="p-2 m-1 text-white">
                <Card.Title className="text-center">AVENGER</Card.Title>
                <Card.Text className="text-left">
                    card with supporting text below as a natural This content is a little bit
                    longer.
                </Card.Text>
                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                    </div>
                </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image
                src={batmanImage} alt="Dune Movis" className="images"/>
                <div className="bg-dark">
                    <div className="p-2 m-1 text-white">
                <Card.Title className="text-center">BATMAN</Card.Title>
                <Card.Text className="text-left">
                    card with supporting text below as a natural This content is a little bit
                    longer.
                </Card.Text>
                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                    </div>
                </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image
                src={robinhoodImage} alt="Dune Movis" className="images"/>
                <div className="bg-dark">
                    <div className="p-2 m-1 text-white">
                <Card.Title className="text-center">ROBINHOOD</Card.Title>
                <Card.Text className="text-left">
                    card with supporting text below as a natural This content is a little bit
                    longer.
                </Card.Text>
                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                    </div>
                </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image
                src={spidermanImage} alt="Dune Movis" className="images"/>
                <div className="bg-dark">
                    <div className="p-2 m-1 text-white">
                <Card.Title className="text-center">SPIDER-MAN</Card.Title>
                <Card.Text className="text-left">
                    card with supporting text below as a natural This content is a little bit
                    longer.
                </Card.Text>
                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                    </div>
                </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image
                src={supermanImage} alt="Dune Movis" className="images"/>
                <div className="bg-dark">
                    <div className="p-2 m-1 text-white">
                <Card.Title className="text-center">SUPER-MAN</Card.Title>
                <Card.Text className="text-left">
                    card with supporting text below as a natural This content is a little bit
                    longer.
                </Card.Text>
                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                    </div>
                </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SuperHero
