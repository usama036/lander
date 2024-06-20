import { Row, Col, Container } from "react-bootstrap";
import styles from "./style.module.scss";

const AboutGame = () => {
  const AboutGameData = [
    {
      title: "App Name",
      img: "/assets/app-name.svg",
      alt: "app-name",
      detail: "PUBG MOBILE",
    },
    {
      title: "App Name",
      img: "/assets/app-name.svg",
      alt: "app-name",
      detail: "PUBG MOBILE",
    },
    {
      title: "App Name",
      img: "/assets/app-name.svg",
      alt: "app-name",
      detail: "PUBG MOBILE",
    },
    {
      title: "App Name",
      img: "/assets/app-name.svg",
      alt: "app-name",
      detail: "PUBG MOBILE",
    },
    {
      title: "App Name",
      img: "/assets/app-name.svg",
      alt: "app-name",
      detail: "PUBG MOBILE",
    },
  ];

  const TextContainer = [
    {
      title: "About PUBG MOBILE",
      dec: "Dive into the ultimate Battle Royale and win chicken dinner in PUBG MOBILE!",
      dec1: "PUBG MOBILE is an epic battle royale mobile game and one of the best mobile shooting games available. At its core, it offers thrilling survival gameplay with intense battles lasting up to 10 minutes, where players are equipped with firearms and must respond to the call for battle.",
      dec2: "PUBG MOBILE boasts a variety of maps and gameplay mechanics that give players a thrilling survival experience, with new modes being added for players to explore. From classic mode, payload, fast-paced 4v4 arena battles, to infection mode, the game offers an array of gameplay options in which players can choose to participate in their preferred game mode",
    },
  ];

  return (
    <>
      <section className={styles.AboutGame}>
        <Container className={`Container ${styles.Container}`}>
          {AboutGameData.map((data, index) => (
            <Row
              className={`Row ${styles.row} Aboutrow${index + 1}`}
              key={index}
            >
              <Col
                xs={12}
                sm={12}
                md={6}
                lg={6}
                className={`colLeft ${styles.colLeft}`}
              >
                <div className={styles.colWrap}>
                  <div className="d-flex align-items-center">
                    <img src={data.img} alt={data.alt} />
                    <p>{data.title}</p>
                  </div>
                </div>
              </Col>
              <Col xs={12} sm={12} md={6} lg={6} className={styles.colRight}>
                <p>{data.detail}</p>{" "}
              </Col>
            </Row>
          ))}
        </Container>
        <Container className={styles.textContainer}>
          {TextContainer.map((data, ind) => (
            <Row key={ind}>
              <Col className="col-sm-12">
                <h3>{data.title}</h3>
                <p>{data.dec}</p>
                <p>{data.dec1}</p>
                <p>{data.dec2}</p>
              </Col>
            </Row>
          ))}
        </Container>
      </section>
    </>
  );
};

export default AboutGame;
