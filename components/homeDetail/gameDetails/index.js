import { Row, Col, Container, Button } from "react-bootstrap";
import Link from "next/link";
import styles from "./style.module.scss";
import Image from "next/image";

const GameScreenshots = ({post}) => {
  function formatNumberToK(value) {
    // Convert the value to a number if it's a string
    const number = typeof value === 'string' ? parseFloat(value.replace(/,/g, '')) : value;

    if (isNaN(number)) {
      throw new Error('Input must be a valid number or numeric string');
    }

    if (number >= 1_000_000) {
      // Convert to millions
      return (number / 1_000_000).toFixed(1) + 'M';
    } else if (number >= 1_000) {
      // Convert to thousands
      return (number / 1_000).toFixed(1) + 'K';
    } else {
      // Return the number as-is for values less than 1,000
      return number.toString();
    }
  }
  return (
    <>
      <section className={styles.GameScreenshots}>
        <Container className={styles.Container}>

            <Row>
              <Col xs={12} sm={12} md={12} lg={12} className={styles.col}>
                <div className={styles.colWrap}>
                  <Image width={93} height={93} src={post?.attributes?.Applogo} alt="pubg" unoptimized/>
                  <div className={styles.dataWrap}>
                    <h1>{post?.attributes?.title}</h1>
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
                        <span>{formatNumberToK(post?.attributes?.downloads)}</span>
                      </div>
                    </div>
                    <div>
                      <span className={styles.rate}> {post?.attributes?.requirements}  </span>
                      {/*<span className={styles.level}>{post?.attributes?.publisher}</span>*/}
                    </div>
                    <div>{ new Date(post?.attributes?.createAt || '2024-06-20').toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
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
