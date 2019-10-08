import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import moment from 'moment';

import userService from '../../utils/userService';
import dayService from '../../utils/dayService';

import NavBar from '../../components/NavBar/NavBar';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import InfoPage from '../InfoPage/InfoPage';
import TimerPage from '../TimerPage/TimerPage';


import './App.css';
// import { async } from 'q';

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
      elapsedTime: 0
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
    this.setState(state => ({ isTiming: false }), async function(){
      let user = userService.getUser();
      await dayService.todayExists(user._id, this.state.elapsedTime)      
    });
    // Need to now save this day to the users profile
    // Make call to dayService's todayExists

    // Then make call to dayService Create or Update 
    // based on return from dayService of either a
    // date id to look up, or null
    // If null create
    // If day id exists then update that day
  }

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
    this.setState((curState) => ({
      remainingTime: --curState.remainingTime,
      elapsedTime: ++curState.elapsedTime
    }));
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
