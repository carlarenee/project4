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

  ///Day 5 style
    let angerStyle3 = {
      height: this.props.dayFiveAnger * 100,
      width: this.props.dayFiveAnger * 100,
      borderRadius: (this.props.dayFiveAnger * 100) /2,
      backgroundColor: 'red',
    }

    let disgustStyle3 = {
      height: this.props.dayFiveDisgust * 100,
      width: this.props.dayFiveDisgust * 100,
      borderRadius: (this.props.dayFiveDisgust * 100) /2,
      backgroundColor: 'green',
    }

    let fearStyle3 = {
      height: this.props.dayFiveFear * 100,
      width: this.props.dayFiveFear * 100,
      borderRadius: (this.props.dayFiveFear * 100) /2,
      backgroundColor: 'purple',
    }

    let joyStyle3 = {
      height: this.props.dayFiveJoy * 100,
      width: this.props.dayFiveJoy * 100,
      borderRadius: (this.props.dayFiveJoy * 100) /2,
      backgroundColor: 'yellow',
    }

    let sadnessStyle3 = {
      height: this.props.dayFiveSadness * 100,
      width: this.props.dayFiveSadness * 100,
      borderRadius: (this.props.dayFiveSadness * 100) /2,
      backgroundColor: 'blue',
    }


    return (
      <div className="week">
        <h2>My Week: </h2>

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

        <div className="day">
          <div className="dayContent" style={angerStyle3}></div>
          <div className="dayContent" style={disgustStyle3}></div>
          <div className="dayContent" style={fearStyle3}></div>
          <div className="dayContent" style={joyStyle3}></div>
          <div className="dayContent" style={sadnessStyle3}></div>
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
