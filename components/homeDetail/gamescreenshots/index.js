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
    title: "PUBG MOBILE Screenshots",
    data: [
      {
        img: "/assets/whatsapp-big.svg",
        alt: "whatsapp",
      },
      {
        img: "/assets/whatsapp-big.svg",
        alt: "whatsapp",
      },
      {
        img: "/assets/whatsapp-big.svg",
        alt: "whatsapp",
      },
      {
        img: "/assets/whatsapp-big.svg",
        alt: "whatsapp",
      },
      {
        img: "/assets/whatsapp-big.svg",
        alt: "whatsapp",
      },
    ],
  },
];

const GameScreenshots = () => {
  const sliderRef = React.useRef(null);

  const settings = {
    infinite: false,
    slidesToShow: 4.5,
    slidesToScroll: 1,
    arrows: false,
    centerMode: false, // Center the active slide
    centerPadding: "0", // No padding to make it seamless
    // responsive: [
    //   {
    //     breakpoint: 1660,
    //     settings: {
    //       slidesToShow: 3,
    //       slidesToScroll: 1,
    //       infinite: true,
    //     },
    //   },
    //   {
    //     breakpoint: 1440,
    //     settings: {
    //       slidesToShow: 3,
    //       slidesToScroll: 1,
    //       infinite: true,
    //     },
    //   },
    //   {
    //     breakpoint: 1280,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 1,
    //       infinite: true,
    //     },
    //   },
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 1,
    //       infinite: true,
    //     },
    //   },
    //   {
    //     breakpoint: 600,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //       centerMode: true, // Center the active slide
    //       centerPadding: "0", // No padding to make it seamless
    //     },
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //       centerMode: true, // Center the active slide
    //       centerPadding: "0", // No padding to make it seamless
    //     },
    //   },
    // ],
  };

  return (
    <>
      <section className={styles.GameScreenshots}>
        <Container className={styles.Container}>
          {appData.map((item, index) => (
            <Row key={index}>
              <h3>{item.title}</h3>
              <Slider className={styles.slider} ref={sliderRef} {...settings}>
                <Link href="/homedetails">
                  {item.data.map((items, e) => (
                    <div key={e}>
                      <img
                        src={items.img}
                        alt={items.alt}
                        className={styles.appImg}
                      />
                    </div>
                  ))}
                </Link>
              </Slider>
              <div className={styles.navigation}>
                <Button
                  variant="none"
                  type="button"
                  className={`rightSliderButton ${styles.button}`}
                  onClick={() => sliderRef.current.slickNext()}
                >
                  <i class="fa-solid fa-chevron-right"></i>
                </Button>
              </div>
            </Row>
          ))}
        </Container>
      </section>
    </>
  );
};

export default GameScreenshots;
