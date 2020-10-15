import React, { Component } from 'react';
import SpaceShip from '../../../images/spaceship.svg'
import './Header.css';

export default class Header extends Component {
    render() {
        return (
            <header className="lpHeader">
                <h1>Drifting Between Silence and Stardust</h1>
                <h2>A creative narrative game crafted by Chanpasong Thipphakhinkeo</h2>
                <img className="mobileHidden" src={SpaceShip} alt="spaceship"></img>
            </header>
        )
    }
}