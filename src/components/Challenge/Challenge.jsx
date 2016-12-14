import React, { Component } from 'react';
import LetsBreathe from './LetsBreathe.mp4';

class Challenge extends Component {

  render() {
    return(
      <div className={this.props.animationContainer}>
        <video width="720" height="405" controls>
          <source src={LetsBreathe} type="video/mp4" />
          <source src={LetsBreathe} type="video/ogg" />
          Your browser does not support the video tag.
        </video>

      </div>
    );
  }
  }


export default Challenge;
