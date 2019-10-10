import React, { Component } from 'react';
import TimerContainer from '../../components/TimerContainer/TimerContainer';
import Modal from '../../components/Modal/Modal';
import SetTimeModal from '../../components/Modal/SetTimeModal';
import SetVideoModal from '../../components/Modal/SetVideoModal';

class TimerPage extends Component {
  render() {
    return (
      <div>
        <TimerContainer 
          stopTimer={this.props.stopTimer}
          handleTimerUpdate={this.props.handleTimerUpdate}
          remainingTime={this.props.remainingTime}
          isTiming={this.props.isTiming}
          handleTimer={this.props.handleTimer}
          resetTimer={this.props.resetTimer}
          showVideoPlayer={this.props.showVideoPlayer}
          videoId={this.props.videoId}
        />
        <div className="option-btns">
          <button onClick={this.props.handleSetTime}>SET TIME</button>
          <button onClick={this.props.handleSetVideo}>CHOOSE VIDEO</button>
        </div>
        
          <Modal 
            show={this.props.showModal}
            closeModal={this.props.closeModal}
          >
            {this.props.showSetTimeModal ? (
              <SetTimeModal
                setTimer={this.props.setTimer}
                closeModal={this.props.closeModal}
                title="Set the Timer"
              />
            ) : (
              <SetVideoModal
                videoList={this.props.videoList}
                setVideo={this.props.setVideo}
                closeModal={this.props.closeModal}
                title="Choose a Video"
              />
            )}
            
          </Modal>
      </div>
    );
  }
}

export default TimerPage;