import React from 'react';
import Navbar from './components/Navbar.js';
import timetable from './Timetable.png';
import demo from './demo.png';
import arrow from './arrow.png';
import './Home.css';

function Home() {

  return (

      <div>

        <Navbar />

        <img src = {timetable} className = 'timetable' alt = 'timetable' />
        <img src = {demo} className = 'demo' alt = 'demo' />
        <img src = {arrow} className = 'arrow' alt = 'arrow' />
        <p className = 'caption'> Convert your timetable to a class schedule on google calendar!  </p>


  

      </div>
  );
}
  
  export default Home;
  