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
          handleTimerUpdate={this.props.handleTimerUpdate}
          remainingTime={this.props.remainingTime}
          isTiming={this.props.isTiming}
          handleTimer={this.props.handleTimer}
          resetTimer={this.props.resetTimer}
        />
        <div className="option-btns">
          <button onClick={this.props.handleSetTime}>SET TIME</button>
          <button onClick={this.props.handleSetVideo}>CHOOSE VIDEO</button>
        </div>
        <div>
          <Modal 
            show={this.props.showModal}
          >
            {this.props.showSetTimeModal ?(
              <SetTimeModal
                setTimer={this.props.setTimer}
                closeModal={this.props.closeModal}
                title="Set the Timer"
              />
            ) : (
              <SetVideoModal
                closeModal={this.props.closeModal}
                title="Choose a Video"
              />
            )}
            
          </Modal>
        </div>
      </div>
    );
  }
}

export default TimerPage;