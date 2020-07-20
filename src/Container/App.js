import React, { Component } from "react";
import "./App.css";
import Resume from "../Components/Resume/Resume";
import { BrowserRouter as Router } from "react-router-dom";

const personalInfo = {
  name: "Harish Baskar",
  job: "Software Developer",
  skills: "React.js, Redux, Rest API, AWS",
  mail: "mailto:harishbaskar94@gmail.com",
  githuburl: "https://github.com/HarishBaskar",
  linkedinurl: "https://www.linkedin.com/in/harish-baskar-96589a80",
};

class App extends Component {
  state = {
    personalInfo,
  };

  render() {
    return (
      <Router>
        <div>
          <Resume personalInfo={this.state.personalInfo} />
        </div>
      </Router>
    );
  }
}

export default App;
