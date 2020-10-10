import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import StartGamePage from '../StartGamePage/StartGamePage'
import CharSelectPage from '../CharSelectPage/CharSelectPage'
import CharCreatePage from '../CharCreatePage/CharCreatePage'
import PlayGamePage from '../PlayGamePage/PlayGamePage'
import LoginPage from '../LoginPage/LoginPage'
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
    editingCharacter: false,
    gameInSession: false,
    guestSession: false,
    loading: false,
  }

  makeCharacterOne = (charData) => {
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
  cleanAllCharacterSlots = () => {
    this.setState({
      characterOne: Object.assign(emptyCharacter),
      characterTwo: Object.assign(emptyCharacter),
      characterThree: Object.assign(emptyCharacter),
    })
  }
  selectCharacter = (charData) => {
    const newChar = {
      exist: true, ...charData
    }
    this.setState({
      characterSelected: Object.assign(newChar),
    })
  }
  unselectCharacter = () => {
    const newChar = {};
    this.setState({
      characterSelected:Object.assign(newChar),
    })
  }
  startGameSession = () => {
    this.setState({
      gameInSession: true,
    })
  }
  setGuestSessionTrue = () => {
    this.setState({
      guestSession: true,
    })
  }
  setGuestSessionFalse = () => {
    this.setState({
      guestSession: false,
    })
  }
  setEditingCharacterTrue = () => {
    this.setState({
      editingCharacter: true
    })
  }
  setEditingCharacterFalse = () => {
    this.setState({
      editingCharacter: false
    })
  }
  
  makeGameRoutes() {
    return (
      <>
        <Route exact path="/game" component={StartGamePage}></Route>
        <Route path="/game/login" component={LoginPage}></Route>
        <Route path="/game/select-char" component={CharSelectPage}></Route>
        <Route path="/game/create/:slotNum" component={CharCreatePage}></Route>
        <Route path="/game/edit/:slotNum" component={CharCreatePage}></Route>
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
      guestSession: this.state.guestSession,
      editingCharacter: this.state.editingCharacter,
      makeCharacterOne: this.makeCharacterOne,
      makeCharacterTwo: this.makeCharacterTwo,
      makeCharacterThree: this.makeCharacterThree,
      deleteCharacterOne: this.deleteCharacterOne,
      deleteCharacterTwo: this.deleteCharacterTwo,
      deleteCharacterThree: this.deleteCharacterThree,
      cleanAllCharacterSlots: this.cleanAllCharacterSlots,
      selectCharacter: this.selectCharacter,
      unselectCharacter: this.unselectCharacter,
      startGameSession: this.startGameSession,
      setGuestSessionTrue: this.setGuestSessionTrue,
      setGuestSessionFalse: this.setGuestSessionFalse,
      setEditingCharacterTrue: this.setEditingCharacterTrue,
      setEditingCharacterFalse: this.setEditingCharacterFalse,
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
