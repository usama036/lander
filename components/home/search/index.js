import React from "react";
import { Button, Row, Col, Container } from "react-bootstrap";
import styles from "./style.module.scss";
import Link from "next/link";
import Image from "next/image";

const cardData = [
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
];

const SearchComponent = () => {
  return (
    <>
      <section className={styles.SearchComponent}>
        <Container>
          <Row>
            {cardData.map((data, index) => (
              <Col
                className="col-xs-12 col-sm-12 col-md-6 col-lg-6"
                key={index}
              >
                <div className={styles.card}>
                  <div className={styles.cardBody}>
                    <Image
                      width={377}
                      height={225}
                      alt="img"
                      src={data.imageUrl}
                    />
                    <h3 className={styles.cardTitle}>{data.title}</h3>
                    <p className={styles.cardText}>{data.description}</p>
                    <Link href="/">
                      <Button
                        type="button"
                        value="button"
                        className={`readMoreBtn ${styles.cardButton}`}
                        variant="none"
                      >
                        Read More
                        <i className="fas fa-arrow-right"></i>
                      </Button>
                    </Link>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default SearchComponent;
