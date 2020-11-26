import React from "react";
import { Route, Switch } from "react-router-dom";
import App from "../pages/main/App";
import NotFound from "../pages/404/404";

class Router extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={App} />
        <Route component={NotFound} />
      </Switch>
    );
  }
}

export default Router;
