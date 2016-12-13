import React, { Component } from 'react';
import './App.css';
import SignUpForm from './SignUp/SignUpForm.jsx';
import LogInForm from './Login/LogInForm.jsx';
import Result from './Result/Result.jsx';
import MyWeek from './MyWeek/MyWeek.jsx';
import Quote from './Quote/Quote.jsx';

class App extends Component {

  constructor() {
    super();

    this.state = {
      emotion: {
        anger: '',
        disgust: '',
        fear: '',
        joy: '',
        sadness: '',
      },
      score: {
        anger: '',
        disgust: '',
        fear: '',
        joy: '',
        sadness: '',
      },
      daySevenAverage: {
        anger: '',
        disgust: '',
        fear: '',
        joy: '',
        sadness: '',
      },
      daySixAverage: {
        anger: '',
        disgust: '',
        fear: '',
        joy: '',
        sadness: '',
      },
      dayFiveAverage: {
        anger: '',
        disgust: '',
        fear: '',
        joy: '',
        sadness: '',
      },
      dayFourAverage: {
        anger: '',
        disgust: '',
        fear: '',
        joy: '',
        sadness: '',
      },
      dayThreeAverage: {
        anger: '',
        disgust: '',
        fear: '',
        joy: '',
        sadness: '',
      },
      dayTwoAverage: {
        anger: '',
        disgust: '',
        fear: '',
        joy: '',
        sadness: '',
      },
      dayOneAverage: {
        anger: '',
        disgust: '',
        fear: '',
        joy: '',
        sadness: '',
      },
      signup: {
        username: '',
        password: '',
      },
      login: {
        loggedIn: false,
        username: '',
        password: '',
      },
      username: '',
      input: '',
      bigContainer: 'hidden',
      signUpBoxDisplay: 'signUpBox',
      logInBoxDisplay: 'hidden',
    };
  }


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
          sadness: tone.document_tone.tone_categories[0].tones[4].tone_name,
        },
        score: {
          anger: tone.document_tone.tone_categories[0].tones[0].score,
          disgust: tone.document_tone.tone_categories[0].tones[1].score,
          fear: tone.document_tone.tone_categories[0].tones[2].score,
          joy: tone.document_tone.tone_categories[0].tones[3].score,
          sadness: tone.document_tone.tone_categories[0].tones[4].score,
        },
      });
    });
  }

  updateInput(event) {
    this.setState({
      input: event.target.value,
    });
  }

  saveWatsonData(anger, disgust, fear, joy, sadness, username) {
    return fetch(`/api/database`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          anger: this.state.score.anger,
          disgust: this.state.score.disgust,
          fear: this.state.score.fear,
          joy: this.state.score.joy,
          sadness: this.state.score.sadness,
          username: this.state.username,
        }),
    })
    .catch(err => console.log(err));
  }

  handleSubmit(anger, disgust, fear, joy, sadness, username) {
    this.getWatsonData();
    setTimeout(() => { this.saveWatsonData(anger, disgust, fear, joy, sadness, username); }, 3000);
  }


  getAverages(username) {
  fetch(`/api/database/${this.state.username}/7`)
    .then(r => r.json())
    .then((scores) => {
      let anger= 0;
      for (let i = 0; i < scores.length; i++) {
        anger += parseFloat(scores[i].anger_score);
      }
      let disgust= 0;
      for (let i = 0; i < scores.length; i++) {
        disgust += parseFloat(scores[i].disgust_score);
      }
      let fear= 0;
      for (let i = 0; i < scores.length; i++) {
        fear += parseFloat(scores[i].fear_score);
      }
      let joy= 0;
      for (let i = 0; i < scores.length; i++) {
        joy += parseFloat(scores[i].joy_score);
      }
      let sadness= 0;
      for (let i = 0; i < scores.length; i++) {
        sadness += parseFloat(scores[i].sadness_score);
      }

      this.setState({
        daySevenAverage: {
          anger: (anger / scores.length),
          disgust: (disgust / scores.length),
          fear: (fear / scores.length),
          joy: (joy / scores.length),
          sadness: (sadness / scores.length),
        },
      });
    },
      );
  }

  getDaySixAverages(username) {
  fetch(`/api/database/${this.state.username}/6`)
    .then(r => r.json())
    .then((scores2) => {
      let anger= 0;
      for (let i = 0; i < scores2.length; i++) {
        anger += parseFloat(scores2[i].anger_score);
      }
      let disgust= 0;
      for (let i = 0; i < scores2.length; i++) {
        disgust += parseFloat(scores2[i].disgust_score);
      }
      let fear= 0;
      for (let i = 0; i < scores2.length; i++) {
        fear += parseFloat(scores2[i].fear_score);
      }
      let joy= 0;
      for (let i = 0; i < scores2.length; i++) {
        joy += parseFloat(scores2[i].joy_score);
      }
      let sadness= 0;
      for (let i = 0; i < scores2.length; i++) {
        sadness += parseFloat(scores2[i].sadness_score);
      }

      this.setState({
        daySixAverage: {
          anger: (anger / scores2.length),
          disgust: (disgust / scores2.length),
          fear: (fear / scores2.length),
          joy: (joy / scores2.length),
          sadness: (sadness / scores2.length),
        },
      });
    },
      );
  }

  getDayFiveAverages(username) {
  fetch(`/api/database/${this.state.username}/5`)
    .then(r => r.json())
    .then((scores3) => {
      let anger= 0;
      for (let i = 0; i < scores3.length; i++) {
        anger += parseFloat(scores3[i].anger_score);
      }
      let disgust= 0;
      for (let i = 0; i < scores3.length; i++) {
        disgust += parseFloat(scores3[i].disgust_score);
      }
      let fear= 0;
      for (let i = 0; i < scores3.length; i++) {
        fear += parseFloat(scores3[i].fear_score);
      }
      let joy= 0;
      for (let i = 0; i < scores3.length; i++) {
        joy += parseFloat(scores3[i].joy_score);
      }
      let sadness= 0;
      for (let i = 0; i < scores3.length; i++) {
        sadness += parseFloat(scores3[i].sadness_score);
      }

      this.setState({
        dayFiveAverage: {
          anger: (anger / scores3.length),
          disgust: (disgust / scores3.length),
          fear: (fear / scores3.length),
          joy: (joy / scores3.length),
          sadness: (sadness / scores3.length),
        },
      });
    },
      );
  }

  getDayFourAverages(username) {
  fetch(`/api/database/${this.state.username}/4`)
    .then(r => r.json())
    .then((scores4) => {
      let anger= 0;
      for (let i = 0; i < scores4.length; i++) {
        anger += parseFloat(scores4[i].anger_score);
      }
      let disgust= 0;
      for (let i = 0; i < scores4.length; i++) {
        disgust += parseFloat(scores4[i].disgust_score);
      }
      let fear= 0;
      for (let i = 0; i < scores4.length; i++) {
        fear += parseFloat(scores4[i].fear_score);
      }
      let joy= 0;
      for (let i = 0; i < scores4.length; i++) {
        joy += parseFloat(scores4[i].joy_score);
      }
      let sadness= 0;
      for (let i = 0; i < scores4.length; i++) {
        sadness += parseFloat(scores4[i].sadness_score);
      }

      this.setState({
        dayFourAverage: {
          anger: (anger / scores4.length),
          disgust: (disgust / scores4.length),
          fear: (fear / scores4.length),
          joy: (joy / scores4.length),
          sadness: (sadness / scores4.length),
        },
      });
    },
      );
  }

  getDayThreeAverages(username) {
  fetch(`/api/database/${this.state.username}/3`)
    .then(r => r.json())
    .then((scores3) => {
      let anger= 0;
      for (let i = 0; i < scores3.length; i++) {
        anger += parseFloat(scores3[i].anger_score);
      }
      let disgust= 0;
      for (let i = 0; i < scores3.length; i++) {
        disgust += parseFloat(scores3[i].disgust_score);
      }
      let fear= 0;
      for (let i = 0; i < scores3.length; i++) {
        fear += parseFloat(scores3[i].fear_score);
      }
      let joy= 0;
      for (let i = 0; i < scores3.length; i++) {
        joy += parseFloat(scores3[i].joy_score);
      }
      let sadness= 0;
      for (let i = 0; i < scores3.length; i++) {
        sadness += parseFloat(scores3[i].sadness_score);
      }

      this.setState({
        dayThreeAverage: {
          anger: (anger / scores3.length),
          disgust: (disgust / scores3.length),
          fear: (fear / scores3.length),
          joy: (joy / scores3.length),
          sadness: (sadness / scores3.length),
        },
      });
    },
      );
  }

  getDayTwoAverages(username) {
  fetch(`/api/database/${this.state.username}/2`)
    .then(r => r.json())
    .then((scores2) => {
      let anger= 0;
      for (let i = 0; i < scores2.length; i++) {
        anger += parseFloat(scores2[i].anger_score);
      }
      let disgust= 0;
      for (let i = 0; i < scores2.length; i++) {
        disgust += parseFloat(scores2[i].disgust_score);
      }
      let fear= 0;
      for (let i = 0; i < scores2.length; i++) {
        fear += parseFloat(scores2[i].fear_score);
      }
      let joy= 0;
      for (let i = 0; i < scores2.length; i++) {
        joy += parseFloat(scores2[i].joy_score);
      }
      let sadness= 0;
      for (let i = 0; i < scores2.length; i++) {
        sadness += parseFloat(scores2[i].sadness_score);
      }

      this.setState({
        dayTwoAverage: {
          anger: (anger / scores2.length),
          disgust: (disgust / scores2.length),
          fear: (fear / scores2.length),
          joy: (joy / scores2.length),
          sadness: (sadness / scores2.length),
        },
      });
    },
      );
  }

  getDayOneAverages(username) {
  fetch(`/api/database/${this.state.username}/1`)
    .then(r => r.json())
    .then((scores1) => {
      let anger= 0;
      for (let i = 0; i < scores1.length; i++) {
        anger += parseFloat(scores1[i].anger_score);
      }
      let disgust= 0;
      for (let i = 0; i < scores1.length; i++) {
        disgust += parseFloat(scores1[i].disgust_score);
      }
      let fear= 0;
      for (let i = 0; i < scores1.length; i++) {
        fear += parseFloat(scores1[i].fear_score);
      }
      let joy= 0;
      for (let i = 0; i < scores1.length; i++) {
        joy += parseFloat(scores1[i].joy_score);
      }
      let sadness= 0;
      for (let i = 0; i < scores1.length; i++) {
        sadness += parseFloat(scores1[i].sadness_score);
      }

      this.setState({
        dayOneAverage: {
          anger: (anger / scores1.length),
          disgust: (disgust / scores1.length),
          fear: (fear / scores1.length),
          joy: (joy / scores1.length),
          sadness: (sadness / scores1.length),
        },
      });
    },
      );
  }

  handleAverages(username) {
    this.getAverages(username);
    this.getDaySixAverages(username);
    this.getDayFiveAverages(username);
    this.getDayFourAverages(username);
    this.getDayThreeAverages(username);
    this.getDayTwoAverages(username);
    this.getDayOneAverages(username);
  }

