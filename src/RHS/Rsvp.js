import React from 'react';
import SubmitForm from '../SubmitForm/SubmitForm';

const Rsvp = () => {
    return (
        <section className="section rsvp" id="rsvp">
            <div className="mobile-bg-container">
                <div className="mobile-bg" />
            </div>
            <div className="text-container">
                <p className="title has-text-centered">RSVP</p>
                <div className="separator" />
                <p className="rsvpSubtitle">Use the form below to let us know if you can make it by 1 October 2021.</p>
                <p className="rsvpSubtitle">Please fill this in individually, rather than as a couple.</p>
                <SubmitForm />
            </div>
        </section>
    );
};

export default Rsvp;