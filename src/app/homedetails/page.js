// app/home-details/page.js

import { gql } from '@apollo/client';
import client from '../../../apollo-client'; // Adjust the path as necessary
import { Row, Col, Container } from "react-bootstrap";
import GameDetails from "../../../components/homeDetail/gameDetails";
import AboutGame from "../../../components/homeDetail/aboutGame";
import Versions from "../../../components/homeDetail/versions";
import GameScreenshots from "../../../components/homeDetail/gamescreenshots";
import SideCard from "../../../components/Topics/sideCard";

const GET_POST_DETAILS = gql`
  query GetPostDetails($slug: String!) {
    blogPosts(filters: { slug: { eq: $slug } }) {
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
        createdAt
      publisher
        post
downloads
category{
          data{
            attributes{
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
category{
          data{
            attributes{
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
category{
          data{
            attributes{
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
export let metadata={}
const HomeDetails = async ({ searchParams }) => {
  const slug = searchParams.name;
  const [postResponse, sideDataResponse] = await Promise.all([
    client.query({
      query: GET_POST_DETAILS,
      variables: { slug },
    }),
    client.query({
      query: GET_SIDE_APPS_AND_GAMES,
    }),
  ]);

  const post = postResponse.data.blogPosts.data[0];
  const apps = sideDataResponse.data.sideApps.data;
  const games = sideDataResponse.data.sideGames.data;
  metadata= {
    title: `${post?.attributes?.title} download`,
    description: post?.attributes?.subtitle,
    canonical: `${process.env.NEXT_PUBLIC_API_URL}/homedetails?name=${post?.attributes?.slug}`
  };

  return (
    <Container className="TopicsMain">
      <Row>
        <Col className="col-xs-12 col-sm-12 col-md-7 col-lg-7 home-Detail-Page-Left-Col">
          {post && <GameDetails post={post} />}
          <div className="Advertisement-Two">Advertisement two</div>
          {post && <AboutGame post={post} />}
          {post && <Versions post={post} />}
          {post && <GameScreenshots post={post} />}
        </Col>
        <Col className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
          <div className="Advertisement">Advertisement</div>
          <SideCard post={games} type='Games' />
          <SideCard post={apps} type='Apps' />
        </Col>
      </Row>
    </Container>
  );
};

export default HomeDetails;