////////////////////////////////////////User Auth from Pern React Template
  updateFormSignUpUsername(e) {
    console.log(e.target.value);
    this.setState({
      signup: {
        username: e.target.value,
        password: this.state.signup.password,
      },
    });
  }

  updateFormSignUpPassword(e) {
    console.log(e.target.value);
    this.setState({
      signup: {
        username: this.state.signup.username,
        password: e.target.value,
      },
    });
  }

  updateFormLogInUsername(e) {
    this.setState({
      login: {
        username: e.target.value,
        password: this.state.login.password,
      },
    });
  }

  updateFormLogInPassword(e) {
    this.setState({
      login: {
        username: this.state.login.username,
        password: e.target.value,
      },
    });
  }

  handleSignUp() {
    fetch('/api/users', {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({
        username: this.state.signup.username,
        password: this.state.signup.password,
      }),
    })
    .then(this.setState({
      signUpBoxDisplay: 'hidden',
      logInBoxDisplay: 'logInBoxDisplay',
      signup: {
        username: '',
        password: '',
      },
    }))
    .then(this.alertInfo('You have signed up!'))
    .catch(err => console.log(err));
  }

  handleLogIn() {
    fetch('/api/auth', {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({
        username: this.state.login.username,
        password: this.state.login.password,
      }),
    })
    .then(this.setState({
      logInBoxDisplay: 'hidden',
      bigContainer: 'bigContainer',
      username: this.state.login.username,
      login: {
        username: '',
        password: '',
      },
    }))
    .then(this.onSuccessfulLogIn)
    .catch(err => console.log(err));
  }

  onSuccessfulLogIn(a, b) {
    console.log(a, b);
  }

  alertInfo(msg) {
    alert(msg);
  }
