import React, { Component } from 'react';

  class Quote extends Component {

    constructor() {
    super();

     this.state = {
       bigScore: '',
       quote: '',
       author: '',
    };
    }

    getEmotion() {
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
      this.setState({
        bigScore: emotion,
      })
      this.getQuote(emotion)
    }

    getQuote(emotion) {
      fetch(`api/feedback/quotes/${emotion}`)
      .then(r => r.json())
      .then((quote) => {
      this.setState({
        quote: quote.quote,
        author: quote.author,
      });
      console.log(this.state.quote);
      });
    }

    handleQuote() {
      this.getEmotion();
    }

    render() {
      return (
        <div>
          <button onClick={() => this.handleQuote()}>Quote of the Day</button>
          <p className={this.props.soundsLike}>Sounds like you have some {this.state.bigScore}</p>
          <p>"{this.state.quote}"</p>
          <p>- {this.state.author}</p>
        </div>
      );
    }
}

export default Quote;
