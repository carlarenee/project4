import React, { Component } from 'react';
import './App.css';
import SignUpForm from './SignUp/SignUpForm.jsx';
import LogInForm from './Login/LogInForm.jsx';
import Input from './Input/Input.jsx';
import Result from './Result/Result.jsx';

class App extends Component {

  constructor() {
    super();

    this.state = {
      emotion: {
        anger: '',
        disgust: '',
        fear: '',
        joy: '',
        sadness: ''
      },
      score: {
        anger: '',
        disgust: '',
        fear: '',
        joy: '',
        sadness: ''
      },
      signup: {
        username: '',
        password: ''
      },
      login: {
        loggedIn: false,
        username: '',
        password: ''
      },
      username: '',
      input: ''
    };
  }

  updateInput(event) {
    this.setState ({
      input: event.target.value
      })
    };


  getWatsonData() {
  fetch(`/api/watson?t=${this.state.input}`)
  .then(r => r.json())
  .then((tone) => {
    this.setState({
      emotion: {
        anger: tone.document_tone.tone_categories[0].tones[0].tone_name,
        disgust: tone.document_tone.tone_categories[0].tones[1].tone_name,
        fear: tone.document_tone.tone_categories[0].tones[2].tone_name,
        joy: tone.document_tone.tone_categories[0].tones[3].tone_name,
        sadness: tone.document_tone.tone_categories[0].tones[4].tone_name
      },
      score: {
        anger: tone.document_tone.tone_categories[0].tones[0].score,
        disgust: tone.document_tone.tone_categories[0].tones[1].score,
        fear: tone.document_tone.tone_categories[0].tones[2].score,
        joy: tone.document_tone.tone_categories[0].tones[3].score,
        sadness: tone.document_tone.tone_categories[0].tones[4].score
      }
    })
  })
};


////////////////////////////////////////User Auth from Pern React Template
    updateFormSignUpUsername(e) {
    console.log(e.target.value);
    this.setState({
      signup: {
        username: e.target.value,
        password: this.state.signup.password
      }
    });
  }

  updateFormSignUpPassword(e) {
    console.log(e.target.value);
    this.setState({
      signup: {
        username: this.state.signup.username,
        password: e.target.value
      }
    });
  }

  updateFormLogInUsername(e) {
    this.setState({
      login: {
        username: e.target.value,
        password: this.state.login.password
      }
    });
  }

  updateFormLogInPassword(e) {
    this.setState({
      login: {
        username: this.state.login.username,
        password: e.target.value
      }
    });
  }

  handleSignUp() {
    fetch('/api/users', {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({
        username: this.state.signup.username,
        password: this.state.signup.password
      })
    })
    .then(this.setState({
      signup: {
        username: '',
        password: ''
      }
    }))
    .then(this.alertInfo('You have signed up!'))
    .catch(err => console.log(err));
  }

  handleLogIn() {
    fetch('/api/auth', {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({
        username: this.state.login.username,
        password: this.state.login.password
      })
    })
    .then(this.setState({
      username: this.state.login.username,
      login: {
        username: '',
        password: ''
      }
    }))
    .then(this.onSuccessfulLogIn)
    .catch(err => console.log(err));
  }

  onSuccessfulLogIn(a,b) {
    console.log(a,b);
  }

  alertInfo(msg) {
    alert(msg);
  }
///////////////////////////////////////////////////////////////////////

  render(){
    return (
      <div>
      <SignUpForm
          signUpUsername={this.state.signup.username}
          signUpPassword={this.state.signup.password}
          updateFormUsername={event => this.updateFormSignUpUsername(event)}
          updateFormPassword={event => this.updateFormSignUpPassword(event)}
          handleFormSubmit={() => this.handleSignUp()}
        />
        <LogInForm
          className={this.state.login.loggedIn ? 'hidden' : ''}
          logInUsername={this.state.login.username}
          logInPassword={this.state.login.password}
          updateFormUsername={event => this.updateFormLogInUsername(event)}
          updateFormPassword={event => this.updateFormLogInPassword(event)}
          handleFormSubmit={() => this.handleLogIn()}
        />

        <h1>Attitude Adjustment</h1>
        <h3>Hi, {this.state.username}</h3>

          <h2>what's on your mind?</h2>
          <input type = "text" name = "userInput" onChange={(e) => this.updateInput(e)} />
          <input type = "submit" value = "submit" onClick={() => this.getWatsonData()} />


        <p>{this.state.emotion.anger} {this.state.score.anger}</p>
        <p>{this.state.emotion.disgust} {this.state.score.disgust}</p>
        <p>{this.state.emotion.fear} {this.state.score.fear}</p>
        <p>{this.state.emotion.joy} {this.state.score.joy}</p>
        <p>{this.state.emotion.sadness} {this.state.score.sadness}</p>
      </div>
      )
    }
  }

export default App;
