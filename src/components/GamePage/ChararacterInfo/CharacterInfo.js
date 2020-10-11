import React, { Component } from 'react';
import CharacterPicture from '../CharacterPicture/CharacterPicture';
import GameSessionContext from '../../../contexts/GameSessionContext';


export default class CharacterInfo extends Component {
    static contextType = GameSessionContext;
    render() {
        return (
                <div className="characterInfo">
                    <CharacterPicture />
                    <h2 className="characterName">{this.context.character.name}</h2>
                </div>
        )
    }
}