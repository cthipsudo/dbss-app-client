import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CharacterSaves from './CharacterSaves/CharacterSaves'
import GameContext from '../../../contexts/GameContext'
import './CharSelect.css'


export default class CharSelect extends Component {
    static contextType = GameContext;

    componentDidMount(){
        //api call here
    }

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
        console.log(this.context.playerId)
        return (
            <section className="charSelect">
                <h1>Choose your character:</h1>
                <CharacterSaves />
                {selectedCharText}
                {selectedChar.exist && <Link to="/game/play" id="charSelectStart" onClick={() => this.context.startGameSession()}>Start!</Link>}
            </section>
        )
    }
}