import React, { Component } from 'react';
import Character from '../Character/Character'
import GameContext from '../../../contexts/GameContext'

export default class CharacterSaves extends Component {
    static contextType = GameContext;

    render() {
        return (
            <div className="characterSaves">
                <Character className="characterOne" selectChar = {this.props.selectChar} character={this.context.characterOne} slot={1} deleteChar={this.context.deleteCharacterOne}></Character>
                <Character className="characterTwo" selectChar = {this.props.selectChar} character={this.context.characterTwo} slot={2} deleteChar={this.context.deleteCharacterTwo}></Character>
                <Character className="characterThree" selectChar = {this.props.selectChar} character={this.context.characterThree} slot={3} deleteChar={this.context.deleteCharacterThree}></Character>
            </div>
        )
    }
}
