import React from 'react';

const SetVideoModal = (props) => {
  return (
    <div>
      <header>{props.title}</header>
      <footer>
        <button onClick={props.closeModal}>CANCEL</button> <button>SET</button>
      </footer>
    </div>
  );
}

export default SetVideoModal;