import React, { Component } from 'react';
import './Input.css';

export default class Input extends Component{

  constructor() {
    super();

    this.state = {
      input: ''
    };
  }

  updateInput(event) {
    this.setState ({
      input: event.target.value
      })
    };

    sendInput() {
      fetch(`/api/watson?t=${this.state.input}`)
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

  render(){
    return (
      <div>
       <h2>what's on your mind?</h2>
       <input type = "text" name = "userInput" onChange={(e) => this.updateInput(e)} />

       <input type = "submit" value = "submit" onClick={() => this.sendInput()} />

      </div>
    );
  }
}



