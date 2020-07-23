import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TitleScreen from "./views/TitleScreen";
import NoMatchRoute from "views/NoMatchRoute";
import Services from "views/Services";
import "./styles/scss/Bootstrap.scss";
import "./styles/scss/Mobile.scss";

let isDarkModeAvailable = window.matchMedia("(prefers-color-scheme: dark)")
  .matches;

window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", (event) => {
    if (event.matches) {
      isDarkModeAvailable = true;
    } else {
      isDarkModeAvailable = false;
    }
  });
const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={TitleScreen} />
        <Route path={"/servicos"} component={Services} />
        <Route>
          <NoMatchRoute />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
