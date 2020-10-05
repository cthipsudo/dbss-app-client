import React, { Component } from 'react';
import CharacterSaves from './CharacterSaves/CharacterSaves'
import CharSaveContext from '../../../contexts/CharacterSaveContext'
import './CharSelect.css'
import CharacterSaveContext from '../../../contexts/CharacterSaveContext';

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

export default class CharSelect extends Component {
    state = {
        characterOne: emptyCharacter,
        characterTwo: emptyCharacter,
        characterThree: createdCharacter,
    }
    makeCharacterOne = (charData) => {
        console.log('Trying to make Char one!');
    }
    makeCharacterTwo = (charData) => {
        console.log('Trying to make Char two!');
    }
    makeCharacterThree = (charData) => {
        console.log('Trying to make Char three!');
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
            <CharacterSaveContext.Provider value={value}>
                <section className="charSelect">
                    <h1>Choose your character:</h1>
                    <CharacterSaves />
                    <button id="startGameButton">Start!</button>
                </section>
            </CharacterSaveContext.Provider>

        )
    }
}