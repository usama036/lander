import ModeApkBanner from "../../components/home/modapkbanner";
import Explore from "../../components/home/explore";
import TopCharts from "../../components/home/topCharts";
import { gql } from '@apollo/client';
import client from '../../apollo-client';
const GET_PAGE_DATA = gql`
    query {
        pages(filters: { title: { eq: "Apps" } }) {
            data {
                attributes {
                    slug
                    title
                    sections {
                        title
                        secName
                        description
                        subTitle

                        buttons {
                            title
                            url
                        }
                        cards {
                            title
                            image1 {
                                data {
                                    attributes {
                                        url
                                    }
                                }
                            }
                            image2 {
                                data {
                                    attributes {
                                        url
                                    }
                                }
                            }
                            jsonData
                            subTitle
                            description
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
const Apps = async () => {
  const  pageData  = await client.query({ query: GET_PAGE_DATA });
  const  getApps  = await client.query({ query: Get_Apps });
  const  getGames  = await client.query({ query: Get_Games });
  return (
    <>
      <ModeApkBanner />
        <Explore />
      <TopCharts pageData={pageData.data.pages.data[0].attributes.sections[0]} apps={getApps.data.blogPosts.data} games={getGames.data.blogPosts.data}/>
    </>
  );
};

export default Apps;
