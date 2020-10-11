import React, { Component } from 'react';
import CharacterPicture from '../CharacterPicture/CharacterPicture';
import CharacterName from '../CharacterName/CharacterName';
import GameSessionContext from '../../../contexts/GameSessionContext';


export default class CharacterInfo extends Component {
    static contextType = GameSessionContext;
    render() {
        return (
            <div className="characterInfo">
                <div className="characterPicAndName">
                    <CharacterPicture />
                    <CharacterName />
                </div>
                <h3 className="characterHealth">{this.context.health}</h3>
            </div>
        )
    }
}