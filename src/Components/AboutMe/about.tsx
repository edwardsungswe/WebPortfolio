// AboutMe.js
import React from 'react';
import './about.css';

const AboutMe = () => {
  const randomWords = 'I grew up in the picturesque city of Nashik and like every kid, I was always fascinated towards computers and technology in general. After few years of using my PC to just play games for hours on end, I stumbled upon programming when a tech magazine included a tool called GameMaker on their CD (those wonderful times!) and I fiddled with it to create my own games.I was hooked, and soon was creating small apps and utilities, one of which ended up being distributed on the DVD of the same magazine. Little did I know that the curiosity would lead me to finding my true Ikigai and lead me to my professional and academic pursuit.'
  return (
    <div className="about-me-container">
      <div className="about-me-content">
        <p>{randomWords}</p>
      </div>
      <div className="about-me-image">
        <img src="random-image-url.jpg" alt="Random" />
      </div>
    </div>
  );
};

export default AboutMe;
