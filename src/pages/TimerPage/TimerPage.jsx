import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

import TimerContainer from '../../components/TimerContainer/TimerContainer';
import Modal from '../../components/Modal/Modal';
import SetTimeModal from '../../components/Modal/SetTimeModal';
import SetVideoModal from '../../components/Modal/SetVideoModal';
import RatingModal from '../../components/Modal/RatingModal';

import './TimerPage.css';

class TimerPage extends Component {
  render() {
    return (
      <div className='timer-page-container'>
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
        <div className='option-btns'>
          <Button variant='secondary' onClick={this.props.handleSetTime}>SET TIME</Button>
          &nbsp;&nbsp;&nbsp;
          <Button variant='secondary' onClick={this.props.handleSetVideo}>CHOOSE VIDEO</Button>
        </div>
        
        <Modal 
          show={this.props.showModal}
          closeModal={this.props.closeModal}
          modalClassName={this.props.modalClassName}
        > 
        {this.props.showRateModal ? (
          <RatingModal
            handleSubmit={this.props.handleRatingSubmit}
            closeModal={this.props.closeModal}
            title='How was your session?'
          />
        ) : this.props.showSetTimeModal ? (
          <SetTimeModal
            setTimer={this.props.setTimer}
            closeModal={this.props.closeModal}
            title='Set the Timer'
          />
        ) : (
          <SetVideoModal
            handleVideoChange={this.props.handleVideoChange}
            handleVideoSearch={this.props.handleVideoSearch}
            videoList={this.props.videoList}
            userSearch={this.props.userSearch}
            setVideo={this.props.setVideo}
            closeModal={this.props.closeModal}
            title='Choose a Video'
          />
        )}
        </Modal> 
      </div>
    );
  }
}

export default TimerPage;