import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import GameContext from '../../../contexts/GameContext'
import GameServerService from '../../../services/game-server-service'
import PlayerDataService from '../../../services/player-data-service'
import TokenService from '../../../services/token-service'
import Astronaut from '../../../images/astronaut.svg';
import Goblin from '../../../images/goblin.svg';
import Alien from '../../../images/ufo.svg';

export default class Character extends Component {
    static contextType = GameContext;
    static defaultProps = {
        character: {}
    }
    deleteChar = () => {
        //Check if we're logged in
        //Unselect Char if selected
        if (this.context.characterSelected.exist) {
            this.context.unselectCharacter();
        }

        if (TokenService.hasAuthToken()) {
            const player = PlayerDataService.getPlayerData();
            GameServerService.deleteUserCharSave(player.playerId, this.props.slot)
            this.props.deleteChar()
        } else {
            this.props.deleteChar()
        }
    }
    renderEmptyChar() {
        return (
            <div className="characterContainer">
                <div className="characterSlot noChar">
                    <p id="noChar">?</p>
                </div>
                <Link className="makeCharButton" to={`/game/create/slot-${this.props.slot}`}>Create</Link>
            </div>
        )
    }
    renderCreatedChar() {
        const character = this.props.character;

        return (
            <div className="characterContainer">
                <div className="characterSlot created" onClick={() => this.context.selectCharacter(character)}>
                    <img src={this.grabCharPhoto(character)} alt="character"></img>
                    <h2>{character.name}</h2>
                </div>
                <div className="characterSlotButtons">
                    <Link className="editCharButton" to={`/game/edit/slot-${this.props.slot}`} onClick={this.context.setEditingCharacterTrue}>Edit</Link>
                    <button className="deleteCharButton" onClick={this.deleteChar}>Delete</button>
                </div>
            </div>
        )
    }

    grabCharPhoto = (character) => {
        switch(character.race){
            case 'human':
                return Astronaut;
            case 'alien':
                return Alien;
            case 'goblin':
                return Goblin;
            default:
                return Astronaut;
        }
    }

    render() {
        return (
            <>
                {!this.props.character.exist && this.renderEmptyChar()}
                {this.props.character.exist && this.renderCreatedChar()}
            </>
        )
    }
}

