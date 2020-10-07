import React, { Component } from 'react';
import CreateCharService from '../../../services/CreateCharacterServices';

import GameContext from '../../../contexts/GameContext';

import './CharCreate.css';
export default class CharCreate extends Component {
    state = {
        createFunc: () => {},
        characterDisplay: "human Picture here",
    }

    static contextType = GameContext;

    componentDidMount(){
        const slotNum = this.props.slot;
        const funcName = CreateCharService.findSlotFunctionBySlot(slotNum);
        this.setState({
            createFunc: this.context[funcName],
        });
    }
    createCharacter = (ev) => {
        ev.preventDefault();
        const character = {
            name: ev.target.character_name.value,
            class:ev.target.character_class.value,
            race:ev.target.character_race.value,
        }
        this.state.createFunc(character);
        this.props.goBack();
    }
    changeCharacterPortrait = (ev) => {
        const characterRace = ev.target.value;
        console.log()
        this.setState({
            characterDisplay: `${characterRace} Picture here`,
        });
    }

    render() {
        //
        return (
            <section className="createCharSection">
                <div>
                    <h1>Make a character:</h1>
                    <form className="characterCreate" onSubmit={(event) => this.createCharacter(event)}>
                        <div className="formInputs">
                            <div>
                                <label htmlFor="character_name">Name:</label>
                                <input type="text" name="character_name" id="characterName"  required/>
                            </div>
                            <div>
                                <label htmlFor="character_race">Race:</label>
                                <select name="character_race" id="characterRace" onChange={(ev) => this.changeCharacterPortrait(ev)}>
                                    <option value="human">Human</option>
                                    <option value="alien">Alien</option>
                                    <option value="goblin">Goblin</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="character_class">Class:</label>
                                <select name="character_class" id="characterClass">
                                    <option value="space_wizard">Space Wizard</option>
                                    <option value="astral_thief">Astral Thief</option>
                                    <option value="cosmic_warrior">Cosmic Warrior</option>
                                </select>
                            </div>
                        </div>
                        <div className="characterPortrait">
                            {this.state.characterDisplay}
                        </div>
                        <button type="submit">Create</button>
                    </form>
                </div>
            </section>
        )
    }
}

