import Link from "next/link";
import styles from "./style.module.scss";
import { Row, Col, Container, Form, InputGroup, Button } from "react-bootstrap";

const modapkData = [
  {
    title: "Welcome to modapk",
    items: "Download the latest APK files for your favorite apps and games.",
    desc: "Stay updated with the newest versions and enjoy a seamless experience. Safe, fast, and free downloads available now.",
  },
];

const modapkbanner = () => {
  return (
    <>
      <section className={styles.modapkbanner}>
        <Container className={styles.Container}>
          <Row className={styles.row}>
            {modapkData.map((data, index) => (
              <Col
                xs={12}
                sm={12}
                md={6}
                lg={6}
                key={index}
                className={styles.col}
              >
                <h3>{data.title}</h3>
                <h2>{data.items}</h2>
                <p>{data.desc}</p>
                <div className={styles.formWrap}>
                  {" "}
                  <Form className="d-flex mt-40">
                    <InputGroup className={styles.InputGroup}>
                      <Form.Control
                        type="search"
                        placeholder="Search for apps, games"
                        aria-label="Search"
                      />
                    </InputGroup>
                    <Link href="/search">
                      <Button
                        variant="none"
                        type="sumbit"
                        className={`${styles.button}`}
                      >
                        Find App
                      </Button>
                    </Link>
                  </Form>
                </div>
              </Col>
            ))}
            {/* {Data.map((data, ind) => ( */}
            {/* <Col key={ind} xs={12} sm={12} md={6} lg={6}></Col> */}
            {/* ))} */}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default modapkbanner;
