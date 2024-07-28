"use client"; // Add this directive at the top
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import styles from "./style.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";



const GameScreenshots = ({post}) => {
  const sliderRef = React.useRef(null);
  const appData = [
    {
      title: `${post?.attributes?.title}'s Screenshots`,
      data: [
        {
          img:`${post?.attributes?.Image01}.jpg` ,
          alt: post?.attributes?.title,
        },

        {
          img: `${post?.attributes?.Image03}.jpg`,
          alt: post?.attributes?.title,
        },
        {
          img: `${post?.attributes?.Image04}.jpg` ,
          alt: post?.attributes?.title,
        },
        {
          img: `${post?.attributes?.Image05}.jpg` ,
          alt: post?.attributes?.title,
        },
      ],
    },
  ];
  const settings = {
    infinite: false,
    slidesToShow: 2.25,
    slidesToScroll: 1,
    arrows: false,
    centerPadding: "0", // No padding to make it seamless
    dots: false,
    autoplay: false,
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
          slidesToShow: 2.25,
        },
      },
      // {
      //   breakpoint: 1280,
      //   settings: {
      //     slidesToShow: 2.5,
      //   },
      // },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1.75,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.35,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          centerMode: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <section className={styles.GameScreenshots}>
        <Container className={styles.Container}>
          {appData.map((item, index) => (
            <Row key={index}>
              <h3>{item.title}</h3>
              <Slider
                className={styles.gameSlider}
                ref={sliderRef}
                {...settings}
              >
                {item.data.map((items, e) => (
                    <div key={e}>
                      <img
                        src={items.img}
                        alt=''
                        className={styles.appImg}
                      />
                    </div>

                ))}
              </Slider>
              <div className={styles.navigation}>
                <Button
                  variant="none"
                  type="button"
                  className={`SliderButton ${styles.button}`}
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
