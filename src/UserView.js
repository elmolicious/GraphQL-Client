import React, { Component } from 'react';
import { gql, graphql } from 'react-apollo'

import { GetUserQuery } from './queries/users';

let UserView = ({data: { getUser, loading }}) => {
	console.log(getUser)
	if(loading){
		return (<h1>Loading ... </h1>)
	}
	return (
		<div className='view'>
			<p> { getUser.email }</p>
			<p> { getUser.firstName }</p>
			<p> { getUser.lastName }</p>
		</div>
	);
};

UserView = graphql(GetUserQuery,{
	options: props => ({
		variables: {
			user_id: props.email || 'robin@genske.com'
		}
	})
})(UserView);

class UserViewWrapper extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			email: 'robin@genske.com'
		}
	}

	render(){
		return (
			<div>
				<h1> Get a user </h1>
				<input id='email' placeholder='email' onBlur={() => this.setState({email: document.getElementById('email').value})}/>
				<UserView email={this.state.email} />
			</div>
		);
	}
}

export default UserViewWrapper;
