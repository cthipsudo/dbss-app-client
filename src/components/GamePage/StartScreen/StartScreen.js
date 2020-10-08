import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TokenService from '../../../services/token-service';
import PlayerDataService from '../../../services/player-data-service';
import GameContext from '../../../contexts/GameContext';

import './StartScreen.css'

export default class StartScreen extends Component {
    static contextType = GameContext;

    handleLogoutClick = () => {
        TokenService.clearAuthToken();
        PlayerDataService.clearPlayerData();
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
                <Link id="startButton" to="/game/select-char">Play as guest!</Link>
            </>
        )
    }
    render() {
        return (
            <section className="startScreen">
                <h1>Drifting Between Silence and Stardust:</h1>
                <div className="startScreenButtons">
                    {TokenService.hasAuthToken() ? this.renderLogoutButtons(): this.renderLoginButtons()}
                </div>
            </section>
        )
    }
}