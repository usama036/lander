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
    imgSrc: "/assets/insta-app.svg",
    alt: "whatsapp",
    orange: "/assets/orange-star.svg",
    rate: "8.1",
  },
  {
    name: "Auto Clicker - Automatic tap",
    imgSrc: "/assets/insta-app.svg",
    alt: "whatsapp",
    orange: "/assets/orange-star.svg",
    rate: "8.1",
  },
  {
    name: "YouTube",
    imgSrc: "/assets/insta-app.svg",
    alt: "whatsapp",
    orange: "/assets/orange-star.svg",
    rate: "8.1",
  },
  {
    name: "CapCut - Video Editor",
    imgSrc: "/assets/insta-app.svg",
    alt: "whatsapp",
    orange: "/assets/orange-star.svg",
    rate: "8.1",
  },
  {
    name: "Auto Clicker - Automatic tap",
    imgSrc: "/assets/insta-app.svg",
    alt: "whatsapp",
    orange: "/assets/orange-star.svg",
    rate: "8.1",
  },
];

const truncateText = (text, maxLength) => {
  if (text.length <= maxLength) {
    return text;
  }
  return text.substring(0, maxLength) + "...";
};
const GamesTrending = () => {
  const sliderRef = React.useRef(null);

  const settings = {
    infinite: false,
    slidesToShow: 9.25,
    slidesToScroll: 1,
    arrows: false,
    centerPadding: "0", // No padding to make it seamless
    dots: false,
    autoplay: true,
    swipeToSlide: true,
    cssEase: "linear",
    autoplaySpeed: 2500,
    responsive: [
      //   {
      //     breakpoint: 1660,
      //     settings: {
      //       slidesToShow: 3,
      //       slidesToScroll: 1,
      //       infinite: true,
      //     },
      //   },
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 7.25,
        },
      },
      // {
      //   breakpoint: 1280,
      //   settings: {
      //     slidesToShow: 3.15,
      //   },
      // },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6.25,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4.25,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3.25,
          slidesToScroll: 1,
        },
      },
      // {
      //   breakpoint: 576,
      //   settings: {
      //     slidesToShow: 2.75,
      //     slidesToScroll: 1,
      //   },
      // },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3.15,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <section className={styles.GamesTrending}>
        <Container className={styles.Container}>
          <div className={styles.row}>
            <div>
              <h2>
                Games . <span> Trending Searches</span>
              </h2>
              <p>Top 10 trending searches for May</p>
            </div>
            <div>
              {" "}
              <Button variant="none" type="button" className="seeAllBtn">
                See All
              </Button>
            </div>
          </div>
          <div className="position-relative">
            <Slider ref={sliderRef} {...settings} className={styles.slider}>
              {appData.map((app, index) => (
                <div key={index} className={styles.appCard}>
                  <Link href="/homedetails">
                    <img
                      src={app.imgSrc}
                      alt={app.altText}
                      className={styles.appImg}
                    />
                    <p>{truncateText(app.name, 15)}</p>
                    <div className="d-flex align-items-center justify-content-start">
                      {" "}
                      <img
                        src={app.orange}
                        alt="orange"
                        style={{
                          width: "18px",
                          height: "18px",
                          marginRight: "2px",
                        }}
                      />
                      <span>{app.rate}</span>
                    </div>
                  </Link>
                </div>
              ))}
            </Slider>
          </div>
          {/* <div className={styles.navigation}>
              <Button
                variant="none"
                type="button"
                className={`rightSliderButton ${styles.button}`}
                onClick={() => sliderRef.current.slickNext()}
              >
                <i class="fa-solid fa-chevron-right"></i>
              </Button>
            </div> */}
        </Container>
      </section>
    </>
  );
};

export default GamesTrending;
