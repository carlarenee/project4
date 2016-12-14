import React, { Component } from 'react';

class Challenge extends Component {

  render() {
    return(
      <div className={this.props.animationContainer}>
        <iframe
          src="https://publish.animatron.io/5851897861c85a17d6744c12?c=1&w=720&h=405&r=0&a=0"
          width="720"
          height="800"
          position="relative"
        />
      </div>
    );
  }
  }


export default Challenge;
