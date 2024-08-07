import { Container } from "react-bootstrap";

import Search from "../../../components/home/search";

import { gql } from '@apollo/client';
import client from '../../../apollo-client';
const GET_POST_DETAILS = gql`
  query GetPostDetails($slug: String!) {
    blogPosts(filters: { title: { containsi: $slug } }) {
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
const SearchComponent = async ({ searchParams }) => {


  // Fetch initial data on the server
  const slug = searchParams.name;
  console.log(slug);
  const postResponse =
    await client.query({
      query: GET_POST_DETAILS,
      variables: { slug },
    })



  const post = postResponse.data.blogPosts.data;

  return (
    <>
      <Container className="TopicsMain">
        <Search post={post} />
      </Container>
    </>
  );
};

export default SearchComponent;
