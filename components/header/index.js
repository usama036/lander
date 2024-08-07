"use client"; // Add this directive at the top
import React, { useState, useRef, useEffect } from "react";
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
import Image from "next/image";

const Header = () => {
  const [show, setShow] = useState(false);
  const [value, setValue] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [isOpen, setIsOpen] = useState(false);
  const searchRef = useRef(null);

  const handleClickOutside = (event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Navbar variant="light" expand="lg" className={`${styles.header}`}>
        <Container>
          <Navbar.Toggle aria-controls="offcanvasNavbar" onClick={handleShow} />
          <Link href="/">
            <Image
              width={155}
              height={41}
              src="/assets/logo.svg"
              className={`d-inline-block align-top`}
              alt="Logo"
            />
          </Link>
          <div className={`${styles.Mobsearch}`}>
            <div className="search-container" ref={searchRef}>
              <Button
                type="button"
                variant="none"
                value="button"
                // className="search-icon"
                onClick={toggleDropdown}
              >
                <Image
                  width={24}
                  height={24}
                  src="/assets/search.svg"
                  // className={`${styles.search}`}
                  alt="search"
                />
              </Button>
              {isOpen && (
                <div className={`search-input-dropdown ${styles.MobformWrap}`}>
                  <Form className="d-flex Mobform">
                    <InputGroup className={styles.mobInput}>
                      <Form.Control
                        type="search"
                        placeholder="Search for apps, games"
                        aria-label="Search"
                        onChange={e =>setValue(e.target.value)}
                      />
                      <Link href={{
                        pathname: '/search',
                        query: {
                          name: value,
                        }
                      }} >
                        <Image
                          width={15}
                          height={15}
                        src="/assets/search.svg"
                        className={`${styles.searchMob}`}
                        alt="search"
                      />
                      </Link>
                    </InputGroup>
                  </Form>
                </div>
              )}
            </div>
          </div>
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
                    <Image
                      src="/assets/apps-logo.svg"
                      className={`${styles.linkLogo}`}
                      alt="apps-logo"
                      width={24}
                      height={24}
                    />
                  </span>
                  Apps
                </Link>
                <Link className={`${styles.link}`} href="/games">
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
                </Link>
                <Link className={`${styles.link}`} href="/topics">
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
                </Link>
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
                    onChange={e => {
                      setValue(e.target.value);
                    }}                  />
                  <Link href={{
                    pathname: '/search',
                    query: {
                      name: value,
                    }
                  }} >
                  <Image
                    src="/assets/search.svg"
                    className={`${styles.search}`}
                    alt="search"
                    width={18}
                    height={18}
                  />
                  </Link>/
                </InputGroup>
                {/*<div>lang</div>*/}
              </Form>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Offcanvas
        show={show}
        onHide={handleClose}
        responsive="lg"
        placement="start"
        className={`d-lg-none d-sm-block ${styles.Offcanvas}`}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <Navbar.Brand href="/home">
              <Image
                src="/assets/logo.svg"
                className="d-inline-block align-top"
                alt="Logo"
                width={135}
                height={35}
              />
            </Navbar.Brand>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="d-grid flex-grow-1">
            <Link className={`mb-4 ${styles.link}`} href="/apps">
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
            </Link>
            <Link className={`mb-4 ${styles.link}`} href="/games">
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
            </Link>
            <Link className={`mb-4 ${styles.link}`} href="/topics">
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
            </Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Header;
