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
        width: 80,
        backgroundColor: '#9E034C',
      }

      let greenBox = {
        position: 'relative',
        height: this.props.opacityDisgust * 300,
        width: 80,
        backgroundColor: '#439A86',

      }
      let purpleBox = {
        position: 'relative',
        height: this.props.opacityFear * 300,
        width: 80,
        backgroundColor: '#7278E8',
      }
      let yellowBox = {
        position: 'relative',
        height: this.props.opacityJoy * 300,
        width: 80,
        backgroundColor: '#FFCD29',
      }
      let blueBox = {
        position: 'relative',
        height: this.props.opacitySadness * 300,
        width: 80,
        backgroundColor: '#00A5CF',
      }

    return (
     <div>
      <div className="emotionContainer">
        <div style={redBox}></div>
        <div style={greenBox}></div>
        <div style={purpleBox}></div>
        <div style={yellowBox}></div>
        <div style={blueBox}></div>
        </div>

        <div className={this.props.emotionLabelsContainer}>
          <div className="emotionLabel">ANGER</div>
          <div className="emotionLabel">DISGUST</div>
          <div className="emotionLabel">FEAR</div>
          <div className="emotionLabel">JOY</div>
          <div className="emotionLabel">SADNESS</div>
        </div>

      </div>


    );
  }
}


export default Result;
