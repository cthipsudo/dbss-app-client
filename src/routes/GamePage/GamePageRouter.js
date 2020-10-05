import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import StartGamePage from './StartGamePage/StartGamePage'
import CharSelectPage from './CharSelectPage/CharSelectPage'
import CharCreatePage from './CharCreatePage/CharCreatePage'
import PlayGamePage from './PlayGamePage/PlayGamePage'
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
    selectedCharacter: emptyCharacter,
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
    this.setState({
      selectedCharacter: Object.assign(newChar),
    })
  }

  makeGameRoutes() {
    return (
      <>
        <Route exact path="/game" component={StartGamePage}></Route>
        <Route exact path="/game/select-char" component={CharSelectPage}></Route>
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
      makeCharacterOne: this.makeCharacterOne,
      makeCharacterTwo: this.makeCharacterTwo,
      makeCharacterThree: this.makeCharacterThree,
      deleteCharacterOne: this.deleteCharacterOne,
      deleteCharacterTwo: this.deleteCharacterTwo,
      deleteCharacterThree: this.deleteCharacterThree,
      selectCharacter: this.selectCharacter,
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
