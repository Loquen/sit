import React, { Component } from 'react';
import TimerContainer from '../../components/TimerContainer/TimerContainer';
import Modal from '../../components/Modal/Modal';

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
          <button onClick={this.props.handleSetVido}>CHOOSE VIDEO</button>
        </div>
        <Modal title="Options">
          
        </Modal>
      </div>
    );
  }
}

export default TimerPage;