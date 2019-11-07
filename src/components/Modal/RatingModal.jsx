import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import RenderStars from './RenderStars';
import './RatingModal.css'


class RatingModal extends Component {

  state = {
    thoughts: '',
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
      <div className='rating-body'>
        <h2>{this.props.title}</h2>
        <div className='rating-input'>
          <strong>Thoughts: &nbsp;&nbsp;</strong><input 
            type='text' 
            name='thoughts'
            placeholder='How do you feel?'
            value={this.state.thoughts}
            onChange={this.handleChange}
          />
        </div>
        <div className='rating-stars'>
          <RenderStars 
            rating={this.state.rating}
            rateSession={this.rateSession}
          />
        </div>
        <footer>
          <Button variant='success' size='lg' onClick={() => this.props.handleSubmit(this.state.rating, this.state.thoughts)}>FINISH SESSION</Button>
          &nbsp;&nbsp;&nbsp;
          <Button variant='danger' onClick={this.props.closeModal}>CANCEL</Button> 
        </footer>
      </div>
    );
  }
}

export default RatingModal;