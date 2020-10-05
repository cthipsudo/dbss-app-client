import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CharacterSaves from './CharacterSaves/CharacterSaves'
import CharacterSaveContext from '../../../contexts/CharacterSaveContext'
import './CharSelect.css'


export default class CharSelect extends Component {
    static contextType = CharacterSaveContext;

    grabSelectedChar = () => {
        //console.log(this.context.characterSelected);
        if (!this.context.characterSelected.exist) {
            return (<p>No Character Selected!</p>)
        } else {
            return (<p>{this.context.characterSelected.name} selected!</p>)
        }

    }
    render() {
        const selectedChar = this.context.characterSelected
        const selectedCharText = this.grabSelectedChar();
        return (
            <section className="charSelect">
                <h1>Choose your character:</h1>
                <CharacterSaves />
                {selectedCharText}
                {selectedChar.exist && <Link to="/game/play" id="charSelectStart">Start!</Link>}
            </section>
        )
    }
}