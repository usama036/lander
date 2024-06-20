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
const Apps = async () => {
  const  pageData  = await client.query({ query: GET_PAGE_DATA });
  return (
    <>
      <ModeApkBanner />
      <Explore />
      <TopCharts pageData={pageData.data.pages.data[0].attributes.sections[0]} />
    </>
  );
};

export default Apps;
