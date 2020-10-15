import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import GeneralNav from '../Nav/Nav'
import LandingPage from '../../routes/LandingPage/LandingPage'
import GamePage from '../../routes/GamePage/GamePageRouter'
import GameTutorialPage from '../../routes/GameTutorialPage/GameTutorialPage'
import GeneralFooter from '../Footer/Footer'
import './App.css';
import ScoreBoard from '../Scoreboard/Scoreboard';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary'

class App extends Component {
  renderMainRoutes() {
    return (
      <>
        <ErrorBoundary>
          <Route exact path="/" component={LandingPage}></Route>
          <Route path="/game" component={GamePage}></Route>
          <Route path="/scoreboard" component={ScoreBoard}></Route>
          <Route path="/tutorial" component={GameTutorialPage}></Route>
        </ErrorBoundary>
      </>
    )
  }
  render() {
    return (
      <div className="App">
        <GeneralNav></GeneralNav>
        <main className="appMain">{this.renderMainRoutes()}</main>
        <div className="push"></div>
        <GeneralFooter></GeneralFooter>
      </div>
    );
  }
}

export default App;
