import React, { Component } from "react";
import "./App.css";
import Resume from "../Components/Resume/Resume";
import { BrowserRouter as Router, Route } from "react-router-dom";
import * as ROUTES from "../Constants/Routes";
import Projects from "../Pages/Projects";
import About from "../Pages/About";
import Navigation from "../Components/Resume/Navigation/index";

class App extends Component {
  render() {
    return (
      <Router>
        <Navigation />
        <div className="wallpaper"></div>
        <div className="content">
          <Route path={ROUTES.HOME_PAGE} component={Resume} />
        </div>
        <Route exact path={ROUTES.PROJECTS_PAGE} component={Projects} />
        <Route path={ROUTES.ABOUT_PAGE} component={About} />
      </Router>
    );
  }
}

export default App;
