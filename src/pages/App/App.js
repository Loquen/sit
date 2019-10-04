import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import NavBar from '../../components/NavBar/NavBar';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import InfoPage from '../InfoPage/InfoPage';
import TimerPage from '../TimerPage/TimerPage';


import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path='/signup' render={({ history }) => 
            <SignupPage
              history={history}
              //handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/>
          <Route exact path='/login' render={({ history }) => 
            <LoginPage
              history={history}
            // handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/>
          <Route exact path='/' render={() => 
            <InfoPage
              // history={history}
            // handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/>
          <Route exact path='/timer' render={() => 
            <TimerPage
            />
          }/>
        </Switch>
      </div>
    );
  }
}

export default App;
