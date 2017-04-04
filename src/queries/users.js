import { gql } from 'react-apollo';

export const GetAllUsersQuery = gql`query get_all_users {
  getAllUsers {
    email
    firstName
    lastName
  }
}`

export const GetUserQuery = gql`query get_user($user_id: ID!) {
  getUser(id: $user_id) {
    email
    lastName
  }
}`

export const getUserBatchQuery = gql`query get_user_batch($ids: [ID!]!) {
  getUserBatch(user_ids: $ids) {
    email
    firstName
    lastName
    accountIds
  }
}`
