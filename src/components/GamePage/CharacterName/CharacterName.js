import React, { Component } from 'react';
import GameSessionContext from '../../../contexts/GameSessionContext';

export default class CharacterName extends Component {
    static contextType = GameSessionContext;

    render(){
        let name = "";
        if(!this.context.character === null){
            name = name.context.character.name
        }
        return(
            <div className="characterName">
                <h2>{name}</h2>
            </div>
        )
    }
}