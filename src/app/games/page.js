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

const Games = async () => {
    const { data } = await client.query({ query: GET_DATA });
    const  pageData  = await client.query({ query: GET_PAGE_DATA });
    return (
    <>
      <PopularApps pageData={pageData.data.pages.data[0].attributes.sections[0]}  />
      <Categories categories={data.blogCategories.data} type={'Games'} />
    </>
  );
};

export default Games;
