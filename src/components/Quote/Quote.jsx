import React, { Component } from 'react';

  class Quote extends Component {

    constructor() {
    super();

    this.state = {
      bigScore: '',
    };
  }

    getQuotes() {
      let scores = [this.props.anger, this.props.disgust, this.props.fear, this.props.joy, this.props.sadness];
      let max = scores[0];
      let maxIndex = 0;
      let emotion = '';
      scores.forEach((score, i) => {
        if (score > max) {
          max = score;
          maxIndex = i;
        }
      });
      switch (maxIndex) {
        case 0:
          emotion = 'anger';
          break;
        case 1:
          emotion = 'disgust';
          break;
        case 2:
          emotion = 'fear';
          break;
        case 3:
          emotion = 'joy';
          break;
        case 4:
          emotion = 'sadness';
          break;
        }
        this.setState ({
          bigScore: emotion,
        });
      }

    render() {
      return (
        <div>
        <button onClick={() => this.getQuotes()}>get quote score</button>
        <p>{this.state.bigScore}</p>
        </div>
      );
    }
}

export default Quote;
