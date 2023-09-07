import React from 'react';
import logo from './logo.svg';
import './App.css';
import Headshot from './Components/Headshot/headshot';
import AboutMe from './Components/AboutMe/about';
import WorkExperience from './Components/WorkExperience/workExperience';
import VerticalTab from './Components/WorkExperience/workExperience';
import Test from './Components/Test/test'
import resumeData from './Components/WorkExperience/workExperienceData';
function App() {
  const transformedData = resumeData.jobs.map(job => ({
    position: job.expData.position,
    period: job.expData.period,
    details: job.expData.details,
    expData: {
      company: job.expData.company,
    },
  }));
  return (
    <div className="App">
      <Headshot/>
      <AboutMe/>
      <VerticalTab data ={transformedData}/>
      <AboutMe/>
    
    </div>
  );
}

export default App;
