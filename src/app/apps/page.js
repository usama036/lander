import PopularApps from "../../../components/apps/PopularApps";
import Categories from "../../../components/apps/categories";
// import TopCharts from "../../../components/home/topCharts";
import client from '../../../apollo-client';
import { gql } from '@apollo/client';

const GET_DATA = gql`
    query {
        blogCategories(pagination: { limit: 1000 }  , filters: { PageCategory: { eq: "Apps" } }
        )

        {
            data {
                id
                attributes {
                    slug
                    name
                    PageCategory
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
`;


const GET_PAGE_DATA = gql`
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
const Apps = async () => {
    const { data } = await client.query({ query: GET_DATA });
    const  pageData  = await client.query({ query: GET_PAGE_DATA });
    console.log('pageData.data.blogPosts.data',pageData);
    return (
    <>
        <PopularApps pageData={pageData.data.blogPosts.data}  />
        {    console.log('pageData.data.blogPosts.data',pageData.data.blogPosts.data)}
      <Categories categories={data.blogCategories.data} type={'Apps'}/>      {/* <TopCharts /> */}
    </>
  );
};

export default Apps;
