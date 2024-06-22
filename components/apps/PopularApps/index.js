"use client"; // Add this directive at the top
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import styles from "./style.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

const appData = [
  {
    name: "WhatsApp Messenger",
    description: "Play this amazing battle royale on your PC",
    imgSrc: "/assets/whatsapp-big.svg",
    altText: "WhatsApp",
    imgSmall: "/assets/whatsapp-samll.svg",
    alt: "whatsapp",
  },
  {
    name: "Instagram",
    description: "Play COD Mobile from your PC",
    imgSrc: "/assets/whatsapp-big.svg",
    altText: "Instagram",
    imgSmall: "/assets/whatsapp-samll.svg",
    alt: "whatsapp",
  },
  {
    name: "YouTube",
    description: "Survive in this battle royale of super-powered heroes",
    imgSrc: "/assets/whatsapp-big.svg",
    altText: "YouTube",
    imgSmall: "/assets/whatsapp-samll.svg",
    alt: "whatsapp",
  },
  {
    name: "CapCut - Video Editor",
    description: "One of the best battle royales for PC",
    imgSrc: "/assets/whatsapp-big.svg",
    altText: "CapCut",
    imgSmall: "/assets/whatsapp-samll.svg",
    alt: "whatsapp",
  },
];
const PopularApps = () => {
  const sliderRef = React.useRef(null);

  const settings = {
    infinite: true,
    slidesToShow: 4.5,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true, // Center the active slide
    centerPadding: "0", // No padding to make it seamless
    responsive: [
      {
        breakpoint: 1660,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true, // Center the active slide
          centerPadding: "0", // No padding to make it seamless
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true, // Center the active slide
          centerPadding: "0", // No padding to make it seamless
        },
      },
    ],
  };
  return (
    <>
      <section className={styles.PopularApps}>
        <Container className={styles.Container}>
          <div className="popular-apps-container">
            <div className="d-flex align-items-center justify-content-between">
              <div>
                <h2>
                  Popular<span> Apps</span>
                </h2>
                <p>Popular apps</p>
              </div>
              <div>
                {" "}
                <Button variant="none" type="button" className="seeAllBtn">
                  See All
                </Button>
              </div>
            </div>
            <div className="apps-slider">
              <Slider ref={sliderRef} {...settings} className={styles.slider}>
                {appData.map((app, index) => (
                  <Link href="/homedetails">
                    <div key={index} className={styles.appCard}>
                      <img
                        src={app.imgSrc}
                        alt={app.altText}
                        className={styles.appImg}
                      />
                      <div className="d-flex">
                        <img
                          src={app.imgSmall}
                          alt={app.alt}
                          className={styles.appSmallImg}
                        />
                        <div className={styles.appInfo}>
                          <h3>{app.name}</h3>
                          <p>{app.description}</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </Slider>
            </div>
            <div className={styles.navigation}>
              <Button
                variant="none"
                type="button"
                className={`rightSliderButton ${styles.button}`}
                onClick={() => sliderRef.current.slickNext()}
              >
                <i className="fa-solid fa-chevron-right"></i>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default PopularApps;
