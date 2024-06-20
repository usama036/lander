import { Row, Col, Container, Button } from "react-bootstrap";
import Link from "next/link";
import styles from "./style.module.scss";

const GameScreenshots = () => {
  const GameScreenshotsData = [
    {
      title: "PUBG MOBILE",
      img: "/assets/pubg.svg",
      star: "/assets/orange-star.svg",
      starRate: "8.7",
      profile: "/assets/profile.svg",
      review: "63k Reviews",
      rate: "3.2.0",
      level: "Level Infinite",
      date: "May 14, 2024",
    },
  ];
  return (
    <>
      <section className={styles.GameScreenshots}>
        <Container className={styles.Container}>
          {GameScreenshotsData.map((item, index) => (
            <Row key={index}>
              <Col xs={12} sm={12} md={12} lg={12} className={styles.col}>
                <div className={styles.colWrap}>
                  <img src={item.img} className={styles.img} alt="pubg" />
                  <div className={styles.dataWrap}>
                    <h3>{item.title}</h3>
                    <div className="d-flex align-items-center">
                      <img src={item.star} alt="profile" />
                      <span className={styles.starRate}> {item.starRate}</span>
                      <div className={styles.review}>
                        <img src={item.profile} alt="profile" />
                        <span>{item.review}</span>
                      </div>
                    </div>
                    <div>
                      <span className={styles.rate}>{item.rate} by</span>
                      <span className={styles.level}>{item.level}</span>
                    </div>
                    <div>{item.date}</div>
                  </div>
                </div>
              </Col>
            </Row>
          ))}
        </Container>
      </section>
    </>
  );
};

export default GameScreenshots;
