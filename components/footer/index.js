import { Row, Col, Container } from "react-bootstrap";
import styles from "./style.module.scss";
import Link from "next/link";
import Image from "next/image";
import React from "react";

const Footer = () => {
  const footerData = [
    {
      title: "SERVICE",
      items: [
        {
          label: (
            <>
              <span className={`mx-6 ${styles.text}`}>
                {" "}
                <Image
                  src="/assets/apps-logo.svg"
                  className={`${styles.linkLogo}`}
                  alt="apps-logo"
                  width={24}
                  height={24}
                />
              </span>
              Apps
            </>
          ),
          url: "/apps",
        },
        {
          label: (
            <>
              <span className={`mx-6 ${styles.text}`}>
                {" "}
                <Image
                  src="/assets/gameboy.svg"
                  className={`${styles.linkLogo}`}
                  alt="gameboy"
                  width={24}
                  height={24}
                />
              </span>
              Games
            </>
          ),
          url: "/games",
        },
        {
          label: (
            <>
              <span className={`mx-6 ${styles.text}`}>
                {" "}
                <Image
                  src="/assets/book-saved.svg"
                  className={`${styles.linkLogo}`}
                  alt="book"
                  width={24}
                  height={24}
                />
              </span>
              Topics
            </>
          ),
          url: "/topics",
        },
      ],
    },
    {
      title: "CONTACT US",
      items: [
        { label: "hello@reapplay.com", url: "mailto:hello@reapplay.com" },
        {
          label: "1+(503)560-5598",
          url: "tel:+15035605598",
        },
        { label: "346 Hunter Place", url: "#" },
        { label: "Bend, Oregon 97703", url: "#" },
      ],
    },
    {
      title: "COMPANY",
      items: [
        { label: "About Us", url: "/about-us" },
        {
          label: "Contact Us",
          url: "/about-us",
        },
        { label: "Privacy Policy", url: "/privacy-policy" },
        { label: "Terms of Services", url: "/terms-of-services" },
      ],
    },
  ];

  return (
    <>
      <footer className={styles.footer}>
        <Container className={styles.Container}>
          <Row className="row">
            <Col className={`col-xs-12 col-sm-12 col-md-3 ${styles.col}`}>
              <Link href="/" className="me-40">
                <Image
                  src="/assets/logo.svg"
                  width={166}
                  height={44}
                  className={`d-inline-block`}
                  alt="Logo"
                />
              </Link>
              <p>
                Discover what you want easier, <br /> faster and safer.
              </p>
              <h6 className="mt-4">SOCIAL MEDIA</h6>
              <div className="d-flex">
                <Link className="me-10" href="/">
                  <Image height={40} width={40} src="/assets/fb.svg" alt="fb" />
                </Link>
                <Link className="me-10" href="/">
                  <Image height={40} width={40} src="/assets/X.svg" alt="fb" />
                </Link>
                <Link className="me-10" href="/">
                  <Image
                    height={40}
                    width={40}
                    src="/assets/linkedin.svg"
                    alt="fb"
                  />
                </Link>
                <Link className="me-10" href="/">
                  <Image
                    height={40}
                    width={40}
                    src="/assets/insta.svg"
                    alt="fb"
                  />
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
                    <li key={idx}>
                      <Link href={item.url}>{item.label}</Link>
                    </li>
                  ))}
                </ul>
              </Col>
            ))}
          </Row>
        </Container>

        <div className={`text-center ${styles.copyright}`}>
          <Container>
            <div className="mt-4">
              Copyright © 2024 Reapplay.com All rights reserved. |{" "}
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
