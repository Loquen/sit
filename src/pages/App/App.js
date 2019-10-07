import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import userService from '../../utils/userService';

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
      userSetTime: 0
    };
  }

  getInitialState() {
    return {
      remainingTime: 10,
      isTiming: false,
      showModal: false,
    };
  }

  /*--- Callback Methods ---*/
  startTimer = () => {
    if (this.state.remainingTime > 0) {
      this.setState({ isTiming: true });
    }
  }

  // Stop the Timer at the current time 
  stopTimer = () => {
  	this.setState(state => ({ isTiming: false }), () => {
      console.log("Stopping Timer");
    });
  }

  // Handle action of start/stop button depending on state 'isRunning'
  handleTimer = () => {
  	if(this.state.isTiming) {
  		this.stopTimer();
  	} else {
  		this.startTimer();
  	}
  }

  // Reset the timer to beginning
  resetTimer = () => {
  	// Stop the timer before trying to reset
  	if(this.state.isTiming) this.stopTimer();

  	this.setState((curState) => ({
      ...this.getInitialState(),
      remainingTime: curState.userSetTime    
    }));
  }

  handleTimerUpdate = () => {
    this.setState((curState) => ({remainingTime: --curState.remainingTime}));
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
      showModal: false
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
      showModal: false
    }))
  }

  handleSetVideo = () => {
    this.setState({
      showModal: true,
      showSetTimeModal: false
    });
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
              showSetTimeModal={this.state.showSetTimeModal}
              handleTimerUpdate={this.handleTimerUpdate}
              handleTimer={this.handleTimer}
              handleSetTime={this.handleSetTime}
              handleSetVideo={this.handleSetVideo}
            />
          }/>
        </Switch>
      </div>
    );
  }
}

export default App;
