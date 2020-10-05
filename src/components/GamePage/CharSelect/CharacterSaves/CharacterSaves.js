import React, { Component } from 'react';
import Character from '../Character/Character'
import CharacterSaveContext from '../../../../contexts/CharacterSaveContext'

export default class CharacterSaves extends Component {
    static contextType = CharacterSaveContext;

    render() {
        //console.log(this.context.characterOne);
        return (
            <div className="characterSaves">
                <Character className="characterOne" character={this.context.characterOne} slot="one" deleteChar={this.context.deleteCharacterOne}></Character>
                <Character className="characterTwo" character={this.context.characterTwo} slot="two" deleteChar={this.context.deleteCharacterTwo}></Character>
                <Character className="characterThree" character={this.context.characterThree} slot="three" deleteChar={this.context.deleteCharacterThree}></Character>
            </div>
        )
    }
}
