import React from "react";
import ReactDOM from "react-dom";
import RootComponent from "../../app/root_component";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<RootComponent />, div);
  ReactDOM.unmountComponentAtNode(div);
});
