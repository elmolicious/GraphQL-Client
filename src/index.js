import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider, ApolloClient, createNetworkInterface } from 'react-apollo'
import {BrowserRouter as Router,Route, NavLink} from 'react-router-dom';

import UsersView from './UsersView';
import UserView from './UserView';
import AccountsView from './AccountsView'
import CreateUserView from './CreateUserView'

import './styles.css';

const client = new ApolloClient({
  networkInterface: createNetworkInterface({ uri: 'http://localhost:7000/graphql'})
})

ReactDOM.render(
	<ApolloProvider client={client}>
	    <Router>
	      <div>
	        <ul className="navigation">
	          <li>
		            <NavLink
		              exact
		              activeClassName="active"
		              to="/accounts"
		            >
		              All Accounts
		            </NavLink>
					</li>
				<li>
	  	            <NavLink
	  	              exact
	  	              activeClassName="active"
	  	              to="/users"
	  	            >
	  	              All Users
	  	            </NavLink>
	          	</li>
				<li>
	  	            <NavLink
	  	              exact
	  	              activeClassName="active"
	  	              to="/create/user"
	  	            >
	  	              Create User
	  	            </NavLink>
	          	</li>
				<li>
					<NavLink
					  exact
					  activeClassName="active"
					  to="/user"
					>
					  View User
					</NavLink>
				</li>
	        </ul>
	        <div className="content">
	          <Route
	            exact
	            path="/"
	            component={UsersView}
	          />
			  <Route
	            exact
	            path="/users"
	            component={UsersView}
	          />
			  <Route
	            exact
	            path="/user"
	            component={UserView}
	          />
			  <Route
	            exact
	            path="/accounts"
	            component={AccountsView}
	          />
			  <Route
	            exact
	            path="/create/user"
	            component={CreateUserView}
	          />
	        </div>
	      </div>
	    </Router>
	</ApolloProvider>,
  document.getElementById('root'),
);
