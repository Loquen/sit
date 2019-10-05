import React, { Component } from 'react';
import TimerContainer from '../../components/TimerContainer/TimerContainer';

class TimerPage extends Component {
  render() {
    return (
      <div>
        TimerPage
        <TimerContainer 
          handleTimerUpdate={this.props.handleTimerUpdate}
          remainingTime={this.props.remainingTime}
          isTiming={this.props.isTiming}
          handleTimer={this.props.handleTimer}
          resetTimer={this.props.resetTimer}
        />
      </div>
    );
  }
}

export default TimerPage;