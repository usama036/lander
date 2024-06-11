// "use client"; // Add this directive at the top
import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
import {
  Navbar,
  Nav,
  Button,
  Offcanvas,
  Container,
  Form,
  InputGroup,
} from "react-bootstrap";
import styles from "./style.module.scss";
import Link from "next/link";

const header = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar variant="light" expand="lg" className={`${styles.header}`}>
        {/* className={`${styles.container}`} */}
        <Container>
          <Link href="/" className="me-40">
            <img
              src="/assets/logo.svg"
              className={`d-inline-block align-top ${styles.headerLogo}`}
              alt="Logo"
            />
          </Link>
          <Navbar.Toggle aria-controls="offcanvasNavbar" onClick={handleShow} />
          <Navbar.Collapse
            id="navbarScroll"
            className="d-none d-lg-flex justify-content-between align-items-center"
          >
            <div>
              <Nav
                className={`d-flex justify-content-start align-items-center ${styles.nav}`}
              >
                <Link className={`${styles.link}`} href="/apps">
                  <span className={`mx-6 ${styles.text}`}>
                    {" "}
                    <img
                      src="/assets/apps-logo.svg"
                      className={`${styles.linkLogo}`}
                      alt="apps-logo"
                    />
                  </span>
                  Apps
                </Link>
                <Link className={`${styles.link}`} href="/games">
                  <span className={`mx-6 ${styles.text}`}>
                    {" "}
                    <img
                      src="/assets/gameboy.svg"
                      className={`${styles.linkLogo}`}
                      alt="gameboy"
                    />
                  </span>
                  Games
                </Link>
                <Link className={`${styles.link}`} href="/topics">
                  <span className={`mx-6 ${styles.text}`}>
                    {" "}
                    <img
                      src="/assets/book-saved.svg"
                      className={`${styles.linkLogo}`}
                      alt="book"
                    />
                  </span>
                  Topics
                </Link>
                {/* <Link className={`${styles.link}`} href="/tools">
                  <span className={`mx-6 ${styles.text}`}>
                    {" "}
                    <img
                      src="/assets/setting.svg"
                      className={`${styles.linkLogo}`}
                      alt="settings"
                    />
                  </span>
                  Tools
                </Link> */}
              </Nav>
            </div>
            <div className={styles.formWrap}>
              {" "}
              <Form className="d-flex">
                <InputGroup className={styles.InputGroup}>
                  <Form.Control
                    type="search"
                    placeholder="Search for apps, games"
                    aria-label="Search"
                  />
                  <img
                    src="/assets/search.svg"
                    className={`${styles.search}`}
                    alt="search"
                  />
                </InputGroup>
                <div>lang</div>
              </Form>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Offcanvas
        show={show}
        onHide={handleClose}
        responsive="lg"
        placement="end"
        className={`d-lg-none d-sm-block ${styles.Offcanvas}`}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <Navbar.Brand href="/home">
              <img
                src="/src/assets/header-logo.svg"
                width="60"
                height="37"
                className="d-inline-block align-top"
                alt="Logo"
              />
            </Navbar.Brand>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="d-block flex-grow-1 pe-3">
            <Link className={`${styles.link}`} href="/apps">
              <span className={`mx-6 ${styles.text}`}>
                {" "}
                <img
                  src="/assets/apps-logo.svg"
                  className={`${styles.linkLogo}`}
                  alt="apps-logo"
                />
              </span>
              Apps
            </Link>
            <Link className={`${styles.link}`} href="/games">
              <span className={`mx-6 ${styles.text}`}>
                {" "}
                <img
                  src="/assets/gameboy.svg"
                  className={`${styles.linkLogo}`}
                  alt="gameboy"
                />
              </span>
              Games
            </Link>
            <Link className={`${styles.link}`} href="/topics">
              <span className={`mx-6 ${styles.text}`}>
                {" "}
                <img
                  src="/assets/book-saved.svg"
                  className={`${styles.linkLogo}`}
                  alt="book"
                />
              </span>
              Topics
            </Link>
            {/* <Link className={`${styles.link}`} href="/tools">
              <span className={`mx-6 ${styles.text}`}>
                {" "}
                <img
                  src="/assets/setting.svg"
                  className={`${styles.linkLogo}`}
                  alt="settings"
                />
              </span>
              Tools
            </Link> */}
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default header;
