import React, { Component } from 'react';
import style from './Result.css';


class Result extends Component {

  showOpacity() {
    console.log('the opcity is ', this.props.opacityAnger);
  }

  render() {

      let redBox = {
        height: 100,
        width: 100,
        backgroundColor: 'blue',
        opacity: this.props.opacityAnger * 10,
      }

    return (

      <div>
        <div style={redBox}>1</div>
        {() => this.showOpacity()}
      </div>

    );
  }
}


export default Result;
