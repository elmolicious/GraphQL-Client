import { gql } from 'react-apollo';

export const createUserMutation = gql`mutation create_user($new_user: UserInput!) {
  createUser(input: $new_user) {
    firstName
    lastName
    email
  }
}`;

console.log(createUserMutation)
