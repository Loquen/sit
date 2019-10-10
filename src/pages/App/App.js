import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
// import moment from 'moment';

import userService from '../../utils/userService';
import dayService from '../../utils/dayService';
import videoService from '../../utils/videoService';

import NavBar from '../../components/NavBar/NavBar';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import InfoPage from '../InfoPage/InfoPage';
import TimerPage from '../TimerPage/TimerPage';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      ...this.getInitialState(),
      user: userService.getUser(),
    };
  }

  getInitialState() {
    return {
      remainingTime: 3,
      userSetTime: 3,
      isTiming: false,
      showModal: false,
      elapsedTime: 0,
      showVideoPlayer: false,
      videoId: ''
    };
  }

  /*--- Callback Methods ---*/
  startTimer = () => {
    if (this.state.remainingTime > 0) {
      this.setState({ isTiming: true });
    }
  }

  stopTimer = () => {
    this.setState(state => ({ isTiming: false }), async function(){
      // let user = userService.getUser();
      await dayService.todayExists(this.state.user._id, this.state.elapsedTime)      
    });
  }

  handleTimer = () => {
  	if(this.state.isTiming) {
  		this.stopTimer();
  	} else {
  		this.startTimer();
  	}
  }

  resetTimer = () => {
    if(this.state.isTiming) this.stopTimer();
    
  	this.setState((curState) => ({
      ...this.getInitialState(),
      remainingTime: curState.userSetTime    
    }));
  }

  handleTimerUpdate = () => {
    if(this.state.videoId) {
      this.setState((curState) => ({
        elapsedTime: ++curState.elapsedTime
      }));
    } else {
      this.setState((curState) => ({
        remainingTime: --curState.remainingTime,
        elapsedTime: ++curState.elapsedTime
      }));
    }
    if(this.state.remainingTime <= 0) {
      this.stopTimer();
    }
  }

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() });
  }

  closeModal = () => {
    this.setState({
      showModal: false,
      showSetTimeModal: false
    });
  }

  handleSetTime = () => {
    this.setState({
      showModal: true,
      showSetTimeModal: true
    });
  }

  setTimer = (seconds) => {
    if(this.state.isTiming) this.stopTimer();
    
    this.setState((curState) => ({
      remainingTime: seconds,
      userSetTime: seconds,
      elapsedTime: 0,
      showModal: false,
      showVideoPlayer: false,
      videoId: ''
    }))
  }

  handleSetVideo = async () => {
    let videoList = await videoService.getVideosList();
    // console.log(videosList);

    this.setState({
      showModal: true,
      showSetTimeModal: false,
      videoList: videoList
    });
  }

  setVideo = async () => {
    // let videoResults = await videoService.searchYoutube('meditation');
    // console.log(videoResults);
    // Get the selected video from the search modal
    // Render the player for that video
    
    
    this.setState({
      showVideoPlayer: true,
      videoId: 'ZFJnb_kI6FA'
    }, () => {
      this.closeModal();
      // console.log(this.state.showVideoPlayer)
    })
    // console.log(this.state.videoId)
    // let video = await videoService.getVideo('ZFJnb_kI6FA')
    // console.log(video);

  }

  render() {
    return (
      <div className="App">
        <NavBar 
          user={this.state.user}
          handleLogout={this.handleLogout}
        />
        <Switch>
          <Route exact path='/signup' render={({ history }) => 
            <SignupPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/>
          <Route exact path='/login' render={({ history }) => 
            <LoginPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/>
          <Route exact path='/' render={() => 
            <InfoPage
            />
          }/>
          <Route exact path='/timer' render={() => 
            <TimerPage
              remainingTime={this.state.remainingTime}
              isTiming={this.state.isTiming}
              resetTimer={this.resetTimer}
              showModal={this.state.showModal}
              closeModal={this.closeModal}
              setTimer={this.setTimer}
              setVideo={this.setVideo}
              videoId={this.state.videoId}
              videoList={this.state.videoList}
              showSetTimeModal={this.state.showSetTimeModal}
              stopTimer={this.stopTimer}
              handleTimerUpdate={this.handleTimerUpdate}
              handleTimer={this.handleTimer}
              handleSetTime={this.handleSetTime}
              handleSetVideo={this.handleSetVideo}
              showVideoPlayer={this.state.showVideoPlayer}
            />
          }/>
        </Switch>
      </div>
    );
  }
}

export default App;
