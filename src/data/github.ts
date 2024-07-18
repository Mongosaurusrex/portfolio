import gql from 'graphql-tag';

export const GET_PINNED_REPOS = gql`
  query GET_PINNED_REPOS {
    user(login: "mongosaurusrex") {
      pinnedItems(first: 6, types: REPOSITORY) {
        nodes {
          ... on Repository {
            id
            name
            url
            primaryLanguage {
              name
            }
            description
          }
        }
      }
    }
  }
`;
