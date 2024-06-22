import { Row, Col, Container } from "react-bootstrap";
import TopicsAll from "../../../components/Topics/TopicsAll";
import SideCard from "../../../components/Topics/sideCard";

const Topics = () => {
  return (
    <>
      <Container className="TopicsMain">
        <Row>
          <Col className={`col-sm-12 col-md-8 col-xxxl-8`}>
            <TopicsAll />
          </Col>
          <Col className={`col-sm-12 col-md-4 col-xxxl-4`}>
            <SideCard />
            <SideCard />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Topics;
