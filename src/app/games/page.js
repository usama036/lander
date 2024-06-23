import PopularApps from "../../../components/apps/PopularApps";
import Categories from "../../../components/apps/categories";
import client from '../../../apollo-client';
import { gql } from '@apollo/client';

const GET_DATA = gql`
    query {
        blogCategories(pagination: { limit: 1000 }  , filters: { PageCategory: { eq: "Games" } }
        )
        
        {
            data {
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
                    subtitle
                    Applogo
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

const Games = async () => {
    const { data } = await client.query({ query: GET_DATA });
    const  pageData  = await client.query({ query: GET_PAGE_DATA });
    return (
    <>
      <PopularApps pageData={pageData.data.blogPosts.data}  />
      <Categories categories={data.blogCategories.data} type={'Games'} />
    </>
  );
};

export default Games;
