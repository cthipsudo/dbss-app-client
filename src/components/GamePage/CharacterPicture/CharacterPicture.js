import React, { Component } from 'react';
import GameSessionContext from '../../../contexts/GameSessionContext';

export default class CharacterPicture extends Component {
    static contextType = GameSessionContext;

    render(){
        return(
            <div>
                {this.context.character.name} 
                <br/> 
                Picture
            </div>
        )
    }
}