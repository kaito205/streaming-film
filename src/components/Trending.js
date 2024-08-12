import { Card, Image, Container, Row, Col } from "react-bootstrap";
import duneImage from "../asset/images/trending/dune.jpg";
import everythingImage from "../asset/images/trending/everything.jpg";
import infiniteImage from "../asset/images/trending/infinite.jpg";
import jokerImage from "../asset/images/trending/joker.jpg";
import lightyearImage from "../asset/images/trending/lightyear.jpg";
import morbiusImage from "../asset/images/trending/morbius.jpg";

const Trending = () => {
  return (
    <div>
      <Container>
        <br/>
        <h1 className="text-white mt-5" id="trending">TRENDING MOVIES</h1>
        <br/>
        <Row>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image
                src={duneImage} alt="Dune Movis" className="images"/>
                <div className="bg-dark">
                    <div className="p-2 m-1 text-white">
                <Card.Title className="text-center">DUNE</Card.Title>
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
                src={everythingImage} alt="Dune Movis" className="images"/>
                <div className="bg-dark">
                    <div className="p-2 m-1 text-white">
                <Card.Title className="text-center">EVERYTHING</Card.Title>
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
                src={infiniteImage} alt="Dune Movis" className="images"/>
                <div className="bg-dark">
                    <div className="p-2 m-1 text-white">
                <Card.Title className="text-center">INFINITE</Card.Title>
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
                src={jokerImage} alt="Dune Movis" className="images"/>
                <div className="bg-dark">
                    <div className="p-2 m-1 text-white">
                <Card.Title className="text-center">JOKER</Card.Title>
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
                src={lightyearImage} alt="Dune Movis" className="images"/>
                <div className="bg-dark">
                    <div className="p-2 m-1 text-white">
                <Card.Title className="text-center">LIGHTYEAR</Card.Title>
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
                src={morbiusImage} alt="Dune Movis" className="images"/>
                <div className="bg-dark">
                    <div className="p-2 m-1 text-white">
                <Card.Title className="text-center">MORBIUS</Card.Title>
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

export default Trending;
