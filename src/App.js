import React, { Component } from 'react';
import SubmitForm from './SubmitForm/SubmitForm';
import Base from './Base/Base';


import './App.css';

class App extends Component {

  // state = {
  //   guests: []
  // }

  handleSubmit = (name, address) => {
    var guestRef = Base.push('guests', {
      data: { name: name, address: address }
    });

  }

  render() {
    return (
      <section className="section p-0">
        <div className="main-content">
          <div className="columns m-0">



            <div className="column is-three-fifths lhs has-text-centered parallax">
              <div className="text-container">
                <p className="title">save our date</p>
                <p className="subtitle is-spaced is-1">22  .  1  .  22</p>
              </div>
            </div>

            <div className="column is-two-fifths rhs has-text-centered p-0">
              <div className="pear-bg-header">
                <div className="pear-bg"></div>
              </div>

              <div className="text-container px-6">
                <h1 className="title is-3 pb-4">Sylvia & James</h1>
                <h2 className="date subtitle is-5">Saturday the 22nd of January, 2022</h2>
                <p className="location subtitle is-6">Tiona, NSW</p>
                <p className="subtitle is-6">Please enter your name and postal address below, so that we can mail you an invitation later this year!</p>

                <SubmitForm onFormSubmit={this.handleSubmit} />
              </div>

              <div className="pear-bg-footer">
                <div className="pear-bg"></div>
              </div>

            </div>
          </div>
        </div>
      </section >
    );
  }
}

export default App;