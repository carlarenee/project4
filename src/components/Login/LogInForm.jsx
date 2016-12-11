import React, { Component } from 'react';
import style from './LogInForm.css';

// create a React Component called _App_
class LogInForm extends Component {

  render(){
    return (
      <div className={this.props.logInBoxDisplay}>
        <div className="logInBoxContent">
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
