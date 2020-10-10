import React, { Component } from 'react';
import CreateCharService from '../../../services/CreateCharacterServices';
import TokenService from '../../../services/token-service';
import GameServerService from '../../../services/game-server-service'
import PlayerDataService from '../../../services/player-data-service'
import CreateCharacterService from '../../../services/CreateCharacterServices';
import GameContext from '../../../contexts/GameContext';

import './CharCreate.css';

export default class CharCreate extends Component {
    state = {
        createFunc: () => { },
        characterDisplay: "human Picture here",
    }

    static contextType = GameContext;

    componentDidMount() {
        const slotNum = this.props.slot;
        const funcName = CreateCharService.findSlotFunctionBySlot(slotNum);
        console.log(funcName);
        this.setState({
            createFunc: this.context[funcName],
        });
    }
    createCharacter = (ev) => {
        ev.preventDefault();
        const character = {
            char_name: ev.target.character_name.value,
            char_class: Number(ev.target.character_class.value),
            char_race: Number(ev.target.character_race.value),
        }
        //console.log(character);
        //if we're logged in, do the api create
        //else do a normal create
        if (TokenService.hasAuthToken()) {
            //API Call here
            const player = PlayerDataService.getPlayerData();
            GameServerService.makeUserCharSave(player.playerId, this.props.slot, character)
                .then(res => {
                    //Convert the response to string data
                    const char = CreateCharacterService.translateCharResponse(res);

                    this.state.createFunc(char);
                    this.props.goBack();
                })
                .catch("error context here");
        } else {
            //convert the char data to strings
            const char = CreateCharacterService.translateCharResponse(character); 
            //console.log(char);
            this.state.createFunc(char);
            this.props.goBack();
        }
    }
    changeCharacterPortrait = (ev) => {
        const characterRace = CreateCharacterService.translateCharRace(ev.target.value);
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
                                <input type="text" name="character_name" id="characterName" required />
                            </div>
                            <div>
                                <label htmlFor="character_race">Race:</label>
                                <select name="character_race" id="characterRace" onChange={(ev) => this.changeCharacterPortrait(ev)}>
                                    <option value="1">Human</option>
                                    <option value="2">Alien</option>
                                    <option value="3">Goblin</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="character_class">Class:</label>
                                <select name="character_class" id="characterClass">
                                    <option value="1">Space Wizard</option>
                                    <option value="2">Astral Thief</option>
                                    <option value="3">Cosmic Warrior</option>
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

