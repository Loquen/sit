import React from 'react';
import { Button } from 'react-bootstrap';
import './VideoModal.css'

const SetVideoModal = (props) => {
  return (
    <div className='video-container'>
      <h1>{props.title}</h1>
      <input type='text' placeholder='Search'/>
      {props.videoList.map(video => (
        <div key={video.items[0].title} className='video-item'>
          <img onClick={() => (props.setVideo(video.items[0].id))} src={video.items[0].snippet.thumbnails.default.url} alt='video'/>
          <p>{video.items[0].snippet.title}</p>
          <hr/>
        </div>
      ))}
      <footer>
        <Button variant='danger' onClick={props.closeModal}>CANCEL</Button>
      </footer>
    </div>
  );
}

export default SetVideoModal;