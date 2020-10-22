import React from "react";
import "styles/main.scss";
import { Route, Switch } from "react-router-dom";

import Landing from "pages/Landing";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Landing} />
      </Switch>
    </>
  );
}

export default App;
