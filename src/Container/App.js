import React, {Component} from 'react';
import './App.css';
import Resume from '../Components/Resume/Resume'

const personalInfo = {
    name: "Harish Baskar",
    job: "Software Developer",
    description: "I have over 4 years of experience working in IT. Currently, I work as a Software Engineer at Thomson Reuters, Bangalore",
    skills: "React.js, Redux, Rest API, AWS",
    mail: "mailto:harishbaskar94@gmail.com",
    githuburl: "https://github.com/HarishBaskar",
    linkedinurl: "https://www.linkedin.com/in/harish-baskar-96589a80"
}

class App extends Component{

  state = {
    personalInfo
  }

  render(){
    return (
      <div className="App">
        <Resume personalInfo={this.state.personalInfo}/>
      </div>
    );
  } 
}

export default App;
