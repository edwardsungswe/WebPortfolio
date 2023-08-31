import React from 'react';
import logo from './logo.svg';
import './App.css';
import Headshot from './Components/Headshot/headshot';
import AboutMe from './Components/AboutMe/about';
import WorkExperience from './Components/WorkExperience/workExperience';
function App() {
  return (
    <div className="App">
      <Headshot/>
      <AboutMe/>
      <WorkExperience/>
    </div>
  );
}

export default App;
