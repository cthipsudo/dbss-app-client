import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TokenService from '../../../services/token-service';
import PlayerDataService from '../../../services/player-data-service';
import GameContext from '../../../contexts/GameContext';

import './StartSection.css'

export default class StartScreen extends Component {
    constructor(props) {
        super(props)
        this.myRef = React.createRef()  
    }

    static contextType = GameContext;

    handleLogoutClick = () => {
        TokenService.clearAuthToken();
        PlayerDataService.clearPlayerData();
        this.context.cleanAllCharacterSlots();
    }
    handleGuestSessionStart = () => {
        this.context.setGuestSessionTrue();
    }
    renderLogoutButtons = () => {
        return (
            <>
                <Link id="loginButton" onClick={this.handleLogoutClick} to="/game">Logout</Link>
                <Link id="startButton" to="/game/select-char">Continue</Link>
            </>
        )
    }
    renderLoginButtons = () => {
        return(
            <>
                <Link id="loginButton" to="/game/login">Login</Link> 
                <Link id="startButton" to="/game/select-char" onClick={this.handleGuestSessionStart}>Play as guest!</Link>
            </>
        )
    }

    scrollToMyRef = () => window.scrollTo(0, this.myRef.current.offsetTop) 

    componentDidMount(){
        this.scrollToMyRef();
    }
    render() {
        return (
            <section className="startScreen" ref={this.myRef}>
                <h1>Drifting Between Silence and Stardust:</h1>
                <div className="startScreenButtons">
                    {TokenService.hasAuthToken() ? this.renderLogoutButtons(): this.renderLoginButtons()}
                </div>
            </section>
        )
    }
}