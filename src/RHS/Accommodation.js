import React from 'react';

const Accommodation = () => {
    return (
        <section className="section accommodation" id="accommodation">
            <div className="mobile-bg-container">
                <div className="mobile-bg" />
            </div>
            <div className="text-container">
                <p className="title has-text-centered">Where to stay</p>
                <div className="separator" />

                <div className="accommodation-container">
                    <div className="accommodation-image-container">
                        <figure className="accommodation-image" id="tiona" />
                    </div>
                    <h2 className="accommodation-header">Tiona Holiday Park:</h2>
                    <p>Our venue is located next to Tiona Holiday Park with a range of cabins, villas and glamping options. This is the easiest option for accommodation as you won't need to worry about any travel considerations on the day!</p>
                    <p>Our venue also offers a discount code for our guests. Please use: <b>DUOPER220122</b> when <a href="https://www.tiona.com.au/accommodation/">booking accommodation</a> for 10% off. If it's not available on the website you can call on (02) 6554 0291 to book now.</p>
                </div>

                <br />


                <div className="accommodation-container">
                    <div className="accommodation-image-container">
                        <figure className="accommodation-image" id="pacific-palms" />
                    </div>
                    <h2 className="accommodation-header">Pacific Palms:</h2>
                    <p>If you are looking for other accommodation in the Palms area some suggestions provided by the venue include:</p>
                    <ul>
                        <li><a href="https://blueysmotel.com.au/">Blueys Motel</a></li>
                        <li><a href="https://blueysretreat.com.au/">Blueys Retreat</a></li>
                        <li><a href="https://www.pacificpalmscaravanpark.com.au/">Pacific Palms Caravan Park</a></li>
                        <li><a href="https://www.mobys.com.au/">Moby’s </a></li>
                        <li><a href="https://pacificpalmsholidays.com.au/">Pacific Palms Holidays</a></li>
                    </ul>
                </div>

                <br />

                <div className="accommodation-container">
                    <div className="accommodation-image-container">
                        <figure className="accommodation-image" id="forster" />
                    </div>
                    <h2 className="accommodation-header">Forster</h2>
                    <p>Alternatively, Forster is only a 15 minute drive from Tiona and there are plenty of hotel, motel, and cottages and bed and breakfasts <a href="https://www.visitnsw.com/destinations/north-coast/forster-and-taree-area/forster/accommodation">accommodation options</a> in Forster.</p>
                </div>

                <br />

                <p>We will be arranging a bus pick up from the Pacific Palms area & Forster based on the amount of interest. So could we please ask that you let us know where you think you'll be staying when filling out your RSVP below.</p>
            </div>
        </section>
    );
};

export default Accommodation;