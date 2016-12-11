import React, { Component } from 'react';
import style from './SignUpForm.css';

class SignUpForm extends Component {

  render(){
    return (
      <div className={this.props.signUpBoxDisplay}>
        <div className="signUpBoxContent">
        <h2>Welcome to Weather Report</h2>
        <p>Tell me more about yourself:</p>
        <input
          type="text"
          placeholder="username"
          value={this.props.signUpUsername}
          onChange={this.props.updateFormUsername}
        />
        <input
          type="password"
          placeholder="password"
          value={this.props.signUpPassword}
          onChange={this.props.updateFormPassword}
        />

        <button onClick={this.props.handleFormSubmit}>
          SignUp!
        </button>
      </div>
      </div>
    );
  }
}

export default SignUpForm;
