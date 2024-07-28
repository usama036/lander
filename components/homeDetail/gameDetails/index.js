import { Row, Col, Container, Button } from "react-bootstrap";
import Link from "next/link";
import styles from "./style.module.scss";
import Image from "next/image";

const GameScreenshots = ({post}) => {
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

            <Row>
              <Col xs={12} sm={12} md={12} lg={12} className={styles.col}>
                <div className={styles.colWrap}>
                  <Image width={93} height={93} src={post?.attributes?.Applogo} alt="pubg" />
                  <div className={styles.dataWrap}>
                    <h3>{post?.attributes?.title}</h3>
                    <div className="d-flex align-items-center">
                      <Image
                        src='/assets/orange-star.svg'
                        width={10}
                        height={10}
                        alt="profile"
                      />
                      <span className={styles.starRate}> {post?.attributes?.rating}</span>
                      <div className={styles.review}>
                        <Image
                          width={10}
                          height={10}
                          src='/assets/profile.svg'
                          alt="profile"
                        />
                        <span>27.5k</span>
                      </div>
                    </div>
                    <div>
                      <span className={styles.rate}> {post?.attributes?.requirements} by </span>
                      <span className={styles.level}>{post?.attributes?.publisher}</span>
                    </div>
                    <div>{ new Date(post?.attributes?.publishedOn || '2024-06-20').toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
                    }</div>
                  </div>
                </div>
              </Col>
            </Row>

        </Container>
      </section>
    </>
  );
};

export default GameScreenshots;
