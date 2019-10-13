import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Jumbotron } from 'react-bootstrap';

const InfoPage = () => {
  return (
    <Container>
      <Jumbotron>
        <h1>Welcome to Sit!</h1>
        <p>
          Sit is an app for tracking your meditation practice. 
          Each session you complete will be stored in your account. 
          You can choose to use either a basic timer or a video.
        </p>
        <p>
          The Visualization page will show you the progress you've made
          on your mediation journey. You can take the year view or zoom
          in for a small scale look at the past seven days. 
        </p>
        <p>
          <Link to='/timer'>Start Timing!</Link>
        </p>
      </Jumbotron>
    </Container>
  );
}

export default InfoPage;