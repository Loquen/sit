import React, { Component } from 'react';
import Timer from '../Timer/Timer';

class TimerContainer extends Component {
  render() {
    return (
      <div>
        TimerContainer
        <Timer
          handleTimerUpdate={this.props.handleTimerUpdate}
          remainingTime={this.props.remainingTime}
          isTiming={this.props.isTiming}
        />
      </div>
    );
  }
}

export default TimerContainer;