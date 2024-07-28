"use client"; // Add this directive at the top
import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import styles from "./style.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { Container, Row, Col, Card, Button, Pagination } from 'react-bootstrap';
import Link from 'next/link';
import ReactStars from 'react-rating-stars-component';

// Sample data
const apps1 = [
  {
    id: 1,
    name: "WhatsApp Messenger",
    rating: 6.0,
    size: "78.7MB",
    icon: "/assets/insta-app.svg",
    orange: "/assets/orange-star.svg",
    gray: "/assets/gray-star.svg",
  },
  {
    id: 2,
    name: "Instagram",
    rating: 7.3,
    size: "59.2MB",
    icon: "/assets/insta-app.svg",
    orange: "/assets/orange-star.svg",
    gray: "/assets/gray-star.svg",
  },
  {
    id: 3,
    name: "YouTube",
    rating: 6.8,
    size: "100.9MB",
    icon: "/assets/insta-app.svg",
    orange: "/assets/orange-star.svg",
    gray: "/assets/gray-star.svg",
  },
  {
    id: 4,
    name: "CapCut - Video Editor",
    rating: 6.0,
    size: "80MB",
    icon: "/assets/insta-app.svg",
    orange: "/assets/orange-star.svg",
    gray: "/assets/gray-star.svg",
  },
  {
    id: 5,
    name: "TikTok",
    rating: 7.1,
    size: "84.7MB",
    icon: "/assets/insta-app.svg",
    orange: "/assets/orange-star.svg",
    gray: "/assets/gray-star.svg",
  },
  {
    id: 6,
    name: "Messenger",
    rating: 10.0,
    size: "84.7MB",
    icon: "/assets/insta-app.svg",
    orange: "/assets/orange-star.svg",
    gray: "/assets/gray-star.svg",
  },
  {
    id: 7,
    name: "Google Chrome",
    rating: 8.2,
    size: "101.9MB",
    icon: "/assets/insta-app.svg",
    orange: "/assets/orange-star.svg",
    gray: "/assets/gray-star.svg",
  },
  {
    id: 8,
    name: "Netflix Official",
    rating: 6.0,
    size: "72.9MB",
    icon: "/assets/insta-app.svg",
    orange: "/assets/orange-star.svg",
    gray: "/assets/gray-star.svg",
  },
  {
    id: 9,
    name: "Google Play Store Official",
    rating: 6.8,
    size: "60.7MB",
    icon: "/assets/insta-app.svg",
    orange: "/assets/orange-star.svg",
    gray: "/assets/gray-star.svg",
  },
  {
    id: 10,
    name: "Microsoft Office Premium",
    rating: 6.0,
    size: "132.8MB",
    icon: "/assets/insta-app.svg",
    orange: "/assets/orange-star.svg",
    gray: "/assets/gray-star.svg",
  },
];

//

const truncateText = (text, maxLength) => {
  if (text.length <= maxLength) {
    return text;
  }
  return text.substring(0, maxLength) + "...";
};

const appsImagePath = "/assets/apps-logo.svg";
const gamesImagePath = "/assets/gameboy.svg";

