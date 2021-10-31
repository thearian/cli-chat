import { gql } from "@apollo/client";

export const LOGIN = gql`
  query login($username: String!, $password: String!) {
    login(input: { username: $username, password: $password }) {
      user {
        id
        username
        email
        fullname
        createdAt
        updatedAt
      }
      authToken {
        token
        expiredAt
      }
    }
  }
`;
