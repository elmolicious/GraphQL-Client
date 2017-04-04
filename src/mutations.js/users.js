import { gql } from 'react-apollo';

export const GetAllAccountsQuery = gql`mutation create_user($new_user: UserInput!) {
  createUser(input: $new_user) {
    firstName
    lastName
    email
  }
}`
