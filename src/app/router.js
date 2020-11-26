import React from "react";
import { Route, Switch } from "react-router-dom";
import App from "../pages/main/App";
import NotFound from "../pages/404/404";

class Router extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/pastTrials" component={() => <>PAST TRIALS</>} />
        <Route exact path="/howItWorks" component={() => <>HOW IT WORKS</>} />
        <Route
          exact
          path="/logInSignUp"
          component={() => <>LOG IN / SIGN UP</>}
        />
        <Route component={NotFound} />
      </Switch>
    );
  }
}

export default Router;
