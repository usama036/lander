import { Row, Col, Container } from "react-bootstrap";
import styles from "./style.module.scss";
import Link from "next/link";

const Footer = () => {
  const footerData = [
    {
      title: "SERVICE",
      items: [
        "APK Install",
        "APK Signature Verification",
        "APK Download Service",
      ],
    },
    {
      title: "DEVELOPERS",
      items: ["Developer Console", "Submit APK", "Traffic Monetization"],
    },
    {
      title: "COMPANY",
      items: ["About Us", "Contact Us", "Business Cooperation"],
    },
  ];
  return (
    <>
      <footer className={styles.footer}>
        <Container className={styles.Container}>
          <Row className="row">
            <Col className={`col-xs-12 col-sm-12 col-md-3 ${styles.col}`}>
              <Link href="/" className="me-40">
                <img
                  src="/assets/logo.svg"
                  className={`d-inline-block ${styles.headerLogo}`}
                  alt="Logo"
                />
              </Link>
              <p>
                Discover what you want easier, <br /> faster and safer.
              </p>
              <h6 className="mt-4">SOCIAL MEDIA</h6>
              <div className="d-flex">
                <Link className={`me-10 ${styles.link}`} href="/">
                  <img src="/assets/fb.svg" alt="fb" />
                </Link>
                <Link className={`me-10 ${styles.link}`} href="/">
                  <img src="/assets/X.svg" alt="fb" />
                </Link>
                <Link className={`me-10 ${styles.link}`} href="/">
                  <img src="/assets/linkedin.svg" alt="fb" />
                </Link>
                <Link className={`me-10 ${styles.link}`} href="/">
                  <img src="/assets/insta.svg" alt="fb" />
                </Link>
              </div>
            </Col>
            {footerData.map((section, index) => (
              <Col
                className={`col-xs-12 col-sm-12 col-md-3 ${styles.linkCol}`}
                key={index}
              >
                <h6 className="mb-4">{section.title}</h6>
                <ul className="list-unstyled">
                  {section.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </Col>
            ))}
          </Row>
        </Container>

        <div className={`text-center ${styles.copyright}`}>
          <Container>
            <div className="mt-4">
              Copyright © 2024 ModAPK All rights reserved. |{" "}
              <a href="#">Privacy Policy</a> | <a href="#">Copyright Policy</a>{" "}
              | <a href="#">Terms</a>
            </div>
          </Container>
        </div>
      </footer>
    </>
  );
};

export default Footer;
