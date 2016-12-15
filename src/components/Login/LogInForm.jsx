import React, { Component } from 'react';
import style from './LogInForm.css';

// create a React Component called _App_
class LogInForm extends Component {

  render(){
    return (
      <div className={this.props.logInBoxDisplay}>
        <div className="logInBoxContent">
          <h2>Go ahead and type that in one more time</h2>
          <input
            type="text"
            placeholder="username"
            value={this.props.logInUsername}
            onChange={this.props.updateFormUsername}
          />
          <input
            type="password"
            placeholder="password"
            value={this.props.logInPassword}
            onChange={this.props.updateFormPassword}
          />
          <button onClick={this.props.handleFormSubmit}>
          Log In!
        </button>
        </div>
      </div>
    );
  }
}

export default LogInForm;
