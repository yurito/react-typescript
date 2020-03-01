import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./views/Home";
import NoMatchRoute from "views/NoMatchRoute";
const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path={"/projetos"} component={Home} />
        <Route>
          <NoMatchRoute />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
