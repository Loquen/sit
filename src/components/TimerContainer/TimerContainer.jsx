import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import Timer from '../Timer/Timer';
import Video from '../Video/Video';

class TimerContainer extends Component {
  render() {
    return (
      <Container>
        {this.props.videoId
          ? <Video 
              videoId={this.props.videoId}
              isTiming={this.props.isTiming}
              stopTimer={this.props.stopTimer}
              handleTimer={this.props.handleTimer}
              handleTimerUpdate={this.props.handleTimerUpdate}
            />
          : <Timer
              remainingTime={this.props.remainingTime}
              isTiming={this.props.isTiming}
              handleTimer={this.props.handleTimer}
              handleTimerUpdate={this.props.handleTimerUpdate}
              resetTimer={this.props.resetTimer}
            />
        }
      </Container>
    );
  }
}

export default TimerContainer;