import React, { Component } from 'react';
import CharacterSaves from './CharacterSaves/CharacterSaves'
import './CharSelect.css'


export default class CharSelect extends Component {
    render() {
        return (
            <section className="charSelect">
                <h1>Choose your character:</h1>
                <CharacterSaves />
                <button id="startGameButton">Start!</button>
            </section>
        )
    }
}