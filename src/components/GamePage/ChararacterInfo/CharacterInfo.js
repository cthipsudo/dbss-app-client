import React, { Component } from 'react';
import CharacterName from '../CharacterName/CharacterName';
import GameSessionContext from '../../../contexts/GameSessionContext';
import GameMusic from '../../GameMusic/GameMusic'


export default class CharacterInfo extends Component {
    static contextType = GameSessionContext;
    render() {
        return (
            <div className="characterInfo">
                <div className="characterHealthAndName">
                    <h3 className="characterHealth">{this.context.health}</h3>
                    <CharacterName />
                </div>
                <GameMusic />
            </div>
        )
    }
}