import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import StartGamePage from './StartGamePage/StartGamePage'
import CharSelectPage from './CharSelectPage/CharSelectPage'
import CharCreatePage from './CharCreatePage/CharCreatePage'
export default class GamePage extends Component {
  makeGameRoutes() {
    return (
      <>
        <Route exact path="/game" component={StartGamePage}></Route>
        <Route exact path="/game/select-char" component={CharSelectPage}></Route>
        <Route path="/game/create/:slotNum" component={CharCreatePage}></Route>
      </>
    );
  }
  render() {
    return (
      <>
        {this.makeGameRoutes()}
      </>
    )
  }
}
