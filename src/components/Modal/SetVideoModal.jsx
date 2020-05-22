import React from 'react';
import { Button } from 'react-bootstrap';
import './VideoModal.css'

const SetVideoModal = (props) => {

  return (
    <div className='video-container'>
      <h1>{props.title}</h1>
      <input 
        onChange={props.handleVideoChange} 
        type='text' 
        placeholder='Search'
        value={props.videoQuery}
        className='mr-3'
      />
      <Button 
        className='mb-3'
        variant='success' 
        onClick={props.handleVideoSearch}
      >
        SEARCH
      </Button>
      {

        props.videoList ? 
          props.videoList.map((video, id)=> (
            
              <div key={id} className='video-item'>
              <img 
                onClick={() => (
                  props.setVideo(
                    props.userSearch ? video.id.videoId
                    : video.items[0].id))} 
                src={
                  props.userSearch ? video.snippet.thumbnails.default.url
                  : video.items[0].snippet.thumbnails.default.url} 
                alt='video'
              />
              <p>{props.userSearch 
                ? video.snippet.title
                : video.items[0].snippet.title}</p>
              <hr/>
            </div>
          
        )) : 'L O A D I N G . . .'
      }
      <footer>
        <Button 
          variant='danger' 
          onClick={props.closeModal}
        >
          CANCEL
        </Button>
      </footer>
    </div>
  );
}

export default SetVideoModal;