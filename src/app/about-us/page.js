import AboutUs from "../../../components/tools/about-us";
import client from "../../../apollo-client";
import { gql } from "@apollo/client";
import Link from "next/link";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import SideCard from "../../../components/Topics/sideCard";

const GET_SIDE_APPS_AND_GAMES = gql`
  query GetSideAppsAndGames {
    sideApps: blogPosts(
      filters: {
        category: { PageCategory: { eq: "Apps" } }
        isSideCardShow: { eq: true }
      }
    ) {
      data {
        id
        attributes {
          title
          rating
          slug
          Applogo
          Image01
          Image03
          Image04
          Image05
          createdAt
          subtitle
          publisher
          post
          downloads
          category {
            data {
              attributes {
                name
              }
            }
          }
          size
          featuredImage {
            data {
              attributes {
                url
              }
            }
          }

          category {
            data {
              id
              attributes {
                PageCategory
              }
            }
          }
        }
      }
    }

    sideGames: blogPosts(
      filters: {
        category: { PageCategory: { eq: "Games" } }
        isSideCardShow: { eq: true }
      }
    ) {
      data {
        id
        attributes {
          title
          rating
          slug
          Applogo
          Image01
          Image03
          Image04
          Image05
          subtitle
          publisher
          createdAt
          post
          downloads
          category {
            data {
              attributes {
                name
              }
            }
          }
          size
          featuredImage {
            data {
              attributes {
                url
              }
            }
          }

          category {
            data {
              id
              attributes {
                PageCategory
              }
            }
          }
        }
      }
    }
  }
`;

const Apps = async () => {
  const postResponse = await client.query({
    query: GET_SIDE_APPS_AND_GAMES,
  });

  const games = postResponse?.data?.sideGames?.data;
  return (
    <>
      <Container>
        <div className="About-us">
          <Image
            src="/assets/about.svg"
            alt="About-us"
            width={1115}
            height={670}
          />
        </div>
        <Row>
          <Col className={`col-sm-12 col-md-8 col-xxxl-8`}>
            <div className="aboutUsData">
              <h3>Our Story</h3>
              <p>
                Welcome to Reapplay.com! Our journey began with a lifelong
                entrepreneur who turned a passion for technology into a thriving
                platform. Inspired by the mantra, Do what you love, we set out
                to create a space where technology enthusiasts can explore the
                latest and greatest in mobile apps and games. Here, we celebrate
                innovation and creativity, bringing you closer to the tech that
                shapes our world.
              </p>
              <h3>What We Offer</h3>
              <p>
                Our insightful reviews highlight the unique technology behind
                each app and game. We believe that every piece of software has a
                story to tell, and we are here to uncover it. Our reviews are
                crafted with care, offering you a deep dive into features, user
                experiences, and the magic that makes each app stand out. Plus,
                stay informed with download stats and developer insights, giving
                you our comprehensive insight.
              </p>
              <h3>Join Our Community</h3>
              <p>
                We invite you to be part of our vibrant community of tech
                lovers. Whether you are a casual gamer or a tech aficionado,
                theres something here for everyone. With free download links at
                your fingertips, you can easily explore new worlds and
                experiences. Join us on this exciting adventure, and lets
                discover the future of mobile technology together!
              </p>
            </div>
          </Col>
          <Col className={`col-sm-12 col-md-4 col-xxxl-4 AboutSideCard`}>
            <SideCard post={games} />
          </Col>
        </Row>
        <AboutUs />
      </Container>
    </>
  );
};

export default Apps;
