import React, { Component } from 'react';
import LetsBreathe from './LetsBreathe.mp4';
import Sad from './sad.mp4';
import Square from './square.mp4';

class Challenge extends Component {

  constructor() {
    super();

     this.state = {
      video: '',

     };
    }

    randomVideo() {
      const videos = [LetsBreathe, Sad, Square];
      const i = Math.floor(Math.random() * 3);
      console.log(i);
      this.setState({
        video: videos[i],
      })
    }

    componentWillMount() {
      this.randomVideo();
    }

  render() {
    return(
      <div className={this.props.animationContainer}>
        <video width="720" height="405" controls>
          <source src={this.state.video} type="video/mp4" />
          <source src={this.state.video} type="video/ogg" />
          Your browser does not support the video tag.
        </video>

      </div>
    );
  }
  }


export default Challenge;
