import { Row, Col, Container, Button } from "react-bootstrap";
import styles from "./style.module.scss";
import Link from "next/link";
import Image from "next/image";

const Versions = () => {
  const explopreData = [
    {
      title: "Versions of PUBG MOBILE",
      data: [
        {
          btn1: "Download for Android",
          btn2: "Check All Versions",
        },
      ],
    },
  ];
  return (
    <>
      <section className={styles.Versions}>
        <Container className={styles.Container}>
          {explopreData.map((item, index) => (
            <Row className={styles.row} key={index}>
              <h3>{item.title}</h3>
              {item.data.map((items, imgIndex) => (
                <Col
                  xs={12}
                  sm={12}
                  md={12}
                  lg={12}
                  className={styles.col}
                  key={imgIndex}
                >
                  <div className={styles.buttonWrap}>
                    <Link href="/">
                      <Button
                        as="button"
                        type="button"
                        value="button"
                        variant="none"
                        className={`${styles.btn1}`}
                      >
                        <Image
                          src="/assets/download-btn.svg"
                          alt="download"
                          height={15}
                          width={15}
                          style={{
                            // width: "15px",
                            // height: "15px",
                            marginRight: "10px",
                          }}
                        />
                        {items.btn1}
                      </Button>
                    </Link>
                  </div>
                  <div className={styles.btn2Wrap}>
                    <Link href="/">
                      <Button
                        as="button"
                        type="button"
                        value="button"
                        variant="none"
                        className={`${styles.btn2}`}
                      >
                        {items.btn2}
                      </Button>
                    </Link>
                  </div>
                </Col>
              ))}
            </Row>
          ))}
        </Container>
      </section>
    </>
  );
};

export default Versions;
