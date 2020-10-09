import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import GeneralNav from '../Nav/Nav'
import LandingPage from '../../routes/LandingPage/LandingPage'
import GamePage from '../../routes/GamePage/GamePageRouter'
import GeneralFooter from '../Footer/Footer'
import './App.css';
import ScoreBoard from '../Scoreboard/Scoreboard';

class App extends Component {
  renderMainRoutes() {
    return (
      <>
        <Route exact path="/" component={LandingPage}></Route>
        <Route path="/game" component={GamePage}></Route>
        <Route path="/scoreboard" component={ScoreBoard}></Route>
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
