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
            title="Options"
            show={this.props.showModal}
          >
            {this.props.showSetTimeModal ?(
              <SetTimeModal/>
            ) : (
              <SetVideoModal/>
            )}
            
          </Modal>
        </div>
      </div>
    );
  }
}

export default TimerPage;