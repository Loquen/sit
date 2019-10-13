import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import './Modal.module.css'


class SetTimeModal extends Component {

  state = {
    hour: 0,
    minute: 10,
    totalSeconds: 0
  };

  calculateTotalSeconds(){
    return (parseInt(this.state.hour)*3600) + (parseInt(this.state.minute)*60);
  }

  handleChange = (evt) => {
    if(evt.target.value >= 0){
      this.setState({
        [evt.target.name]: evt.target.value
      });
    }
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
    let seconds = this.calculateTotalSeconds();
    this.props.setTimer(seconds);
  }

  render() {
    return (
      <>
        <h2>{this.props.title}</h2>

        <strong>Hours:</strong><input 
          type='number' 
          min='0'
          name='hour'
          step='1'
          value={this.state.hour}
          onChange={this.handleChange}
        />
        <strong>Minutes:</strong><input 
          type='number' 
          min='0'
          name='minute'
          step='1'
          value={this.state.minute}
          onChange={this.handleChange}
        />
        <footer>
          <Button variant='success' onClick={this.handleSubmit}>SET</Button>
          &nbsp;&nbsp;&nbsp;
          <Button variant='danger' onClick={this.props.closeModal}>CANCEL</Button> 
        </footer>
      </>
    );
  }
}

export default SetTimeModal;