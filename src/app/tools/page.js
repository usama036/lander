import { Row, Col, Container } from "react-bootstrap";
import PrivacyPolicy from "../../../components/tools/privacyPolicy";
import SideCard from "../../../components/Topics/sideCard";

const Tools = () => {
  return (
    <>
      <Container className="TopicsMain">
        <Row>
          <Col className="col-md-8 col-lg-9">
            <PrivacyPolicy />
          </Col>
          <Col className="col-md-4 col-lg-3">
            <SideCard />
            <SideCard />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Tools;
