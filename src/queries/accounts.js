import { gql } from 'react-apollo';

export const GetAllAccountsQuery = gql`query get_all_accounts {
  getAllAccounts {
    name
	id
	country
    users {
      email
    }
  }
}`

export const GetAccountQuery = gql`query get_account($account_id: ID!, $show_users: Boolean!) {
  getAccount(id: $account_id) {
    id
    name
    country
    users @include(if: $show_users) {
      firstName
      lastName
      email
      accountIds
    }
  }
}`
