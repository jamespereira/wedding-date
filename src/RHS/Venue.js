import React from 'react';

const Venue = () => {
    return (
        <section className="section venue" id="venue">
            <div className="mobile-bg-container">
                <div className="mobile-bg" />
            </div>
            <div className="text-container">
                <p className="title has-text-centered">Venue</p>
                <div className="separator" />
                <p>We had always dreamed of our wedding by the coast, away from Sydney, to make our day feel extra special. We found the perfect spot in the mid north coast and can't wait to celebrate with you there!</p>
                <br />
                <p>The ceremony will be at the <strong>Green Cathedral</strong>, 4451 The Lakes Way, Tiona NSW 2428. If you are driving, there is parking at the entrance or otherwise head a little further down the road and park at the function centre.</p>
                <br/>
                <p>The reception will be held on the other side of Tiona holiday park, at the <strong>Palms Pavillion</strong> function centre.</p>
                <br />
                <iframe className="map" title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13489.790466699485!2d152.51206913338956!3d-32.29982614789754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b743940c8821719%3A0x40609b49043a950!2sTiona%20NSW%202428!5e0!3m2!1sen!2sau!4v1624094001422!5m2!1sen!2sau" width="600" height="450" allowFullScreen="" loading="lazy"></iframe>
                <br />
                <p>Tiona is about 15 minutes from Forster and good 3½ hours drive from Sydney, so we suggest finding accomodation. We highly recommend booking asap as it's a beautiful area and close to Australia day.</p>
            </div>
        </section>
    );
};

export default Venue;