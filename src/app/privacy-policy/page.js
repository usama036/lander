import { Row, Col, Container } from "react-bootstrap";
import PrivacyPolicy from "../../../components/tools/privacyPolicy";
import SideCard from "../../../components/Topics/sideCard";

const Tools = () => {
  return (
    <>
      <Container className="TopicsMain">
        <Row>
          <Col className={`col-sm-12 col-md-8 col-xxxl-8`}>
            <PrivacyPolicy />
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

export default Tools;
