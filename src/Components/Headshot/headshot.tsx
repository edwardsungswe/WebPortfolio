import React, { useState, useEffect } from 'react';
import Tilty from 'react-tilty';
import './headshot.css';
import Qwe from './ed.png' 
const Headshot = () => {

    const [scrollY, setScrollY] = useState(0);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
        console.log(window.scrollY)
      };
    }, []);

  return (
    //<Tilty glare scale={0.1} maxGlare={1.1} perspective={3000}>
    <div className='headshot-container'>
      <img src={"./ed.png"} alt="Your Name" className="Face"/>
      <h1>Edward Sung</h1>
      <h2>Software Engineer</h2>
    </div>
    //</Tilty>
  );
};

export default Headshot;
