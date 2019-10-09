import React, { Component } from 'react';
import Timer from '../Timer/Timer';
import Video from '../Video/Video';

class TimerContainer extends Component {
  render() {
    return (
      <div>
        {this.props.showVideoPlayer
          ? <Video />
          : <Timer
              handleTimerUpdate={this.props.handleTimerUpdate}
              remainingTime={this.props.remainingTime}
              isTiming={this.props.isTiming}
              handleTimer={this.props.handleTimer}
              resetTimer={this.props.resetTimer}
            />
        }
      </div>
    );
  }
}

export default TimerContainer;