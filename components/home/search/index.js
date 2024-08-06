import React from "react";
import { Button, Row, Col, Container } from "react-bootstrap";
import styles from "./style.module.scss";
import Link from "next/link";
import Image from "next/image";

const SearchComponent = ({ post }) => {
  return (
    <>
      <section className={styles.SearchComponent}>
        <Container>
          <Row>
            {post?.map((data, index) => (
              <Col
                className={`col-xs-12 col-sm-6 col-md-3 col-lg-3 ${styles.col}`}
                key={index}
              >
                <Link
                  href={{
                    pathname: "/homedetails",
                    query: {
                      name: data?.attributes?.slug,
                    },
                  }}
                >
                  <div className={styles.card}>
                    <div className={styles.cardBody}>
                      <Image
                        width={80}
                        height={80}
                        alt="img"
                        src={data?.attributes?.Applogo}
                        unoptimized
                      />
                      <div className={styles.cardWrap}>
                        <h3 className={styles.cardTitle}>
                          {data?.attributes?.title}
                        </h3>
                        {/*<p className={styles.cardText}>{data.description}</p>*/}
                        <Button
                          type="button"
                          value="button"
                          className={`readMoreBtn ${styles.cardButton}`}
                          variant="none"
                        >
                          <i className="fas fa-arrow-right"></i>
                        </Button>
                      </div>
                    </div>
                  </div>
                </Link>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default SearchComponent;
