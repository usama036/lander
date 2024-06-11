import { Row, Col, Container } from "react-bootstrap";
import PrivacyPolicy from "../../../components/tools/privacyPolicy";
import SideCard from "../../../components/Topics/sideCard";

const Tools = () => {
  return (
    <>
      <Container>
        <Row>
          <Col className="col-md-9">
            <PrivacyPolicy />
          </Col>
          <Col className="col-md-3">
            <SideCard />
            <SideCard />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Tools;
