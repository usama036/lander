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
          <Col className={`col-sm-12 col-md-8 col-xxxl-8 aboutUsData`}>
            <h3>About Us</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur. Etiam vitae in ut faucibus
              orci in sit purus sapien. Velit nunc interdum arcu in.
              Pellentesque nibh tristique a sollicitudin aliquet libero nec
              tortor. Dolor sed sit risus facilisis pellentesque nibh.
            </p>
            <h3>Our Vision</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur. Etiam vitae in ut faucibus
              orci in sit purus sapien. Velit nunc interdum arcu in.
              Pellentesque nibh tristique a sollicitudin aliquet libero nec
              tortor. Dolor sed sit risus facilisis pellentesque nibh.
            </p>
            <h3>Our Mission</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur. Etiam vitae in ut faucibus
              orci in sit purus sapien. Velit nunc interdum arcu in.
              Pellentesque nibh tristique a sollicitudin aliquet libero nec
              tortor. Dolor sed sit risus facilisis pellentesque nibh. Velit
              nunc interdum arcu in. Pellentesque nibh tristique a sollicitudin
              aliquet libero nec tortor. Dolor sed sit risus facilisis
              pellentesque nibh.
            </p>
          </Col>
          <Col className={`col-sm-12 col-md-4 col-xxxl-4 AboutSideCard`}>
            <SideCard post={games} type="Games" />
          </Col>
        </Row>
        <AboutUs />
      </Container>
    </>
  );
};

export default Apps;
