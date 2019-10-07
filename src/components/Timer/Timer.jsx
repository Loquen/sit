import React, { Component } from 'react';

function formatTime(seconds) {
  let hours = Math.floor(seconds / 3600).toString().padStart(2, '0');
  let minutesLeft = seconds % 3600;
  let mins = Math.floor(minutesLeft / 60).toString().padStart(2, '0');
  let secs = (seconds % 60).toString().padStart(2, '0');
  return `${hours}:${mins}:${secs}`;
}

class Timer extends Component {
  
  handleTick = () => {
    // Ignore ticks?
    if (!this.props.isTiming || this.props.remainingTime <= 0) return;
    this.props.handleTimerUpdate();
  };

  /*--- Lifecycle Methods ---*/

  componentDidMount() {
    this.timerId = setInterval(this.handleTick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    return (
      <div>
        <div>{formatTime(this.props.remainingTime)}</div>
        <button onClick={this.props.handleTimer}>{this.props.isTiming ? 'STOP' : 'START'}</button>
        <button onClick={this.props.resetTimer}>RESET</button>
      </div>
    );
  }
}

export default Timer;

  
