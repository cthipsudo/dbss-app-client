import React, { Component } from 'react';
import GameSessionContext from '../../../contexts/GameSessionContext';

export default class CharacterName extends Component {
    static contextType = GameSessionContext;

    render(){
        return(
            <div className="characterName">
                <h2 className>{this.context.character.name}</h2>
            </div>
        )
    }
}