import React from 'react';

const SetVideoModal = (props) => {
  return (
    <div>
      <header>{props.title}</header>
      {props.videoList.map(video => (
        <div>
          <p>{video.items[0].snippet.title}</p>
          <img onClick={() => (props.setVideo(video.items[0].id))} src={video.items[0].snippet.thumbnails.default.url} alt='video'/>
        </div>
      ))}
      <footer>
        <button onClick={props.closeModal}>CANCEL</button>
        {/* <button onClick={props.setVideo}>SET</button> */}
      </footer>
    </div>
  );
}

export default SetVideoModal;