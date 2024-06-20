import { Row, Col, Container } from "react-bootstrap";
import TopicsAll from "../../../components/Topics/TopicsAll";
import SideCard from "../../../components/Topics/sideCard";

const Topics = () => {
  return (
    <>
      <Container className="TopicsMain">
        <Row>
          <Col className={`col-md-8 col-lg-9`}>
            <TopicsAll />
          </Col>
          <Col className={`col-md-4 col-lg-3`}>
            <SideCard />
            <SideCard />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Topics;
