"use client"; // Add this directive at the top
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import styles from "./style.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import Image from "next/image";



const GameScreenshots = ({post}) => {
  const sliderRef = React.useRef(null);
  const appData = [
    {
      title: `${post?.attributes?.title}'s Screenshots`,
      data: [
        // Conditionally include each image object only if the image link is not empty
        post?.attributes?.Image01 ? {
          img: `${post.attributes.Image01}.jpg`,
          alt: post?.attributes?.title,
        } : null,

        post?.attributes?.Image03 ? {
          img: `${post.attributes.Image03}.jpg`,
          alt: post?.attributes?.title,
        } : null,

        post?.attributes?.Image04 ? {
          img: `${post.attributes.Image04}.jpg`,
          alt: post?.attributes?.title,
        } : null,

        post?.attributes?.Image05 ? {
          img: `${post.attributes.Image05}.jpg`,
          alt: post?.attributes?.title,
        } : null,
      ].filter(Boolean), // Remove any null values from the array
    },
  ];

  const settings = {
    infinite: false,
    slidesToShow: 2.25,
    slidesToScroll: 1,
    arrows: false,
    centerPadding: "0",
    dots: false,
    autoplay: false,
    swipeToSlide: true,
    cssEase: "linear",
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 2.25,
        },
      },
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
                      <Image
                        width={320}
                        height={180}
                        src={items.img}
                        alt={items.alt || ''}
                        className={styles.appImg}
                        unoptimized
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
