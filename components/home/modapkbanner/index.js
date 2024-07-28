"use client"; // Add this directive at the top
import React, { useRef, useState } from 'react';
import Link from "next/link";
import styles from "./style.module.scss";
import { Row, Col, Container, Form, InputGroup, Button, Alert } from 'react-bootstrap';
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
  const [value, setValue] = useState('');
  const [isEmpty, setIsEmpty] = useState(false);

  const handleClick = (e) => {
    if (value.trim() === '') {
      e.preventDefault();
      setIsEmpty(true);
    } else {
      setIsEmpty(false);
    }
  };
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
                        required={true}
                        placeholder="Search for apps, games"
                        onChange={e=>(setValue(e.target.value))}
                        aria-label="Search"

                      />
                    </InputGroup>

                    <Link href={{
                      pathname: '/search',
                      query: {
                        name: value
                      }
                    }} >
                      <Button
                        variant="none"
                        type="submit"
                        className={`${styles.button}`}
                        onClick={handleClick}

                      >
                          Find App
                      </Button>
                    </Link>
                  </Form>
                  {isEmpty && (
                    <Alert variant="danger" style={{ color: 'red' }}>
                      Value is required
                    </Alert>
                  )}
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
