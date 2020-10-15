import React, { Component } from 'react';
import TokenService from '../../../services/token-service';
import GameServerService from '../../../services/game-server-service'
import PlayerDataService from '../../../services/player-data-service'
import CreateCharacterService from '../../../services/create-character-services';
import GameContext from '../../../contexts/GameContext';
import Astronaut from '../../../images/astronaut.svg';
import Alien from '../../../images/ufo.svg';
import Goblin from '../../../images/goblin.svg';

import './CharCreateSection.css';

export default class CharCreateSection extends Component {
    state = {
        createFunc: () => { },
        characterDisplay: Astronaut,
        char_name: '',
        char_race: 1,
        char_class: 1,
        error: null,
    }

    static contextType = GameContext;

    createCharacter = (ev) => {
        ev.preventDefault();
        this.setState({ error: null })
        const character = {
            char_name: this.state.char_name,
            char_class: Number(this.state.char_class),
            char_race: Number(this.state.char_race),
        }
        //if we're logged in, do the api create
        //else do a normal create
        if (TokenService.hasAuthToken()) {
            //API Call here
            const player = PlayerDataService.getPlayerData();
            if (this.context.editingCharacter) {
                GameServerService.updateUserCharSave(player.playerId, this.props.slot, character)
                    .then(res => {
                        this.context.setEditingCharacterFalse();
                        this.props.goBack();
                    })
            } else {
                GameServerService.makeUserCharSave(player.playerId, this.props.slot, character)
                    .then(res => {
                        //Convert the response to string data
                        const char = CreateCharacterService.translateCharResponse(res);
                        this.state.createFunc(char);
                        this.props.goBack();
                    })
                    .catch(res => {
                        this.setState({ error: res.error })
                    });
            }
        } else {
            //convert the char data to strings
            if (this.context.editingCharacter) {
                const char = CreateCharacterService.translateCharResponse(character);
                this.state.createFunc(char);
                this.context.setEditingCharacterFalse();
                this.props.goBack();
            } else {
                const char = CreateCharacterService.translateCharResponse(character);
                this.state.createFunc(char);
                this.props.goBack();
            }
        }
    }

    changeCharacterPortrait = (ev) => {
        //const characterRace = CreateCharacterService.translateCharRace(ev.target.value);
        this.handleChangeRace(ev);
        let portrait = "";
        switch (ev.target.value) {
            case '1':
                portrait = Astronaut;
                break;
            case '2':
                portrait = Alien;
                break;
            case '3':
                portrait = Goblin;
                break;
            default:
                portrait = Astronaut;
        }
        this.setState({
            characterDisplay: portrait,
        });
    }

    handleChangeName = (ev) => {
        this.setState({ char_name: ev.target.value })
    }
    handleChangeClass = (ev) => {
        this.setState({ char_class: ev.target.value })
    }
    handleChangeRace = (ev) => {
        this.setState({ char_race: ev.target.value })
    }

    grabInitalPortrait = (charRaceValue) => {
        switch(charRaceValue){
            case 1:
                return Astronaut;
            case 2:
                return Alien;
            case 3: 
                return Goblin;
            default:
                return Astronaut;
        }
    }

    componentDidMount() {
        const slotNum = this.props.slot;
        const funcName = CreateCharacterService.findSlotFunctionBySlot(slotNum);
        this.setState({
            createFunc: this.context[funcName],
        });

        //If we're editing a char
        if (this.context.editingCharacter) {
            let selectedChar = {};
            switch (slotNum) {
                case "slot-1":
                    selectedChar = this.context.characterOne;
                    break;
                case "slot-2":
                    selectedChar = this.context.characterTwo;
                    break;
                case "slot-3":
                    selectedChar = this.context.characterThree;
                    break;
                default:
                    selectedChar = {};
            }
            selectedChar = CreateCharacterService.translateCharDataToNum(selectedChar);
            this.setState({
                char_name: selectedChar.char_name,
                char_race: selectedChar.char_race,
                char_class: selectedChar.char_class,
                characterDisplay: this.grabInitalPortrait(selectedChar.char_race),
            })
        }
    }

    render() {
        const { char_name, char_race, char_class, error } = this.state;
        return (
            <section className="createCharSection">
                <div>
                    <h1>Make a character:</h1>
                    <form className="characterCreate" onSubmit={(event) => this.createCharacter(event)}>
                        <div className="formInputs">
                            <div>
                                <label htmlFor="character_name">Name:</label>
                                <input type="text" name="character_name" id="characterName" value={char_name} onChange={this.handleChangeName} required />
                            </div>
                            <div>
                                <label htmlFor="character_race">Race:</label>
                                <select name="character_race" id="characterRace" value={char_race} onChange={this.changeCharacterPortrait}>
                                    <option value="1">Human</option>
                                    <option value="2">Alien</option>
                                    <option value="3">Goblin</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="character_class">Class:</label>
                                <select name="character_class" id="characterClass" value={char_class} onChange={this.handleChangeClass}>
                                    <option value="1">Space Wizard</option>
                                    <option value="2">Astral Thief</option>
                                    <option value="3">Cosmic Warrior</option>
                                </select>
                            </div>
                        </div>
                        <div className="characterPortrait">
                            <img src={this.state.characterDisplay} alt="character portrait" />
                        </div>
                        {error && <p className="error">{error}</p>}
                        <button type="submit">Create</button>
                    </form>
                </div>
            </section>
        )
    }
}

