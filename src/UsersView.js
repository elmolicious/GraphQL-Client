import React, { Component } from 'react';
import { gql, graphql } from 'react-apollo'

import { GetAllUsersQuery } from './queries/users';

const UsersView = ({data}) => {
	if(data.loading){
		return (
			<div>
				<h1>loading ...</h1>
			</div>
		)
	}

	return (
		<div>
			<h1> User </h1>
			{
				mapUsers(data.getAllUsers)
			}
			<button onClick={() => data.refetch()}>Update!</button>
		</div>
	);
};

function mapUsers(users){
	return  users.map(user => (
		<div className='view'>
			<p> { user.email }</p>
			<p> { user.firstName }</p>
			<p> { user.lastName }</p>
		</div>
	))
}

export default graphql(GetAllUsersQuery)(UsersView);
