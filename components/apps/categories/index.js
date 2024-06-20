"use client"; // Add this directive at the top
import React, { useState, useEffect } from "react";
import styles from "./style.module.scss";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

// Sample data
const apps = [
  {
    id: 1,
    name: "WhatsApp Messenger",
    rating: 6.0,
    size: "78.7MB",
    icon: "/assets/insta-app.svg",
    orange: "/assets/orange-star.svg",
    gray: "/assets/gray-star.svg",
  },
  {
    id: 2,
    name: "Instagram",
    rating: 7.3,
    size: "59.2MB",
    icon: "/assets/insta-app.svg",
    orange: "/assets/orange-star.svg",
    gray: "/assets/gray-star.svg",
  },
  {
    id: 3,
    name: "YouTube",
    rating: 6.8,
    size: "100.9MB",
    icon: "/assets/insta-app.svg",
    orange: "/assets/orange-star.svg",
    gray: "/assets/gray-star.svg",
  },
  {
    id: 4,
    name: "CapCut - Video Editor",
    rating: 6.0,
    size: "80MB",
    icon: "/assets/insta-app.svg",
    orange: "/assets/orange-star.svg",
    gray: "/assets/gray-star.svg",
  },
  {
    id: 5,
    name: "TikTok",
    rating: 7.1,
    size: "84.7MB",
    icon: "/assets/insta-app.svg",
    orange: "/assets/orange-star.svg",
    gray: "/assets/gray-star.svg",
  },
  {
    id: 6,
    name: "Messenger",
    rating: 10.0,
    size: "84.7MB",
    icon: "/assets/insta-app.svg",
    orange: "/assets/orange-star.svg",
    gray: "/assets/gray-star.svg",
  },
  {
    id: 7,
    name: "Google Chrome",
    rating: 8.2,
    size: "101.9MB",
    icon: "/assets/insta-app.svg",
    orange: "/assets/orange-star.svg",
    gray: "/assets/gray-star.svg",
  },
  {
    id: 8,
    name: "Netflix Official",
    rating: 6.0,
    size: "72.9MB",
    icon: "/assets/insta-app.svg",
    orange: "/assets/orange-star.svg",
    gray: "/assets/gray-star.svg",
  },
  {
    id: 9,
    name: "Google Play Store Official",
    rating: 6.8,
    size: "60.7MB",
    icon: "/assets/insta-app.svg",
    orange: "/assets/orange-star.svg",
    gray: "/assets/gray-star.svg",
  },
  {
    id: 10,
    name: "Microsoft Office Premium",
    rating: 6.0,
    size: "132.8MB",
    icon: "/assets/insta-app.svg",
    orange: "/assets/orange-star.svg",
    gray: "/assets/gray-star.svg",
  },
];

//
const categories = [
  {
    title: "Art & Design",
    img: "/assets/art-design.svg",
    alt: "icon",
  },
  {
    title: "House & Home",
    img: "/assets/art-design.svg",
    alt: "icon",
  },
  {
    title: "News & Magazi…",
    img: "/assets/art-design.svg",
    alt: "icon",
  },
  {
    title: "Personalization",
    img: "/assets/art-design.svg",
    alt: "icon",
  },
  {
    title: "Art & Design",
    img: "/assets/art-design.svg",
    alt: "icon",
  },
  {
    title: "Art & Design",
    img: "/assets/art-design.svg",
    alt: "icon",
  },
  {
    title: "Art & Design",
    img: "/assets/art-design.svg",
    alt: "icon",
  },
  {
    title: "Art & Design",
    img: "/assets/art-design.svg",
    alt: "icon",
  },
];

const truncateText = (text, maxLength) => {
  if (text.length <= maxLength) {
    return text;
  }
  return text.substring(0, maxLength) + "...";
};

const appsImagePath = "/assets/apps-logo.svg";
const gamesImagePath = "/assets/gameboy.svg";

const Categories = () => {
  const currentPath = window.location.pathname;
  const timestamp = Date.now();

  const imageSrc =
    currentPath === "/apps"
      ? `${appsImagePath}?t=${timestamp}`
      : `${gamesImagePath}?t=${timestamp}`;

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const isMobScreen = windowWidth < 1024;
  const isDesktopScreen = windowWidth > 991;

  const heading =
    location.pathname === "/apps" ? "Newest Games" : "Newest Apps";

  return (
    <>
      <section className={styles.Categories}>
        <Container className={styles.conatiner}>
          <Row className={styles.row}>
            <Col md={12} lg={4} xl={4} className={styles.colLeft}>
              <div className={styles.Categories}>
                <img
                  src={imageSrc}
                  alt="Categories"
                  // alt="Apps or Games icon"
                  style={{ width: "20px", height: "20px" }}
                />
                {/* <img
                  src="/assets/Categories.svg"
                  alt="Categories"
                  style={{ width: "20px", height: "20px" }}
                /> */}
                <h4>Categories</h4>
              </div>
              <div className={styles.categoriesData}>
                <Row className={styles.categoriesRow}>
                  {categories.map((items, index) => (
                    <Col key={index} md={6} className={`${styles.categories}`}>
                      <div className={styles.categoriesWrap}>
                        <img
                          src={items.img}
                          alt={items.alt}
                          style={{ width: "30px", height: "30px" }}
                        />
                        <h4>
                          {isDesktopScreen
                            ? truncateText(items.title, 10)
                            : items.title}
                        </h4>
                      </div>
                    </Col>
                  ))}
                </Row>
              </div>
            </Col>
            <Col md={12} lg={8} xl={8} className={styles.colRight}>
              <div className={styles.NewestApp}>
                <h4>{heading}</h4>
              </div>
              <div className={styles.NewestAppData}>
                {apps.map((app, e) => (
                  <div key={e}>
                    <div className={styles.appsData}>
                      <div className={styles.data}>
                        <img
                          src={app.icon}
                          alt="rating"
                          style={{ width: "120px", height: "120px" }}
                        />
                        <div className={styles.textWrap}>
                          <h5>
                            {isMobScreen
                              ? truncateText(app.name, 10)
                              : app.name}
                          </h5>
                          <div>
                            <img
                              src={app.orange}
                              alt="orange"
                              style={{
                                width: "18px",
                                height: "18px",
                                marginRight: "2px",
                              }}
                            />
                            <img
                              src={app.orange}
                              alt="orange"
                              style={{
                                width: "18px",
                                height: "18px",
                                marginRight: "2px",
                              }}
                            />
                            <img
                              src={app.orange}
                              alt="orange"
                              style={{
                                width: "18px",
                                height: "18px",
                                marginRight: "2px",
                              }}
                            />
                            <img
                              src={app.gray}
                              alt="gray"
                              style={{
                                width: "18px",
                                height: "18px",
                                marginRight: "2px",
                              }}
                            />
                            <span>{app.rating}</span>
                          </div>
                          <p>{app.size}</p>
                        </div>
                      </div>
                      <div className={styles.buttonWrap}>
                        <Button variant="none" className={styles.button}>
                          <img
                            src="/assets/download-btn.svg"
                            alt="download"
                            style={{
                              width: "15px",
                              height: "15px",
                              marginRight: "10px",
                            }}
                          />{" "}
                          Download APK
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Categories;
