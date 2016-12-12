import React, { Component } from 'react';
import style from './MyWeek.css';

class MyWeek extends Component {
  render() {

    let angerStyle = {
      height: this.props.todayAnger * 100,
      width: this.props.todayAnger * 100,
      borderRadius: (this.props.todayAnger * 100) /2,
      backgroundColor: 'red',
    }

    let disgustStyle = {
      height: this.props.todayDisgust * 100,
      width: this.props.todayDisgust * 100,
      borderRadius: (this.props.todayDisgust * 100) /2,
      backgroundColor: 'green',
    }

    let fearStyle = {
      height: this.props.todayFear * 100,
      width: this.props.todayFear * 100,
      borderRadius: (this.props.todayFear * 100) /2,
      backgroundColor: 'purple',
    }

    let joyStyle = {
      height: this.props.todayJoy * 100,
      width: this.props.todayJoy * 100,
      borderRadius: (this.props.todayJoy * 100) /2,
      backgroundColor: 'yellow',
    }

    let sadnessStyle = {
      height: this.props.todaySadness * 100,
      width: this.props.todaySadness * 100,
      borderRadius: (this.props.todaySadness * 100) /2,
      backgroundColor: 'blue',
    }

    return (
      <div>
        <h2>My Week: </h2>
        <h4>Today</h4>
        <p>Anger:{this.props.todayAnger}</p>
        <p>Disgust:{this.props.todayDisgust}</p>
        <p>Fear:{this.props.todayFear}</p>
        <p>Joy:{this.props.todayJoy}</p>
        <p>Sadness:{this.props.todaySadness}</p>
        <div style={angerStyle}></div>
        <div style={disgustStyle}></div>
        <div style={fearStyle}></div>
        <div style={joyStyle}></div>
        <div style={sadnessStyle}></div>
      </div>
    );
  }
}

export default MyWeek;
