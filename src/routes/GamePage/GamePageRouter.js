import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import StartGamePage from './StartGamePage/StartGamePage'
import CharSelectPage from './CharSelectPage/CharSelectPage'
import CharCreatePage from './CharCreatePage/CharCreatePage'
import CharSaveContext from './../../contexts/CharacterSaveContext'
const emptyCharacter = {
  exist: false,
  name: null,
  class: null,
  race: null,
}
const createdCharacter = {
  exist: true,
  name: "Bob",
  class: "Warrior",
  race: "Human",
}

export default class GamePage extends Component {
  state = {
    characterOne: emptyCharacter,
    characterTwo: emptyCharacter,
    characterThree: createdCharacter,
  }
  makeCharacterOne = (charData) => {
    console.log('Trying to make Char one! with data', charData);
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
    const value = {
      characterOne: this.state.characterOne,
      characterTwo: this.state.characterTwo,
      characterThree: this.state.characterThree,
      makeCharacterOne: this.makeCharacterOne,
      makeCharacterTwo: this.makeCharacterTwo,
      makeCharacterThree: this.makeCharacterThree,
    }

    return (
      <>
        <CharSaveContext.Provider value={value}>
          {this.makeGameRoutes()}
        </CharSaveContext.Provider>
      </>
    )
  }
}
