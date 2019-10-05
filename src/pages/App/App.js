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
      user: userService.getUser()
    };
  }

  getInitialState() {
    return {
      remainingTime: 300,
      isTiming: false
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

  	this.setState(this.getInitialState(), () => {
      console.log("Resetting timer");
      // this.componentDidMount();
    });

  	
  }

  handleTimerUpdate = () => {
    this.setState((curState) => ({remainingTime: --curState.remainingTime}));
  }

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }

  handleSignupOrLogin = () => {
    this.setState({user: userService.getUser()});
  }

  render() {
    return (
      <div className="App">
        <NavBar 
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
              handleTimerUpdate={this.handleTimerUpdate}
              remainingTime={this.state.remainingTime}
              isTiming={this.state.isTiming}
              handleTimer={this.handleTimer}
              resetTimer={this.resetTimer}
            />
          }/>
        </Switch>
      </div>
    );
  }
}

export default App;
