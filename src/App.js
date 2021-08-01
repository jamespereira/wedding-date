import React, { useEffect, useState } from 'react';

import Landing from './RHS/Landing';
// import Story from './RHS/Story';
import Venue from './RHS/Venue';
import Accommodation from './RHS/Accommodation';
import Schedule from './RHS/Schedule';
import Rsvp from './RHS/Rsvp';
import Video from './videos/beach.mp4';
import Poster from './images/waves-bg.jpg';
import TextContainer from './LHS/TextContainer';


import './App.css';

export default function App() {
  const [countdown, setCoundown] = useState(0)


  useEffect(() => {
    getCountdown();
    handleScroll();
  })

  function handleScroll() {
    document.addEventListener("scroll", () => {

        var landing = document.getElementById("landing");
        var venue = document.getElementById("venue");
        var accommodation = document.getElementById("accommodation");
        var schedule = document.getElementById("schedule");
        if (window.scrollY < (landing.offsetTop + landing.offsetHeight)) {
          document.querySelector(".bg-first").style.opacity = 1;
          document.querySelector(".bg-second").style.opacity = 0;
        } else if (window.scrollY > (landing.offsetTop + landing.offsetHeight - 200) && window.scrollY < (venue.offsetTop + venue.offsetHeight))  {
              document.querySelector(".bg-first").style.opacity = 0;
              document.querySelector(".bg-second").style.opacity = 1;
              document.querySelector(".bg-third").style.opacity = 0;

        } else if (window.scrollY > (venue.offsetTop + venue.offsetHeight - 200) && window.scrollY < (accommodation.offsetTop + accommodation.offsetHeight))  {
              document.querySelector(".bg-second").style.opacity = 0;
              document.querySelector(".bg-third").style.opacity = 1;
              document.querySelector(".bg-fourth").style.opacity = 0;

        } else if (window.scrollY > (accommodation.offsetTop + accommodation.offsetHeight - 400) && window.scrollY < (schedule.offsetTop + schedule.offsetHeight))  {
              document.querySelector(".bg-third").style.opacity = 0;
              document.querySelector(".bg-fourth").style.opacity = 1;
              document.querySelector(".bg-fifth").style.opacity = 0;

        } 
        // else if (window.scrollY > (schedule.offsetTop + schedule.offsetHeight - 400))  {
        //       document.querySelector(".bg-fourth").style.opacity = 0;
        //       document.querySelector(".bg-fifth").style.opacity = 1;

        // }

    })
  };


  function getCountdown() {
    var formattedDate = new Date("Jan 22 2022 15:30:00 GMT+1000").getTime();

    var newDate = setInterval(function () {
      var now = new Date().getTime();
      var remaining = formattedDate - now;

      var days = Math.floor(remaining / (1000 * 60 * 60 * 24));
      var hours = Math.floor((remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((remaining % (1000 * 60)) / 1000);

      newDate = `${days} Days ${hours} Hrs ${minutes} Mins ${seconds} Secs`;
      setCoundown(newDate);

      if (remaining < 0) {
        clearInterval(newDate);
      }
    }, 1000)
  }

  return (
    <div className="section p-0">
      <div className="main-content">
        <div className="columns m-0">



          <div className="column is-three-fifths lhs parallax">
            <div className="lhs-bg bg-first">
              <div className="bg__video-overlay" />
              <video loop muted autoPlay poster={Poster} className="fullscreen-bg__video">
                <source src={Video} type="video/mp4" />
              </video>
            </div>
            <div className="lhs-bg bg-second" />
            <div className="lhs-bg bg-third" />
            <div className="lhs-bg bg-fourth" />
            <div className="lhs-bg bg-fifth" />


            <TextContainer />
          </div>

          <div className="column is-two-fifths rhs p-0">
            <Landing countdown={countdown} />
            {/* <Story /> */}
            <Venue />
            <Accommodation />
            <Schedule />
            <Rsvp />




          </div>
        </div>
      </div>
    </div >
  );
}