import React, { Component } from 'react';
import style from './Result.css';


class Result extends Component {

  showOpacity() {
    console.log('the opcity is ', this.props.opacityAnger);
  }

  render() {

      let redBox = {
        position: 'relative',
        height: this.props.opacityAnger * 300,
        width: this.props.opacityAnger * 300,
        borderRadius: (this.props.opacityAnger * 300) /2,
        backgroundColor: 'red',
        opacity: this.props.opacityAnger * 10,
      }

      let greenBox = {
        position: 'relative',
        height: this.props.opacityDisgust * 300,
        width: this.props.opacityDisgust * 300,
        borderRadius: (this.props.opacityDisgust * 300) /2,
        backgroundColor: 'green',
        opacity: this.props.opacityDisgust * 10,
      }
      let purpleBox = {
        position: 'relative',
        height: this.props.opacityFear * 300,
        width: this.props.opacityFear * 300,
        borderRadius: (this.props.opacityFear * 300) /2,
        backgroundColor: 'rebeccaPurple',
        opacity: this.props.opacityFear * 10,
      }
      let yellowBox = {
        position: 'relative',
        height: this.props.opacityJoy * 300,
        width: this.props.opacityJoy * 300,
        borderRadius: (this.props.opacityJoy * 300) /2,
        backgroundColor: 'yellow',
        opacity: this.props.opacityJoy * 10,
      }
      let blueBox = {
        position: 'relative',
        height: this.props.opacitySadness * 300,
        width: this.props.opacitySadness * 300,
        borderRadius: (this.props.opacitySadness * 300) /2,
        backgroundColor: 'blue',
        opacity: this.props.opacitySadness * 10,
      }

    return (

      <div className="emotionContainer">
        <div style={redBox}></div>
        <div style={greenBox}></div>
        <div style={purpleBox}></div>
        <div style={yellowBox}></div>
        <div style={blueBox}></div>

      </div>

    );
  }
}


export default Result;
