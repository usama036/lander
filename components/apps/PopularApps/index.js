"use client"; // Add this directive at the top
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import styles from "./style.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";


const PopularApps = ({pageData}) => {
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
              {console.log(pageData)}
              <Slider ref={sliderRef} {...settings} className={styles.slider}>
                {pageData.cards.map((app, index) => (
                  <Link key={index} href="/homedetails">

                  <div  className={styles.appCard}>
                    <img
                      src={`http://localhost:1337${app.image1.data[0].attributes.url}`}
                      alt={app.title}
                      className={styles.appImg}
                    />
                    <div className="d-flex">
                      <img
                        src={`http://localhost:1337${app.image2.data[0].attributes.url}`}
                        alt={app.name}
                        className={styles.appSmallImg}
                      />
                      <div className={styles.appInfo}>
                        <h3>{app.title}</h3>
                        <p>{app.subTitle}</p>
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
                <i class="fa-solid fa-chevron-right"></i>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default PopularApps;
