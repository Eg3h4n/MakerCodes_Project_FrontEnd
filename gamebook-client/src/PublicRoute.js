import React from "react";
import { Route, Redirect } from "react-router";

function PublicRoute({ component: Component, ...rest }) {
  const isAuthenticated = sessionStorage.getItem("Authorization");

  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? (
          <Redirect to="/dashboard" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
}

export default PublicRoute;
