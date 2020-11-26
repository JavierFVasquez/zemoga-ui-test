import React from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { light } from "../styles/themes";
import { BrowserRouter as Router } from "react-router-dom";

import RouterItems from "./router";
import "../i18n/config";
import { Normalize } from "../styles/themes";

class RootComponent extends React.Component {
  render() {
    return (
      <ThemeProvider theme={light}>
        <Normalize />
        <Router>
          <RouterItems />
        </Router>
      </ThemeProvider>
    );
  }
}

export default RootComponent;
