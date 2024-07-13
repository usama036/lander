"use client"; // Add this directive at the top
import React, { useRef } from "react";
import Link from "next/link";
import styles from "./style.module.scss";
import { Row, Col, Container, Form, InputGroup, Button } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const modapkData = [
  {
    title: "Welcome to modapk",
    items: "Download the latest APK files for your favorite apps and games.",
    desc: "Stay updated with the newest versions and enjoy a seamless experience. Safe, fast, and free downloads available now.",
  },
];

const slider = [
  {
    img: "/assets/homeslider.svg",
    alt: "img",
    sideImg: "/assets/icon-slider.svg",
    imgAlt: "img",
    title: "NBA 2K Mobile Basketball Game ",
    btn: "Download",
  },
  {
    img: "/assets/homeslider.svg",
    alt: "img",
    sideImg: "/assets/icon-slider.svg",
    imgAlt: "img",
    title: "NBA 2K Mobile Basketball Game ",
    btn: "Download",
  },
  {
    img: "/assets/homeslider.svg",
    alt: "img",
    sideImg: "/assets/icon-slider.svg",
    imgAlt: "img",
    title: "1",
    btn: "Download",
  },
  {
    img: "/assets/homeslider.svg",
    alt: "img",
    sideImg: "/assets/icon-slider.svg",
    imgAlt: "img",
    title: "2",
    btn: "Download",
  },
  {
    img: "/assets/homeslider.svg",
    alt: "img",
    sideImg: "/assets/icon-slider.svg",
    imgAlt: "img",
    title: "3",
    btn: "Download",
  },
];

const Modapkbanner = () => {
  const homeSliderRef = useRef(null);

  const sliderNext = () => {
    homeSliderRef.current.slickNext();
  };
  const sliderPrev = () => {
    homeSliderRef.current.slickPrev();
  };

  const settings = {
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    centerMode: true, // Center the active slide
    centerPadding: "0", // No padding to make it seamless
    lazyLoad: true,
    autoplay: false,
    swipeToSlide: true,
    cssEase: "linear",
  };

  return (
    <>
      <section className={styles.modapkbanner}>
        <Container className={styles.Container}>
          <Row className={styles.row}>
            {modapkData.map((data, index) => (
              <Col
                key={index}
                className={`col-xs-12 col-sm-12 col-md-12 col-lg-6 ${styles.col}`}
              >
                <h3>{data.title}</h3>
                <h2>{data.items}</h2>
                <p>{data.desc}</p>
                <div className={styles.formWrap}>
                  {" "}
                  <Form className={`d-flex mt-40 ${styles.Form}`}>
                    <InputGroup className={styles.InputGroup}>
                      <Form.Control
                        type="search"
                        placeholder="Search for apps, games"
                        aria-label="Search"
                      />
                    </InputGroup>
                    <Link href="/search">
                      <Button
                        variant="none"
                        type="sumbit"
                        className={`${styles.button}`}
                      >
                        Find App
                      </Button>
                    </Link>
                  </Form>
                </div>
              </Col>
            ))}
            <Col
              className={`col-xs-12 col-sm-12 col-md-12 col-lg-6 ${styles.colSlider}`}
            >
              <Slider
                ref={homeSliderRef}
                {...settings}
                className={styles.slider}
              >
                {slider.map((data, ind) => (
                  <div key={ind} className={styles.sliderWrap}>
                    {/* Slick Button */}
                    <div className={styles.slickBtnWrapper}>
                      <div
                        className={styles.slickArrowPrev}
                        onClick={sliderPrev}
                      >
                        <Image
                          height={30}
                          width={30}
                          src="/assets/arrow-icon.svg"
                          alt="leftArrow"
                        />
                      </div>
                      <div
                        className={styles.slickArrowNext}
                        onClick={sliderNext}
                      >
                        <Image
                          height={30}
                          width={30}
                          src="/assets/arrow-icon.svg"
                          alt="rightArrow"
                        />
                      </div>
                    </div>
                    <div>
                      <Image
                        width={700}
                        height={584}
                        className={styles.bgImg}
                        src={data.img}
                        alt={data.alt}
                        // sizes="(width: 100%)"
                        style={{
                          width: "100%",
                          objectFit: "cover",
                          // maxHeight: "584px",
                        }}
                      />
                      <div className={styles.dataWrap}>
                        <div className={styles.imgwrap}>
                          <Image
                            height={60}
                            width={60}
                            src={data.sideImg}
                            alt={data.imgAlt}
                          />
                          <h2>{data.title}</h2>
                        </div>
                        <div className={styles.btnwrap}>
                          <Button
                            className={`${styles.btn}`}
                            value="button"
                            variant="none"
                            type="button"
                          >
                            {data.btn}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Modapkbanner;
