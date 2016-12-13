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
/////Day 6 style 2
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

  ///Day 5 style 3
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

  ///////Day 4 style 4
    let angerStyle4 = {
      height: this.props.dayFourAnger * 100,
      width: this.props.dayFourAnger * 100,
      borderRadius: (this.props.dayFourAnger * 100) /2,
      backgroundColor: 'red',
    }

    let disgustStyle4 = {
      height: this.props.dayFourDisgust * 100,
      width: this.props.dayFourDisgust * 100,
      borderRadius: (this.props.dayFourDisgust * 100) /2,
      backgroundColor: 'green',
    }

    let fearStyle4 = {
      height: this.props.dayFourFear * 100,
      width: this.props.dayFourFear * 100,
      borderRadius: (this.props.dayFourFear * 100) /2,
      backgroundColor: 'purple',
    }

    let joyStyle4 = {
      height: this.props.dayFourJoy * 100,
      width: this.props.dayFourJoy * 100,
      borderRadius: (this.props.dayFourJoy * 100) /2,
      backgroundColor: 'yellow',
    }

    let sadnessStyle4 = {
      height: this.props.dayFourSadness * 100,
      width: this.props.dayFourSadness * 100,
      borderRadius: (this.props.dayFourSadness * 100) /2,
      backgroundColor: 'blue',
    }

  //////Day 3 style 5
    let angerStyle5 = {
      height: this.props.dayThreeAnger * 100,
      width: this.props.dayThreeAnger * 100,
      borderRadius: (this.props.dayThreeAnger * 100) /2,
      backgroundColor: 'red',
    }

    let disgustStyle5 = {
      height: this.props.dayThreeDisgust * 100,
      width: this.props.dayThreeDisgust * 100,
      borderRadius: (this.props.dayThreeDisgust * 100) /2,
      backgroundColor: 'green',
    }

    let fearStyle5 = {
      height: this.props.dayThreeFear * 100,
      width: this.props.dayThreeFear * 100,
      borderRadius: (this.props.dayThreeFear * 100) /2,
      backgroundColor: 'purple',
    }

    let joyStyle5 = {
      height: this.props.dayThreeJoy * 100,
      width: this.props.dayThreeJoy * 100,
      borderRadius: (this.props.dayThreeJoy * 100) /2,
      backgroundColor: 'yellow',
    }

    let sadnessStyle5 = {
      height: this.props.dayThreeSadness * 100,
      width: this.props.dayThreeSadness * 100,
      borderRadius: (this.props.dayThreeSadness * 100) /2,
      backgroundColor: 'blue',
    }

  //////Day 2 style 6
    let angerStyle6 = {
      height: this.props.dayTwoAnger * 100,
      width: this.props.dayTwoAnger * 100,
      borderRadius: (this.props.dayTwoAnger * 100) /2,
      backgroundColor: 'red',
    }

    let disgustStyle6 = {
      height: this.props.dayTwoDisgust * 100,
      width: this.props.dayTwoDisgust * 100,
      borderRadius: (this.props.dayTwoDisgust * 100) /2,
      backgroundColor: 'green',
    }

    let fearStyle6 = {
      height: this.props.dayTwoFear * 100,
      width: this.props.dayTwoFear * 100,
      borderRadius: (this.props.dayTwoFear * 100) /2,
      backgroundColor: 'purple',
    }

    let joyStyle6 = {
      height: this.props.dayTwoJoy * 100,
      width: this.props.dayTwoJoy * 100,
      borderRadius: (this.props.dayTwoJoy * 100) /2,
      backgroundColor: 'yellow',
    }

    let sadnessStyle6 = {
      height: this.props.dayTwoSadness * 100,
      width: this.props.dayTwoSadness * 100,
      borderRadius: (this.props.dayTwoSadness * 100) /2,
      backgroundColor: 'blue',
    }

  //////Day 1 style 7
    let angerStyle7 = {
      height: this.props.dayOneAnger * 100,
      width: this.props.dayOneAnger * 100,
      borderRadius: (this.props.dayOneAnger * 100) /2,
      backgroundColor: 'red',
    }

    let disgustStyle7 = {
      height: this.props.dayOneDisgust * 100,
      width: this.props.dayOneDisgust * 100,
      borderRadius: (this.props.dayOneDisgust * 100) /2,
      backgroundColor: 'green',
    }

    let fearStyle7 = {
      height: this.props.dayOneFear * 100,
      width: this.props.dayOneFear * 100,
      borderRadius: (this.props.dayOneFear * 100) /2,
      backgroundColor: 'purple',
    }

    let joyStyle7 = {
      height: this.props.dayOneJoy * 100,
      width: this.props.dayOneJoy * 100,
      borderRadius: (this.props.dayOneJoy * 100) /2,
      backgroundColor: 'yellow',
    }

    let sadnessStyle7 = {
      height: this.props.dayOneSadness * 100,
      width: this.props.dayOneSadness * 100,
      borderRadius: (this.props.dayOneSadness * 100) /2,
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
          <div className="dayContent" style={angerStyle4}></div>
          <div className="dayContent" style={disgustStyle4}></div>
          <div className="dayContent" style={fearStyle4}></div>
          <div className="dayContent" style={joyStyle4}></div>
          <div className="dayContent" style={sadnessStyle4}></div>
        </div>

        <div className="day">
          <div className="dayContent" style={angerStyle5}></div>
          <div className="dayContent" style={disgustStyle5}></div>
          <div className="dayContent" style={fearStyle5}></div>
          <div className="dayContent" style={joyStyle5}></div>
          <div className="dayContent" style={sadnessStyle5}></div>
        </div>

        <div className="day">
          <div className="dayContent" style={angerStyle6}></div>
          <div className="dayContent" style={disgustStyle6}></div>
          <div className="dayContent" style={fearStyle6}></div>
          <div className="dayContent" style={joyStyle6}></div>
          <div className="dayContent" style={sadnessStyle6}></div>
        </div>

        <div className="day">
          <div className="dayContent" style={angerStyle7}></div>
          <div className="dayContent" style={disgustStyle7}></div>
          <div className="dayContent" style={fearStyle7}></div>
          <div className="dayContent" style={joyStyle7}></div>
          <div className="dayContent" style={sadnessStyle7}></div>
        </div>
      </div>
    );
  }
}

export default MyWeek;
