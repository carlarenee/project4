import React, { Component } from 'react';
import './App.css';
import SignUpForm from './SignUp/SignUpForm.jsx';
import LogInForm from './Login/LogInForm.jsx';

class App extends Component {

  constructor() {
    super();

    this.state = {
      watsonData: {},
      signup: {
        username: '',
        password: ''
      },
      login: {
        loggedIn: false,
        username: '',
        password: ''
      }
    };
  }

  getWatsonData() {
  fetch(`/api/watson`)
  .then(r => r.json())
  .then((tone) => {
    this.setState({
      watsonData: tone.document_tone.tone_categories
    })
    console.log('yoyoyo', this.state.watsonData);
  })
};


// { tones:
//    [ { score: 0.058084, tone_id: 'anger', tone_name: 'Anger' },
//      { score: 0.02035, tone_id: 'disgust', tone_name: 'Disgust' },
//      { score: 0.028603, tone_id: 'fear', tone_name: 'Fear' },
//      { score: 0.571004, tone_id: 'joy', tone_name: 'Joy' },
//      { score: 0.363121, tone_id: 'sadness', tone_name: 'Sadness' } ],
//   category_id: 'emotion_tone',
//   category_name: 'Emotion Tone' }


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

        <h1>Heyo</h1>
        <form>
          <input type="text" />
          <input type="submit" />
        </form>
        <button onClick={() => this.getWatsonData()}>get watson info</button>
      </div>
      )
    }
  }

export default App;
