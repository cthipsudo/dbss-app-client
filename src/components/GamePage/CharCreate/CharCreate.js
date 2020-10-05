import React, { Component } from 'react';
import CreateCharService from '../../../services/CreateCharacterServices';

import CharacterSaveContext from '../../../contexts/CharacterSaveContext';

import './CharCreate.css';
export default class CharCreate extends Component {

    static contextType = CharacterSaveContext;

    componentDidMount(){
        const slotNum = this.props.slot;
        const funcName = CreateCharService.findSlotFunctionBySlot(slotNum);
        console.log(funcName);
        console.log(this.context.makeCharacterOne());
        this.context[funcName]();
    }
    render() {
        return (
            <section className="createCharSection">
                <div>
                    <h1>Make a character:</h1>
                    <form className="characterCreate" action="">
                        <div className="formInputs">
                            <div>
                                <label htmlFor="character_name">Name:</label>
                                <input type="text" name="character_name" id="characterName" />
                            </div>
                            <div>
                                <label htmlFor="character_pronoun">Pronoun:</label>
                                <select name="character_pronoun" id="characterPronoun">
                                    <option value="he">He</option>
                                    <option value="she">She</option>
                                    <option value="they">They</option>
                                    <option value="it">It</option>
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
                            <div>
                                <label htmlFor="character_race">Race:</label>
                                <select name="character_race" id="characterRace">
                                    <option value="human">Human</option>
                                    <option value="alien">Alien</option>
                                    <option value="goblin">Goblin</option>
                                </select>
                            </div>
                        </div>
                        <p>[Character picture here, will change based on race and possibly class]</p>
                        <button type="submit">Create</button>
                    </form>
                </div>
            </section>
        )
    }
}

