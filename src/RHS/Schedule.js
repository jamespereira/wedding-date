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
                    <aside className="scheduleTime">2:30pm - 3:30pm</aside>
                    <div className="scheduleContent">
                        <p className="scheduleTitle">Ceremony</p>
                        <p>Please arrive by 2:15pm to be ready for our ceremony at the Green Cathedral.</p>
                        <br />
                        <p><i>Please enjoy the surroundings until the reception at the Pavillion Hall at 5.00 pm whilst the bridal party take a break for photographs.</i></p>
                    </div>
                    <aside className="scheduleTime">5:00pm - 10:00pm</aside>
                    <div className="scheduleContent">
                        <p className="scheduleTitle">Reception</p>
                        <p>Make your way to the Pavillion Hall by 5pm to be ready for our wedding reception. We'll kick-off with drinks and canapes on arrival followed by the main reception proceedings at 6pm.</p>
                    </div>
                </div>
                <br />
                <p><i>Dress code for the day will be cocktail attire. <br />
                Regarding gifts, we'll have a wishing well at the reception to help with our honeymoon later this year when it's safer to travel.</i></p>

            </div>
        </section>
    );
};

export default Schedule;