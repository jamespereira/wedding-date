import React, { Component } from 'react';

class SubmitForm extends Component {

    state = {
        name: '',
        address: '',
        showMessage: false,
        successMessage: false
    }

    handleInputChange(event) {
        this.setState({ [event.target.name]: event.target.value })
    }

    validateInputs() {
        return this.state.name !== '' && this.state.address !== '' ;
    }

    handleSubmit = (e) => {
        e.preventDefault();

        if(this.validateInputs()) {
            this.props.onFormSubmit(this.state.name, this.state.address);
            this.setState({ name: '', address: '', successMessage: true });
        } else {
            this.setState({successMessage : false});
        }
        this.setState({showMessage : true});
        return;
    }

    render() {
        let message;
        const {name, address, showMessage, successMessage} = this.state;
        if (showMessage && successMessage) {
            message = <div className="form-message success"><p>Thank you!</p></div>
        }
        else if (showMessage && !successMessage) {
            message = <div className="form-message error"><p>Please fill out both fields</p></div>
        }
        return (
            <form onSubmit={this.handleSubmit} className="guest-form">
                <div className="field">
                    <div className="control is-expanded">
                        <input className="input" type="text" placeholder="Name" 
                            name="name"
                            value={name}
                            onChange={this.handleInputChange.bind(this)}
                        />
                    </div>
                </div>
                <div className="field">
                    <div className="control is-expanded">
                        <input className="input" type="text" placeholder="Postal address" 
                            name="address"
                            value={address}
                            onChange={this.handleInputChange.bind(this)}

                        />
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