import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";

//Importing components
import App from "./components/Pages/App";
import NotFound from "./components/Pages/NotFound";
import Register from "./components/Pages/Register";
import Login from "./components/Pages/Login";
import Profile from "./components/Pages/Profile";
import Dashboard from "./components/Pages/Dashboard";

//For devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

ReactDOM.render(
  <Provider
    store={createStore(reducers, composeEnhancers(applyMiddleware(thunk)))}
  >
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/profile/:username" component={Profile} />
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    </Router>
  </Provider>,
  document.getElementById("root")
);
