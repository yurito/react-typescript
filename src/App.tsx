import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./views/Home";
import NoMatchRoute from "views/NoMatchRoute";
import Services from "views/Services";
import "./styles/scss/Bootstrap.scss";
import "./styles/scss/Mobile.scss";

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path={"/servicos"} component={Services} />
        <Route>
          <NoMatchRoute />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
