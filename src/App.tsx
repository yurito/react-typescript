import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TitleScreen from "./views/TitleScreen";
import NoMatchRoute from "views/NoMatchRoute";
import HomeScreen from "./views/Home/HomeScreen";
import Services from "views/Services";
import "./styles/scss/Bootstrap.scss";
import "./styles/scss/Mobile.scss";
import { AppConfig } from "./types/AppConfig";

export class App extends Component<{}, AppConfig> {
  setTheme(themeName: String = "") {
    this.setState({
      theme: themeName,
    });
  }

  getSystemTheme() {
    let theme = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
    this.setTheme(theme);
  }
  componentWillMount() {
    this.getSystemTheme();
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (event) => {
        if (event.matches) {
          this.setTheme("dark");
        } else {
          this.setTheme("light");
        }
      });
  }

  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route path="/" exact>
            <TitleScreen theme={this.state.theme} />
          </Route>
          <Route path={"/servicos"} component={Services} />
          <Route path={"/home"}>
            <HomeScreen theme={this.state.theme} />
          </Route>
          <Route>
            <NoMatchRoute />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
