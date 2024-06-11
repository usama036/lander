import { Row, Col, Container } from "react-bootstrap";
import styles from "./style.module.scss";

const Explore = () => {
  const explopreData = [
    {
      img: "/assets/version.svg",
      alt: "version",
      title: "Latest Versions",
      items: "Get the most up-to-date APKs.",
    },
    {
      img: "/assets/version.svg",
      alt: "version",
      title: "Safe Downloads",
      items: "Verified and secure files.",
    },
    {
      img: "/assets/version.svg",
      alt: "version",
      title: "Fast Access",
      items: "Quick and easy download process.",
    },
    {
      img: "/assets/version.svg",
      alt: "version",
      title: "Free",
      items: "All downloads are completely free.",
    },
  ];
  return (
    <>
      <section className={styles.Explore}>
        <Container className={styles.Container}>
          <Row className={styles.row}>
            <h2>Start exploring and downloading today!</h2>
            {explopreData.map((data, index) => (
              <Col
                xs={12}
                sm={12}
                md={4}
                lg={3}
                className={styles.col}
                key={index}
              >
                <div>
                  {" "}
                  <img src={data.img} alt={data.alt} />
                </div>
                <div>
                  <h3>{data.title}</h3>
                  <p>{data.items}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Explore;
