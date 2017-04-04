import React, { Component } from 'react';
import { gql, graphql } from 'react-apollo'

import { GetAllAccountsQuery } from './queries/accounts';

const AccountsView = ({data}) => {
	if(data.loading){
		return (
			<div>
				<h1>loading ...</h1>
			</div>
		)
	}

	return (
		<div>
			<h1> Accounts </h1>
			{
				mapAccounts(data.getAllAccounts)
			}
			<button onClick={() => data.refetch()}>Update!</button>
		</div>
	);
};

function mapAccounts(accounts){
	return  accounts.map(account => (
		<div className='view'>
			<p> { account.id }</p>
			<p> { account.name }</p>
			<p> { account.country }</p>
			{
				account.users.map(user => (
					<div className='view small'>
						<p>{user.email}</p>
					</div>
				))
			}
		</div>
	))
}

export default graphql(GetAllAccountsQuery)(AccountsView);
