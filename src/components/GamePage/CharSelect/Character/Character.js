import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import GameContext from '../../../../contexts/GameContext'
import GameServerService from '../../../../services/game-server-service'
import PlayerDataService from '../../../../services/player-data-service'
import TokenService from '../../../../services/token-service'

export default class Character extends Component {
    static contextType = GameContext;
    deleteChar = () => {
        //Check if we're logged in
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
                <div className="characterSlot">
                    <p>No Character Data</p>
                    <p id="newChar">?</p>
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
                    <p>Existing Character Picture here</p>
                    <p>Name:{character.name}</p>
                </div>
                <div className="characterSlotButtons">
                    <Link className="editCharButton" to={`/game/edit/slot-${this.props.slot}`}>Edit</Link>
                    <button onClick={this.deleteChar}>Delete</button>
                </div>
            </div>
        )
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

