import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
//import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
//import reducers from "./reducers";

//connected-react-router imports
import { routerMiddleware, ConnectedRouter } from "connected-react-router";
import { Route, Switch } from "react-router";
import { createBrowserHistory } from "history";
import createRootReducer from "./reducers";

//Importing components
import App from "./components/Pages/App";
import NotFound from "./components/Pages/NotFound";
import Register from "./components/Pages/Register";
import Login from "./components/Pages/Login";
//import Steam from "./components/Pages/Steam";
import Profile from "./components/Pages/Profile";
import Dashboard from "./components/Pages/Dashboard";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

//For devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//connected-react-router configuration
const history = createBrowserHistory();

function configureStore(preloadedState) {
  const store = createStore(
    createRootReducer(history), // root reducer with router state
    preloadedState,
    composeEnhancers(
      applyMiddleware(
        routerMiddleware(history), // for dispatching history actions
        thunk // ... other middlewares ...
      )
    )
  );
  return store;
}

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Switch>
          <PublicRoute exact path="/" component={App} />
          <PublicRoute exact path="/register" component={Register} />
          <PublicRoute exact path="/login" component={Login} />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          <PrivateRoute exact path="/profile/:username" component={Profile} />
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);
