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
/////Day 6 style
    let angerStyle2 = {
      height: this.props.daySixAnger * 100,
      width: this.props.daySixAnger * 100,
      borderRadius: (this.props.daySixAnger * 100) /2,
      backgroundColor: 'red',
    }

    let disgustStyle2 = {
      height: this.props.daySixDisgust * 100,
      width: this.props.daySixDisgust * 100,
      borderRadius: (this.props.daySixDisgust * 100) /2,
      backgroundColor: 'green',
    }

    let fearStyle2 = {
      height: this.props.todayFear * 100,
      width: this.props.todayFear * 100,
      borderRadius: (this.props.todayFear * 100) /2,
      backgroundColor: 'purple',
    }

    let joyStyle2 = {
      height: this.props.todayJoy * 100,
      width: this.props.todayJoy * 100,
      borderRadius: (this.props.todayJoy * 100) /2,
      backgroundColor: 'yellow',
    }

    let sadnessStyle2 = {
      height: this.props.todaySadness * 100,
      width: this.props.todaySadness * 100,
      borderRadius: (this.props.todaySadness * 100) /2,
      backgroundColor: 'blue',
    }


    return (
      <div className="week">
        <h2>My Week: </h2>
        <h4>Today</h4>
        <p>Anger:{this.props.todayAnger}</p>
        <p>Disgust:{this.props.todayDisgust}</p>
        <p>Fear:{this.props.todayFear}</p>
        <p>Joy:{this.props.todayJoy}</p>
        <p>Sadness:{this.props.todaySadness}</p>
        <div className="day">
          <div className="dayContent" style={angerStyle}></div>
          <div className="dayContent" style={disgustStyle}></div>
          <div className="dayContent" style={fearStyle}></div>
          <div className="dayContent" style={joyStyle}></div>
          <div className="dayContent" style={sadnessStyle}></div>
        </div>
        <div className="day">
          <div className="dayContent" style={angerStyle2}></div>
          <div className="dayContent" style={disgustStyle2}></div>
          <div className="dayContent" style={fearStyle2}></div>
          <div className="dayContent" style={joyStyle2}></div>
          <div className="dayContent" style={sadnessStyle2}></div>
        </div>
      </div>
    );
  }
}

export default MyWeek;
