import ModeApkBanner from "../../components/home/modapkbanner";
import Explore from "../../components/home/explore";
import TopCharts from "../../components/home/topCharts";
import { gql } from '@apollo/client';
import client from '../../apollo-client';
const GET_PAGE_APP_DATA = gql`
    query {
        blogPosts(
            pagination: { limit:50 }
            filters: {
                category: { PageCategory: { eq: "Apps" } }
                isPopular: { eq: true }
            }
        ) {
            data {
                id
                attributes {
                    title
                    rating
                    slug
                    Applogo
                    subtitle
                    featuredImage{
                        data{
                            attributes{
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
`
const GET_PAGE_GAMES_DATA = gql`
    query {
        blogPosts(
            pagination: { limit:50 }
            filters: {
                category: { PageCategory: { eq: "Games" } }
                isPopular: { eq: true }
            }
        ) {
            data {
                id
                attributes {
                    title
                    rating
                    slug
                    Applogo
                    subtitle
                    featuredImage{
                        data{
                            attributes{
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
`
const Get_Apps = gql`
    query {
        blogPosts(
            pagination: { limit:50 }
            filters: { category: { PageCategory: { eq: "Apps" } } }
        ) {
            data {
                id
                attributes {
                    title
Applogo
                    slug
                    rating
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
`
const Get_Games = gql`
    query {
        blogPosts(
            pagination: { limit:50 }
            filters: { category: { PageCategory: { eq: "Games" } } }
        ) {
            data {
                id
                attributes {
                    title
                    rating
                    slug
                    Applogo
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
`
const GET_TOPICS =gql`
query {
  pages( pagination: { limit: 10 }) {
    data {
      id
      attributes {
        slug

        title
        image {
          data {
            attributes {
              url
            }
          }
        }
      }
    }
  }
}
`


const Apps = async () => {
  const  pageAppData  = await client.query({ query: GET_PAGE_APP_DATA });
  const  pageGameData  = await client.query({ query: GET_PAGE_GAMES_DATA });
  const  getApps  = await client.query({ query: Get_Apps });
  const  getGames  = await client.query({ query: Get_Games });
  const  getTopics  = await client.query({ query: GET_TOPICS });

  return (
    <>
      <ModeApkBanner />
        <Explore />
      <TopCharts pageAppData={pageAppData.data.blogPosts.data} pageGameData={pageGameData.data.blogPosts.data}  apps={getApps.data.blogPosts.data} games={getGames.data.blogPosts.data} topics={getTopics.data.pages.data}/>
    </>
  );
};

export default Apps;
