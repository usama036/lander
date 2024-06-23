"use client"; // Add this directive at the top
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import styles from "./style.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import { gql } from '@apollo/client';
import client from '../../../apollo-client';

const appData = [
  {
    name: "WhatsApp Messenger",
    imgSrc: "/assets/insta-app.svg",
    alt: "whatsapp",
    orange: "/assets/orange-star.svg",
  },
  {
    name: "Auto Clicker - Automatic tap",
    imgSrc: "/assets/insta-app.svg",
    alt: "whatsapp",
  },
  {
    name: "YouTube",
    imgSrc: "/assets/insta-app.svg",
    alt: "whatsapp",
  },
  {
    name: "CapCut - Video Editor",
    imgSrc: "/assets/insta-app.svg",
    alt: "whatsapp",
  },
  {
    name: "Auto Clicker - Automatic tap",
    imgSrc: "/assets/insta-app.svg",
    alt: "whatsapp",
  },
];

const truncateText = (text, maxLength) => {
  if (text.length <= maxLength) {
    return text;
  }
  return text.substring(0, maxLength) + "...";
};

const AppsTrending = ({apps}) => {


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
      <section className={styles.AppsTrending}>
        <Container className={styles.Container}>
          <div className={styles.row}>
            <div>
              <h2>
                Apps . <span> Trending Searches</span>
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
              {apps.map((app, index) => (
                <Link
                  href={{
                    pathname: '/homedetails',
                    query: {
                      name: app.attributes.slug
                    }
                  }}
                >
                  <div key={index}>
                    <img
                      src={app.attributes.Applogo}
                      alt={app.attributes.title}
                      className={styles.appImg}
                    />
                    <p>{truncateText(app.attributes.title, 15)}</p>
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

export default AppsTrending;
