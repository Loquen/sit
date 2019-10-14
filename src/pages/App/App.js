import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import userService from '../../utils/userService';
import dayService from '../../utils/dayService';
import videoService from '../../utils/videoService';

import NavBar from '../../components/NavBar/NavBar';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import InfoPage from '../InfoPage/InfoPage';
import VisualizePage from '../VisualizePage/VisualizePage';
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
      remainingTime: 600,
      userSetTime: 600,
      isTiming: false,
      showModal: false,
      elapsedTime: 0,
      showVideoPlayer: false,
      videoId: '',
      filterValue: 'year'
    };
  }

  /********** T I M E R ************/ 

  startTimer = () => {
    if (this.state.remainingTime > 0) {
      this.setState({ isTiming: true });
    }
  }

  stopTimer = () => {
    if(this.state.remainingTime === 0 && !this.state.showVideoPlayer) this.playSound();

    this.setState(state => ({ isTiming: false }), async function(){
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

  playSound() {
    console.log('playing sound');
    document.getElementById('bell').play(); // Grab audio element and play it
  }

  /*********** L O G I N / S I G N U P *************/

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() });
  }

  /***********  M O D A L S ************/

  closeModal = () => {
    this.setState({
      showModal: false,
      showSetTimeModal: false
    });
  }

  handleSetTime = () => {
    this.setState({
      showModal: true,
      modalClassName: 'timer-modal',
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

  /*********** V I D E O S **************/

  handleSetVideo = async () => {
    let videoList = await videoService.getVideosList();

    this.setState({
      showModal: true,
      showSetTimeModal: false,
      modalClassName: 'video-modal',
      videoList: videoList
    });
  }

  setVideo = async (videoId) => {
    this.setState({
      showVideoPlayer: true,
      videoId: videoId
    }, () => {
      this.closeModal();
    });
  }

  /*************** V I S U A L I Z E ***************/

  handleFilterChange = (evt) => {
    this.setState({filterValue: evt.target.value});
  }

  handleFilterSubmit = (evt) => {
    evt.preventDefault();

    /******* FUTURE DEV: filter by specific year, month or week ********/
  }

  render() {
    return (
      <div className='App'>
        <NavBar 
          location={window.location.pathname}
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
          <Route exact path='/visualize' render={() => 
            userService.getUser() ?           
              <VisualizePage
                user={this.state.user}
                filterValue={this.state.filterValue}
                filterDays={this.filterDays}
                handleFilterChange={this.handleFilterChange}
                handleFilterSubmit={this.handleFilterSubmit}
              />
            :
              <Redirect to='/login' />
          }/>
          <Route exact path='/timer' render={() => 
            userService.getUser() ? 
              <>
                <TimerPage
                  remainingTime={this.state.remainingTime}
                  isTiming={this.state.isTiming}
                  resetTimer={this.resetTimer}
                  modalClassName={this.state.modalClassName}
                  showModal={this.state.showModal}
                  closeModal={this.closeModal}
                  setTimer={this.setTimer}
                  setVideo={this.setVideo}
                  videoId={this.state.videoId}
                  videoList={this.state.videoList}
                  selectVideo={this.selectVideo}
                  showSetTimeModal={this.state.showSetTimeModal}
                  stopTimer={this.stopTimer}
                  handleTimerUpdate={this.handleTimerUpdate}
                  handleTimer={this.handleTimer}
                  handleSetTime={this.handleSetTime}
                  handleSetVideo={this.handleSetVideo}
                  showVideoPlayer={this.state.showVideoPlayer}
                />
                <audio id='bell' src='singing-bowl.mp3'/>
              </>
            :
              <Redirect to='/login' />
          }/>
        </Switch>
      </div>
    );
  }
}

export default App;
