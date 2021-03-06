import React, { Component } from 'react';
import ReactPlayer from 'react-player';

class Video extends Component {
  handleTick = () => {
    // Ignore ticks?
    if (!this.props.isTiming) return;
    this.props.handleTimerUpdate();
  };

  /********* L I F E C Y C L E *********/

  componentDidMount() {
    this.timerId = setInterval(this.handleTick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    return (
      <div>
        <ReactPlayer 
          url={`https://www.youtube.com/watch?v=${this.props.videoId}`}
          width='100%'
          onPlay={this.props.handleTimer}
          onPause={this.props.handleTimer}
          onEnded={this.props.stopTimer}
        />
      </div>
    );
  }
}

export default Video;