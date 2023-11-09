import { gql, useQuery } from '@apollo/client';

export const GET_USERS = gql`
  query Users {
    users {
      id
      name
      username
      email
      password
      address {
        city
        country
      }
      phone
      website
      company
    }
  }
`;

export const GET_USER = gql`
  query User($id: Int!) {
    user(id: $id) {
      id
      name
      username
      email
      password
      address {
        city
        country
      }
      phone
      website
      company
    }
  }
`;
