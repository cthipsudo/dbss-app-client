import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './StartScreen.css'

export default class StartScreen extends Component {
    render() {
        return (
            <section className="startScreen">
                <h1>Drifting Between Silence and Stardust:</h1>
                <div className="startScreenButtons">
                    <Link id="loginButton" to="/game/login">Login</Link>
                    <Link id="startButton" to="/game/select-char">Play as guest!</Link>
                </div>
            </section>
        )
    }
}