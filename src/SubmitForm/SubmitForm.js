import React, { Component } from 'react';
import Base from '../Base/Base';


class SubmitForm extends Component {

    state = {
        name: '',
        attending: '',
        dietary: '',
        showMessage: false,
        successMessage: false,
        bussing: false,
        staying: ''
    }

    handleInputChange(event) {
        this.setState({ [event.target.name]: event.target.value })
        if(this.state.showMessage) {
            this.setState({ showMessage: false})
        }
    }

    validateInputs() {
        return this.state.name !== '' && this.state.attending !== '';
    }

    handleSubmit = (e) => {
        const { name, attending, dietary, bussing, staying } = this.state;
        e.preventDefault();

        if (this.validateInputs()) {
            this.pushToFirebase(name, attending, dietary, bussing, staying);
            this.setState({ name: '', attending: '', dietary: '', bussing: false, staying: '', successMessage: true });
        } else {
            this.setState({ successMessage: false });
        }
        this.setState({ showMessage: true });
        return;
    }

    pushToFirebase = (name, attending, dietary, bussing, staying) => {
        Base.push('rsvp', {
            data: { name: name, attending: attending, dietary: dietary, bussing: bussing, staying: staying }
        });

    }

    render() {
        let message;
        const { name, attending, dietary, showMessage, successMessage, bussing } = this.state;
        if (showMessage && successMessage) {
            message = <div className="form-message success"><p>Thank you!</p></div>
        }
        else if (showMessage && !successMessage) {
            message = <div className="form-message error"><p>*'Your name' and 'Attending' are required</p></div>
        }
        return (
            <form onSubmit={this.handleSubmit} className="guest-form">
                <div className="field">
                    <div className="control is-expanded">
                        <label className="fieldLabel">Your name:</label>
                        <input className="input" type="text" placeholder="Full Name"
                            name="name"
                            value={name}
                            onChange={this.handleInputChange.bind(this)}
                        />
                    </div>
                </div>
                <div className="field">
                    <div className="control is-expanded">
                        <label className="fieldLabel">Attending:</label>
                        <label className="labelContainer">Can't wait!
                            <input onChange={() => this.setState({ attending: true})} type="radio" checked={attending} id="yes" name="attending" value="true" />
                            <span className="checkmark"></span>

                        </label>

                        <label className="labelContainer">I'm so so sorry, please forgive me
                            <input onChange={() => this.setState({ attending: false, bussing: false })} type="radio" checked={!attending} id="no" name="attending" value="false" />
                            <span className="checkmark"></span>
                        </label>
                    </div>
                </div>
                <div className="field">
                    <div className="control">
                        <label className="fieldLabel">Dietary requirements:</label>
                        <textarea disabled={!attending} className="textarea" type="textarea" name="dietary" placeholder="eg. vegetarian" onChange={this.handleInputChange.bind(this)} value={dietary} />
                    </div>
                </div>
                <div className="field">
                    <div className="control is-expanded">



                        <label disabled={!attending} className="labelContainer radioContainer">
                            <input  disabled={!attending} checked={bussing} onChange={() => this.setState({ bussing: !bussing })} type="checkbox" id="bussing" name="bussing" value="Yes" />
                            I would you like a bus pickup & drop off
                            <span className="checkmark"></span>
                        </label>


                        {
                            bussing ? (
                                <div className="bussingContainer">

                                    <label className="fieldLabel">I'm likely staying at:</label>
                                    <label className="labelContainer">Pacific Palms
                            <input onChange={this.handleInputChange.bind(this)} type="radio" id="pacificPalms" name="staying" value="Pacific Palms" />
                                        <span className="checkmark"></span>
                                    </label>

                                    <label className="labelContainer">Forster
    <input onChange={this.handleInputChange.bind(this)} type="radio" id="forster" name="staying" value="Forster" />
                                        <span className="checkmark"></span>
                                    </label>
                                </div>
                            ) : null
                        }

                        <br />
                    </div>
                </div>
                <div className="field">
                    <div className="control">
                        <button className="button is-fullwidth is-outlined is-primary">
                            Submit
                  </button>
                    </div>
                </div>
                {message}

            </form>
        );
    }
}

export default SubmitForm;