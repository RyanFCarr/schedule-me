import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import AuthContext from '../../contexts/AuthContext';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <AuthContext.Consumer>
    {({ authToken, user }) => (
      <Route
        {...rest}
        render={props => {
          if (Object.keys(rest).includes("page")) props.page = rest.page;
          return authToken ? (
            <Component {...props} user={user} />
          ) : (
              <Redirect
                to={{
                  pathname: "/login",
                  state: { from: props.location }
                }}
              />
            )
        }}
      />
    )}
  </AuthContext.Consumer>
);

export default PrivateRoute;
