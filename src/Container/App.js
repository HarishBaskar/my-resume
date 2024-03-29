import React, { Component } from "react";
import "./App.css";
import Resume from "../Components/Resume/Resume";
import { BrowserRouter as Router, Route } from "react-router-dom";
import * as ROUTES from "../Constants/Routes";
import About from "../Pages/About/About";
import Navigation from "../Components/Resume/Navigation/index";
import Projects from "../Pages/Projects/Projects";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="wallpaper"></div>
        <div className="content">
          <Navigation />
          <Route path={ROUTES.PROJECTS_PAGE} component={Projects} />
          <Route path={ROUTES.ABOUT_PAGE} component={About} />
          <Route exact path={ROUTES.HOME_PAGE} component={Resume} />
        </div>
      </Router>
    );
  }
}

export default App;
