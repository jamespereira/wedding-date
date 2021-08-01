import React from 'react';

const Schedule = () => {
    return (
        <section className="section schedule" id="schedule">
            <div className="mobile-bg-container">
                <div className="mobile-bg" />
            </div>
            <div className="text-container">
                <p className="title has-text-centered">Schedule</p>
                <div className="separator" />
                <p className="subtitle">Saturday, January 22, 2022</p>
                <div className="scheduleContainer">
                    <div className="scheduleTime">2:30pm - 3:30pm</div>
                    <div className="scheduleContent">
                        <p className="scheduleTitle">Ceremony</p>
                        <p>Please arrive by 2:15pm to be ready for our ceremony at the Green Cathedral.</p>
                        <br />
                        <p><i>The Bridal party will be carrying out our wedding photos after the cermony finishes. Enjoy the beautiful surroundings in the meantime, including the lawns infront of the reception until the Reception begins.</i></p>
                    </div>
                </div>
                <div className="scheduleContainer">
                    <div className="scheduleTime">5:00pm - 10:00pm</div>
                    <div className="scheduleContent">
                        <p className="scheduleTitle">Reception</p>
                        <p>Make your way to the Pavillion Hall by 5pm to be ready for our wedding reception. We'll kick-off with drinks and canapes on arrival followed by the main reception proceedings at 6pm.</p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Schedule;