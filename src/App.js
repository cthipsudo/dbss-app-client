import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import GeneralNav from './components/Nav/Nav'
import LandingPage from './routes/LandingPage/LandingPage'
import GamePage from './routes/GamePage/GamePageRouter'

import GeneralFooter from './components/Footer/Footer'
import './App.css';

class App extends Component {
  renderMainRoutes() {
    return (
      <>
        <Route exact path="/" component={LandingPage}></Route>
        <Route path="/game" component={GamePage}></Route>
      </>
    )
  }
  render() {
    return (
      <div className="App">
        <GeneralNav></GeneralNav>
        <main className="appMain">{this.renderMainRoutes()}</main>
        <GeneralFooter></GeneralFooter>
      </div>
    );
  }
}

export default App;
