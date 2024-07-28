import { Row, Col, Container } from "react-bootstrap";
import styles from "./style.module.scss";
import Image from "next/image";

const AboutGame = ({post}) => {
  const AboutGameData = [
    {
      title:"App Name",
      img: "/assets/app-name.svg",
      alt: "app-name",
      detail:  post?.attributes?.title,
    },
    {
      title:  'Latest Version',
      img: "/assets/2.svg",
      alt: "app-name",
      detail: post?.attributes?.latestVersion || '2.0.0',
    },
    {
      title: " Last Updated",
      img: "/assets/3.svg",
      alt: "app-name",
      detail: post?.attributes?.publishedOn,
    },
    {
      title: "Publisher",
      img: "/assets/4.svg",
      alt: "app-name",
      detail: post?.attributes?.publisher || '',
    },
    {
      title: "Requirements",
      img: "/assets/5.svg",
      alt: "app-name",
      detail: `Android ${post?.attributes?.requirements}`,
    },
    {
      title: "Category",
      img: "/assets/6.svg",
      alt: "app-name",
      detail:post?.attributes?.category?.data?.attributes?.name,
    },
    {
      title: "Size",
      img: "/assets/7.svg",
      alt: "app-name",
      detail: post?.attributes.size,
    },
    {
      title: "Google Playstore",
      img: "/assets/8.svg",
      alt: "app-name",
      detail: "Google Playstore",
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
                    <Image
                      src={data.img}
                      alt={data.alt}
                      width={20}
                      height={20}
                    />
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

            <Row >
              <Col className="col-sm-12">
                <div dangerouslySetInnerHTML={{ __html: post?.attributes?.post }}></div>


              </Col>
            </Row>

        </Container>
      </section>
    </>
  );
};

export default AboutGame;
