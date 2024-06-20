import { Row, Col, Container } from "react-bootstrap";
import GameDetails from "../../../components/homeDetail/gameDetails";
import AboutGame from "../../../components/homeDetail/aboutGame";
import Versions from "../../../components/homeDetail/versions";
import GameScreenshots from "../../../components/homeDetail/gamescreenshots";
import SideCard from "../../../components/Topics/sideCard";

const HomeDetails = () => {
  return (
    <>
      <Container className="TopicsMain">
        <Row>
          <Col className="col-md-8 col-lg-9">
            <GameDetails />
            <div className="Advertisement-Two">Advertisement two</div>
            <AboutGame />
            <Versions />
            <GameScreenshots />
          </Col>
          <Col className="col-md-4 col-lg-3">
            <div className="Advertisement">Advertisement</div>
            <SideCard />
            <SideCard />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HomeDetails;
