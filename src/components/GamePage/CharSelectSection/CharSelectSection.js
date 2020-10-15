import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CharacterSaves from '../CharacterSaves/CharacterSaves'
import GameContext from '../../../contexts/GameContext'
import PlayerDataService from '../../../services/player-data-service'
import GameServerService from '../../../services/game-server-service'
import './CharSelectSection.css'


export default class CharSelect extends Component {

    constructor(props) {
        super(props)
        this.myRef = React.createRef()  
    }

    state = {
        error: null,
    }
    static contextType = GameContext;

    cleanCharSlot = () => {
        this.context.deleteCharacterOne();
        this.context.deleteCharacterTwo();
        this.context.deleteCharacterThree();
    }

    componentDidMount() {
        //unselect character if selected
        this.context.unselectCharacter();
        //api call here
        //check for playerData in local 
        if (PlayerDataService.hasPlayerData()) {
            //Clean Char Slots
            this.cleanCharSlot();
            //Grab local player data
            const playerData = PlayerDataService.getPlayerData();
            GameServerService.getUserCharData(playerData.playerId)
                .then(res => {
                    this.setState({ error: null })
                    return res.map(charData => {
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
                        return "Char created"
                    })
                })
                .catch(res => {
                    this.setState({ error: res.error })
                })
        } else {

        }
    }

    grabSelectedChar = () => {
        if (!this.context.characterSelected.exist) {
            return (<p>No Character Selected!</p>)
        } else {
            this.scrollToMyRef();
            return (<p>{this.context.characterSelected.name} selected!</p>)
        }
    }

    scrollToMyRef = () => window.scrollTo(0, this.myRef.current.offsetTop)

    render() {
        const { error } = this.state;
        const selectedChar = this.context.characterSelected
        const selectedCharText = this.grabSelectedChar();
        return (
            <section className="charSelect">
                <h1>Choose your character:</h1>
                <CharacterSaves />
                {error && <p>{error}</p>}
                {selectedCharText}
                <p className="hidden" ref={this.myRef}></p>
                {selectedChar.exist && <Link to="/game/play" id="charSelectStart" onClick={() => this.context.startGameSession()}>Start!</Link>}
            </section>
        )
    }
}