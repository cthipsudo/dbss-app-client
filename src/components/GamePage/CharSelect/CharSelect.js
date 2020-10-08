import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CharacterSaves from './CharacterSaves/CharacterSaves'
import GameContext from '../../../contexts/GameContext'
import PlayerDataService from '../../../services/player-data-service'
import GameServerService from '../../../services/game-server-service'
import './CharSelect.css'


export default class CharSelect extends Component {
    static contextType = GameContext;

    cleanCharSlot = () => {
        this.context.deleteCharacterOne();
        this.context.deleteCharacterTwo();
        this.context.deleteCharacterThree();
    }

    componentDidMount() {
        //api call here
        //check for playerData in local 
        if (PlayerDataService.hasPlayerData()) {
            //Clean Char Slots
            this.cleanCharSlot();
            //Grab local player data
            const playerData = PlayerDataService.getPlayerData();
            GameServerService.getUserCharData(playerData.playerId)
                .then(res => {
                    //console.log(res)
                    res.map(charData => {
                        //console.log(charData);
                        const charRefined = {
                            name: charData.char_name,
                            class: charData.class_name,
                            race: charData.race_name,
                        }
                        switch (charData.slot_num) {
                            case 1:
                                this.context.makeCharacterOne(charRefined);
                                break;
                            case 2:
                                this.context.makeCharacterTwo(charRefined);
                                break;
                            case 3:
                                this.context.makeCharacterThree(charRefined);
                                break;
                            default:
                        }
                    })
                })
                .catch("set error state here")
        } else {
            console.log('Theres a guest session')
            //resetCharData
            this.cleanCharSlot();
        }
    }

    grabSelectedChar = () => {
        //console.log(this.context.characterSelected);
        if (!this.context.characterSelected.exist) {
            return (<p>No Character Selected!</p>)
        } else {
            return (<p>{this.context.characterSelected.name} selected!</p>)
        }
    }

    render() {
        const selectedChar = this.context.characterSelected
        const selectedCharText = this.grabSelectedChar();
        return (
            <section className="charSelect">
                <h1>Choose your character:</h1>
                <CharacterSaves />
                {selectedCharText}
                {selectedChar.exist && <Link to="/game/play" id="charSelectStart" onClick={() => this.context.startGameSession()}>Start!</Link>}
            </section>
        )
    }
}