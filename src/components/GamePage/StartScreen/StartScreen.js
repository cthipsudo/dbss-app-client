import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TokenService from '../../../services/token-service';
import PlayerDataService from '../../../services/player-data-service';

import './StartScreen.css'

export default class StartScreen extends Component {
    handleLogoutClick = () => {
        TokenService.clearAuthToken();
        PlayerDataService.clearPlayerData();

    }
    render() {
        return (
            <section className="startScreen">
                <h1>Drifting Between Silence and Stardust:</h1>
                <div className="startScreenButtons">
                    {TokenService.hasAuthToken() ? <Link id="loginButton" onClick={this.handleLogoutClick} to="/game">Logout</Link> : <Link id="loginButton" to="/game/login">Login</Link> }
                    <Link id="startButton" to="/game/select-char">Play as guest!</Link>
                </div>
            </section>
        )
    }
}