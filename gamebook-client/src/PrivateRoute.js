import React from "react";
import { Route, Redirect } from "react-router";

function PrivateRoute({ component: Component, ...rest }) {
  const isAuthenticated = sessionStorage.getItem("Authorization");

  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
}

export default PrivateRoute;
