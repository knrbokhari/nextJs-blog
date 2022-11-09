import { request, gql } from "graphql-request";

const graphqlAPI: any = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

// get post
export const getPosts = async () => {
  const query = gql`
    query MyQuery {
      postsConnection {
        edges {
          cursor
          node {
            author {
              bio
              name
              id
              photo {
                url
              }
            }
            createdAt
            slug
            title
            excerpt
            featuredImage {
              url
            }
            categories {
              name
              slug
            }
          }
        }
      }
    }
  `;
  //   const query2 = gql`
  //     query Assets {
  //       postsConnection {
  //         edges {
  //           node {
  //             author {
  //               bio
  //               name
  //               id
  //               photo {
  //                 url
  //               }
  //             }
  //             createdAt
  //             slug
  //             title
  //             excerpt
  //             categories {
  //               name
  //               slug
  //             }
  //             featuredImage {
  //               url
  //             }
  //           }
  //         }
  //       }
  //     }
  //   `;

  const result = await request(graphqlAPI, query);

  return result.postsConnection.edges;
};
