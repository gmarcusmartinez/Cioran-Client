import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";

import App from "App/App";
import history from "core/history";

ReactDOM.render(
  <Router history={history}>
    <App />
  </Router>,
  document.getElementById("root")
);