const Categories = ({categories,type}) => {
  const sliderRef = React.useRef(null);

  const settings = {
    infinite: false,
    slidesToShow: 2.25,
    slidesToScroll: 1,
    arrows: false,
    centerPadding: "0", // No padding to make it seamless
    dots: false,
    autoplay: true,
    swipeToSlide: true,
    cssEase: "linear",
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3.25,
          slidesToScroll: 1,
        },
      },
      // {
      //   breakpoint: 768,
      //   settings: {
      //     slidesToShow: 3.25,
      //     slidesToScroll: 1,
      //   },
      // },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2.25,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const isMobile = useMediaQuery({ query: "(max-width: 992px)" }); // Use media query
  const currentPath = window.location.pathname;
  const timestamp = Date.now();
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [apps, setApps] = useState([]);
  const cardsPerPage = 10;

  useEffect(() => {
    fetchApps(currentPage, cardsPerPage,type);
  }, [currentPage]);

  const fetchApps = async (page, pageSize,type) => {
    try {
      let url
      if (type === "Games") {
        url = `${process.env.NEXT_PUBLIC_API_URL}/api/blog-posts?pagination[page]=${page}&pagination[pageSize]=${pageSize}&populate=category&filters[category][PageCategory][$eq]=Games`
      }else if(type === "Apps"){
        url = `${process.env.NEXT_PUBLIC_API_URL}/api/blog-posts?pagination[page]=${page}&pagination[pageSize]=${pageSize}&populate=category&filters[category][PageCategory][$eq]=Apps`
      }else{
        url = ` ${process.env.NEXT_PUBLIC_API_URL}/api/blog-posts?pagination[page]=1&pagination[pageSize]=10&populate=category&filters[category][slug][$eq]=${type}`
      }
      const response = await fetch(url);
      const data = await response.json();
      setApps(data.data);
      setTotalPages(data.meta.pagination.pageCount);
    } catch (error) {
      console.error('Error fetching apps:', error);
    }
  };

  const handleClick = (number) => {
    setCurrentPage(number);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const renderPagination = () => {
    let paginationItems = [];
    let startPage = currentPage > 3 ? currentPage - 2 : 1;
    let endPage = currentPage + 2 <= totalPages ? currentPage + 2 : totalPages;

    if (startPage > 1) {
      paginationItems.push(<Pagination.Ellipsis key="startEllipsis" />);
    }

    for (let number = startPage; number <= endPage; number++) {
      paginationItems.push(
        <Pagination.Item
          key={number}
          active={number === currentPage}
          onClick={() => handleClick(number)}
        >
          {number}
        </Pagination.Item>
      );
    }

    if (endPage < totalPages) {
      paginationItems.push(<Pagination.Ellipsis key="endEllipsis" />);
    }

    return (
      <Pagination>
        <Pagination.Prev
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
        />
        {paginationItems}
        <Pagination.Next
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        />
      </Pagination>
    );
  };

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const isMobScreen = windowWidth < 1024;
  const isDesktopScreen = windowWidth > 991;

  const heading =
    type === "Games" ? "Newest Games" : "Newest Apps";
  const handleCategoryClick= (slug) =>{
   fetchApps(currentPage, cardsPerPage,slug)
  }


  return (
    <>
      <section className={styles.Categories}>
        <Container className={styles.conatiner}>
          <Row className={styles.row}>
            <Col md={12} lg={4} xl={4} className={styles.colLeft}>
              <div className={styles.Categories}>
                 <Image
                  src="/assets/Categories.svg"
                  alt="Categories"
                  width={20}
                  height={20}
                  // style={{ width: "20px", height: "20px" }}
                />
                <h4>Categories</h4>
              </div>
              <div>
                {isMobile ? (
                  <>
                    <Slider
                      ref={sliderRef}
                      {...settings}
                      className={styles.MobSlider}
                    >
                      {categories.map((items, index) => (
                        <div className={styles.categoriesWrap} key={index}>
                          <Image
                            src={items.attributes.image.data.attributes.url}
                            alt={items.attributes.name}
                            width={30}
                            height={30}
                            unoptimized
                            // style={{ width: "30px", height: "30px" }}
                          />
                          <h4>
                            {isDesktopScreen
                              ? truncateText(items.attributes.name, 10)
                              : items.attributes.name}
                          </h4>
                        </div>
                      ))}
                    </Slider>
                  </>
                ) : (
                  <>
                    <div className={styles.categoriesData}>
                      <Row className={styles.categoriesRow}>
                        {categories.map((items, index) => (
                          <Col
                            key={index}
                            md={6}
                            className={`${styles.categories}`}
                          >
                            <div className={styles.categoriesWrap} onClick={()=>{handleCategoryClick(items?.attributes?.slug)}}>
                              <Image
                                   src={items.attributes.image.data.attributes.url}
                                   alt={items.attributes.name}
                                   width={30}
                                   height={30}
                                   unoptimized
                              />
                              <h4>
                                {isDesktopScreen
                                  ? truncateText(items.attributes.name, 10)
                                  : items.attributes.name}
                              </h4>
                            </div>
                          </Col>
                        ))}
                      </Row>
                    </div>
                  </>
                )}
              </div>
            </Col>
            <Col md={12} lg={8} xl={8} className={styles.colRight}>
              <div className={styles.NewestApp}>
                <h4>{heading}</h4>
              </div>
              <div className={styles.NewestAppData}>
                {apps.map((app, e) => (
                  <div key={e}>
                    <div className={styles.appsData}>

                      <Link href={{
                        pathname: '/homedetails',
                        query: {
                          name: app.attributes.slug,
                        }
                      }} >
                      <div className={styles.data}>
                        <Image
                          src={app.attributes.Applogo}
                          alt="rating"
                          width={120}
                          height={120}    unoptimized                    />
                        <div className={styles.textWrap}>
                          <h5>
                            {isMobScreen
                              ? truncateText(app.attributes.title, 10)
                              : app.attributes.title}
                          </h5>
                          <div style={{ display: 'inline-flex', alignItems: 'center', marginBottom:"auto" ,}}>
                            <ReactStars
                              count={5}
                              value={app.attributes.rating}
                              size={13}  // Adjust the size to make it smaller
                              activeColor="#FFA500"
                              color="#e4e5e9"
                              edit={false}
                              style={{ marginRight: '5px' }} // Add inline styles directly here
                            />
                            <span style={{ fontSize: '13px', marginLeft: '10px',marginBottom:'32px' }}>{app.attributes.rating}</span>
                          </div>
                          <p>{app.attributes.size}</p>
                        </div>
                      </div>
                      </Link>


                      <Link href={{
                        pathname: '/homedetails',
                        query: {
                          name: app.attributes.slug,
                        }
                      }} >
                      <div className={styles.buttonWrap}>
                        <Button variant="none" className={styles.button}>
                          <Image
                            src="/assets/download-btn.svg"
                            alt="download"
                            width={15}
                            height={15}
                            style={{
                              // width: "15px",
                              // height: "15px",
                              marginRight: "10px",
                            }}
                          />{" "}
                          Download APK
                        </Button>
                      </div>
                      </Link>
                    </div>
                  </div>
                ))}

              </div>
              {renderPagination()}
            </Col>
          </Row>
        </Container>

      </section>
    </>
  );
};

export default Categories;
