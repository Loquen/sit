import React, { Component } from 'react';
import { Button, Jumbotron } from 'react-bootstrap';

import '../../pages/TimerPage/TimerPage.css';

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
    if (!this.props.isTiming) return;
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
      <Jumbotron >
        <h1 className='timer'>{formatTime(this.props.remainingTime)}</h1>
        <Button size='lg' variant={this.props.isTiming ? 'danger': 'success'} onClick={this.props.handleTimer}>{this.props.isTiming ? 'STOP' : 'START'}</Button>
        &nbsp;&nbsp;&nbsp;
        <Button variant='warning' onClick={this.props.resetTimer}>RESET</Button>
        <p className='timer-tagline'>Take a breath and relax!</p>
      </Jumbotron>
    );
  }
}

export default Timer;

  
