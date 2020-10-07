import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import StartGamePage from './StartGamePage/StartGamePage'
import CharSelectPage from './CharSelectPage/CharSelectPage'
import CharCreatePage from './CharCreatePage/CharCreatePage'
import PlayGamePage from './PlayGamePage/PlayGamePage'
import LoginPage from './LoginPage/LoginPage'
import GameContext from '../../contexts/GameContext'

const emptyCharacter = {
  exist: false,
  name: null,
  class: null,
  race: null,
}

export default class GamePage extends Component {
  state = {
    characterOne: {},
    characterTwo: {},
    characterThree: {},
    characterSelected: {},
    gameInSession: false,
    loading: false,
    loggedIn: false,
  }

  makeCharacterOne = (charData) => {
    //console.log('Trying to make Char one! with data', charData);
    const newChar = {
      exist: true, ...charData
    }
    this.setState({
      characterOne: Object.assign(newChar),
    })
  }
  makeCharacterTwo = (charData) => {
    const newChar = {
      exist: true, ...charData
    }
    this.setState({
      characterTwo: Object.assign(newChar),
    })
  }
  makeCharacterThree = (charData) => {
    const newChar = {
      exist: true, ...charData
    }
    this.setState({
      characterThree: Object.assign(newChar),
    })
  }

  deleteCharacterOne = () => {
    this.setState({
      characterOne: Object.assign(emptyCharacter),
    })
  }
  deleteCharacterTwo = () => {
    this.setState({
      characterTwo: Object.assign(emptyCharacter),
    })
  }
  deleteCharacterThree = () => {
    this.setState({
      characterThree: Object.assign(emptyCharacter),
    })
  }

  selectCharacter = (charData) => {
    const newChar = {
      exist: true, ...charData
    }
    //console.log(newChar);
    this.setState({
      characterSelected: Object.assign(newChar),
    })
  }
  startGameSession = () => {
    console.log("Game start!");
    this.setState({
      gameInSession: true,
    })
  }
  setLoginState = () => {
    this.setState({
      loggedIn: true,
    })
  }
  makeGameRoutes() {
    return (
      <>
        <Route exact path="/game" component={StartGamePage}></Route>
        <Route path="/game/login" component={LoginPage}></Route>
        <Route path="/game/select-char" component={CharSelectPage}></Route>
        <Route path="/game/create/:slotNum" component={CharCreatePage}></Route>
        <Route path="/game/play" component={PlayGamePage}></Route>
      </>
    );
  }
  render() {
    const value = {
      characterOne: this.state.characterOne,
      characterTwo: this.state.characterTwo,
      characterThree: this.state.characterThree,
      characterSelected: this.state.characterSelected,
      gameInSession: this.state.gameInSession,
      loading: this.state.loading,
      playerId: this.state.playerId,
      makeCharacterOne: this.makeCharacterOne,
      makeCharacterTwo: this.makeCharacterTwo,
      makeCharacterThree: this.makeCharacterThree,
      deleteCharacterOne: this.deleteCharacterOne,
      deleteCharacterTwo: this.deleteCharacterTwo,
      deleteCharacterThree: this.deleteCharacterThree,
      selectCharacter: this.selectCharacter,
      startGameSession: this.startGameSession,
      setLoginState: this.setLoginState,
    }

    return (
      <>
        <GameContext.Provider value={value}>
          {this.makeGameRoutes()}
        </GameContext.Provider>
      </>
    )
  }
}
