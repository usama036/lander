import { Row, Col, Container } from "react-bootstrap";
import TermsOfServices from "../../../components/tools/termsOfServices";
import SideCard from "../../../components/Topics/sideCard";
import client from '../../../apollo-client';
import { gql } from '@apollo/client';
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
const Tools = async () => {

  const postResponse = await client.query({
    query: GET_SIDE_APPS_AND_GAMES
  });


  const apps = postResponse?.data?.sideApps?.data;
  const games = postResponse?.data?.sideGames?.data;
  return (
    <>
      <Container className="TopicsMain">
        <Row>
          <Col className={`col-sm-12 col-md-8 col-xxxl-8`}>
            <TermsOfServices />
          </Col>
          <Col className={`col-sm-12 col-md-4 col-xxxl-4`}>
            <SideCard post={games} type='Games' />
            <SideCard post={apps} type='Apps' />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Tools;