///////////////////////////////////////////////////////////////////////

  render() {
    return (
      <div>
        <SignUpForm
          signUpBoxDisplay={this.state.signUpBoxDisplay}
          signUpUsername={this.state.signup.username}
          signUpPassword={this.state.signup.password}
          updateFormUsername={event => this.updateFormSignUpUsername(event)}
          updateFormPassword={event => this.updateFormSignUpPassword(event)}
          handleFormSubmit={() => this.handleSignUp()}
        />
        <LogInForm
          logInBoxDisplay={this.state.logInBoxDisplay}
          logInUsername={this.state.login.username}
          logInPassword={this.state.login.password}
          updateFormUsername={event => this.updateFormLogInUsername(event)}
          updateFormPassword={event => this.updateFormLogInPassword(event)}
          handleFormSubmit={() => this.handleLogIn()}
        />

          <div className={this.state.bigContainer}>
            <div className="bigContainerContent">
              <h1>The Weather Report</h1>
              <h3>Hi, {this.state.username}</h3>
              <h2>what is on your mind?</h2>
              <input className="inputBox" type="text" name="userInput" onChange={(e) => this.updateInput(e)} />
              <input type="submit" value="submit" onClick={() => this.handleSubmit(this.state.score.anger, this.state.score.disgust, this.state.score.fear, this.state.score.joy, this.state.score.sadness, this.state.username)} />

              <Result
                opacityAnger={this.state.score.anger}
                opacityDisgust={this.state.score.disgust}
                opacityFear={this.state.score.fear}
                opacityJoy={this.state.score.joy}
                opacitySadness={this.state.score.sadness}
              />
              <div className="options">
              <button onClick={() => {this.handleAverages(this.state.username)}}>get averages</button>

                <div>Quote of the Day</div>
                <div>Song of the Day</div>
                <div>Daily Challenge</div>
              </div>
              <Quote
                anger={this.state.score.anger}
                disgust={this.state.score.disgust}
                fear={this.state.score.fear}
                joy={this.state.score.joy}
                sadness={this.state.score.sadness}
              />
              <MyWeek
                todayAnger={this.state.daySevenAverage.anger}
                todayDisgust={this.state.daySevenAverage.disgust}
                todayFear={this.state.daySevenAverage.fear}
                todayJoy={this.state.daySevenAverage.joy}
                todaySadness={this.state.daySevenAverage.sadness}

                daySixAnger={this.state.daySixAverage.anger}
                daySixDisgust={this.state.daySixAverage.disgust}
                daySixFear={this.state.daySixAverage.fear}
                daySixJoy={this.state.daySixAverage.joy}
                daySixSadness={this.state.daySixAverage.sadness}

                dayFiveAnger={this.state.dayFiveAverage.anger}
                dayFiveDisgust={this.state.dayFiveAverage.disgust}
                dayFiveFear={this.state.dayFiveAverage.fear}
                dayFiveJoy={this.state.dayFiveAverage.joy}
                dayFiveSadness={this.state.dayFiveAverage.sadness}

                dayFourAnger={this.state.dayFourAverage.anger}
                dayFourDisgust={this.state.dayFourAverage.disgust}
                dayFourFear={this.state.dayFourAverage.fear}
                dayFourJoy={this.state.dayFourAverage.joy}
                dayFourSadness={this.state.dayFourAverage.sadness}

                dayThreeAnger={this.state.dayThreeAverage.anger}
                dayThreeDisgust={this.state.dayThreeAverage.disgust}
                dayThreeFear={this.state.dayThreeAverage.fear}
                dayThreeJoy={this.state.dayThreeAverage.joy}
                dayThreeSadness={this.state.dayThreeAverage.sadness}

                dayTwoAnger={this.state.dayTwoAverage.anger}
                dayTwoDisgust={this.state.dayTwoAverage.disgust}
                dayTwoFear={this.state.dayTwoAverage.fear}
                dayTwoJoy={this.state.dayTwoAverage.joy}
                dayTwoSadness={this.state.dayTwoAverage.sadness}

                dayOneAnger={this.state.dayOneAverage.anger}
                dayOneDisgust={this.state.dayOneAverage.disgust}
                dayOneFear={this.state.dayOneAverage.fear}
                dayOneJoy={this.state.dayOneAverage.joy}
                dayOneSadness={this.state.dayOneAverage.sadness}
              />
            </div>
          </div>
      </div>
    );
  }
  }

export default App;
