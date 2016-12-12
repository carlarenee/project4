import React, { Component } from 'react';

class MyWeek extends Component {

  // write function
  calcAvg(em) {
    let catcher = 0;
    this.props.scores.forEach((em) => {
      catcher += parseFloat(em.anger_score);
    });
  }

  render() {
    return (
      <h2>My Week: catcher</h2>
    );
  }
}

export default MyWeek;
