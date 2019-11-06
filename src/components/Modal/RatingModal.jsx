import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import RenderStars from './RenderStars';
import './Modal.module.css'


class RatingModal extends Component {

  state = {
    thoughts: 'How do you feel?',
    rating: 5,
  };

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  rateSession = (evt) => {
    let rating = evt.target.id;
    this.setState((curState) => ({
      rating: rating
    }))
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
        
        <RenderStars 
          rating={this.state.rating}
          rateSession={this.rateSession}
        />
        <footer>
          <Button variant='success' onClick={() => this.props.handleSubmit(this.state.rating, this.state.thoughts)}>FINISH SESSION</Button>
          &nbsp;&nbsp;&nbsp;
          <Button variant='danger' onClick={this.props.closeModal}>CANCEL</Button> 
        </footer>
      </>
    );
  }
}

export default RatingModal;