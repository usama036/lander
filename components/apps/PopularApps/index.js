"use client"; // Add this directive at the top
import React from "react";
import { Container, Button } from "react-bootstrap";
import styles from "./style.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import Image from "next/image";


const PopularApps = ({pageData,type}) => {
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
                Popular<span> {type}</span>
              </h2>
              <p>Popular {type}</p>
            </div>
            <div>
              {" "}
              <Link href={`/${type?.toLowerCase()}`}>
              <Button variant="none" type="button" className="seeAllBtn">
                See All
              </Button>
                </Link>
            </div>
          </div>
          <div className="apps-slider">
            <Slider ref={sliderRef} {...settings} className={styles.slider}>
              {pageData.map((app, index) => (
                <Link key={index} href={{
                  pathname: '/homedetails',
                  query: {
                    name: app?.attributes?.slug
                  }
                }} >
                  <div  className={styles.appCard}>
                    <Image
                      src={app?.attributes?.featuredImage?.data?.attributes?.url}
                      alt={app?.attributes?.title}
                      width={260}
                      height={127}
                      className={styles.appImg}
                    />
                    <div className="d-flex">
                      <Image
                        src={app?.attributes?.Applogo}
                        alt={app?.attributes?.title}
                        width={40}
                        height={40}
                        className={styles.appSmallImg}
                        unoptimized
                      />
                      <div className={styles.appInfo}>
                        <h3>{app?.attributes?.title}</h3>
                        <p>{app?.attributes?.subtitle}</p>
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
