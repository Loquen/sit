import React, { Component } from 'react';

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
        <header>{this.props.title}</header>

        <p>Please enter a time</p>
        Hours:<input 
          type='number' 
          min='0'
          name='hour'
          step='1'
          value={this.state.hour}
          onChange={this.handleChange}
        />
        Minutes:<input 
          type='number' 
          min='0'
          name='minute'
          step='1'
          value={this.state.minute}
          onChange={this.handleChange}
        />
        <footer>
          <button onClick={this.props.closeModal}>CANCEL</button> 
          <button onClick={this.handleSubmit}>SET</button>
        </footer>
      </>
    );
  }
}

export default SetTimeModal;