"use client"; // Add this directive at the top
import React from "react";
import { Container, Button } from "react-bootstrap";
import styles from "./style.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import Image from "next/image";

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
    infinite: false,
    slidesToShow: 4.25,
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
          slidesToShow: 3.25,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3.15,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2.5,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2.25,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2.25,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1.75,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.15,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <section className={styles.PopularApps}>
        <Container className={styles.Container}>
          <div className={styles.row}>
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
                <Link href="/homedetails" key={index}>
                  <div className={styles.appCard}>
                    <Image
                      src={app.imgSrc}
                      alt={app.altText}
                      width={260}
                      height={127}
                      className={styles.appImg}
                    />
                    <div className="d-flex">
                      <Image
                        src={app.imgSmall}
                        alt={app.alt}
                        width={40}
                        height={40}
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
          {/* <div className={styles.navigation}>
              <Button
                variant="none"
                type="button"
                className={`rightSliderButton ${styles.button}`}
                onClick={() => sliderRef.current.slickNext()}
              >
                <i className="fa-solid fa-chevron-right"></i>
              </Button>
            </div> */}
        </Container>
      </section>
    </>
  );
};

export default PopularApps;
