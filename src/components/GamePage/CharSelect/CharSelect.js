import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import CharacterSaves from './CharacterSaves/CharacterSaves'
import './CharSelect.css'


export default class CharSelect extends Component {
    render() {
        return (
            <section className="charSelect">
                <h1>Choose your character:</h1>
                <CharacterSaves />
                <Link to="/game/play" id="charSelectStart">Start!</Link>
            </section>
        )
    }
}