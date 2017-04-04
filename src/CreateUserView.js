import React, { Component } from 'react';
import { gql, graphql } from 'react-apollo'

import { createUserMutation } from './mutations/users';

const CreateUserView = ({data, mutate}) => {
	return (
		<div>
			<h1> Create a user </h1>
			<input id='firstname' placeholder='firstname'/>
			<input id='lastname' placeholder='lastname'/>
			<input id='email' placeholder='email'/>
			<input id='accountids' placeholder='account ids'/>
			<button onClick={
				() => mutate({
					variables: {
						new_user: buildNewUser()
					}
				})
			}>Create User!</button>
		</div>
	);
};

function buildNewUser(){
	return {
		first_name: document.getElementById('firstname').value,
		last_name: document.getElementById('lastname').value,
		email: document.getElementById('email').value,
		accountIds: document.getElementById('accountids').value.split(',').map(x => parseInt(x, 10)),
	}
}



export default graphql(createUserMutation)(CreateUserView);
