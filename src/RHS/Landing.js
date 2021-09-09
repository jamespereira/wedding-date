import React from 'react';

const Landing = (props) => {
    return (
        <section className="section landing has-text-centered" id="landing">
            <div className="pear-bg-header">
                <figure className="pear-bg" />
            </div>

            <div className="text-container">
                <h1 className="title is-3 pb-4">TIONA, NSW</h1>
                <h2 className="date subtitle is-5">Saturday, 22 January 2022</h2>
                <p className="location subtitle is-6">{props.countdown}</p>
                <ul className="contents">
                    <li><a href="#venue"><p>Our Venue</p></a></li>
                    <li><a href="#accommodation"><p>Where to stay</p></a></li>
                    <li><a href="#schedule"><p>Schedule</p></a></li>
                    <li><a href="#rsvp"><p>RSVP</p></a></li>
                </ul>
                
                
                
            </div>

            <div className="pear-bg-footer">
                <figure className="pear-bg" />
            </div>

        </section>
    );
};

export default Landing;