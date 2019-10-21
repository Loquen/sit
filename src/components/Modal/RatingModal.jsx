import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import './Modal.module.css'


class RatingModal extends Component {

  state = {
    thoughts: 'How do you feel? What came up?',
    rating: 5,
  };

  handleChange = (evt) => {
    if(evt.target.value >= 0){
      this.setState({
        [evt.target.name]: evt.target.value
      });
    }
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
    console.log('success');
  }

  render() {
    return (
      <>
        <h2>{this.props.title}</h2>

        <strong>Thoughts:</strong><input 
          type='text' 
          name='thoughts'
          value={this.state.thoughts}
          onChange={this.handleChange}
        />
        <strong>Rating:</strong><input 
          type='number' 
          min='0'
          max='5'
          name='rating'
          step='1'
          value={this.state.rating}
          onChange={this.handleChange}
        />
        <footer>
          <Button variant='success' onClick={this.handleSubmit}>FINISH SESSION</Button>
          &nbsp;&nbsp;&nbsp;
          <Button variant='danger' onClick={this.props.closeModal}>CANCEL</Button> 
        </footer>
      </>
    );
  }
}

export default RatingModal;