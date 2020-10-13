import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

export default class GeneralNav extends Component {
    render() {
        return (
            <nav className='appNav'>
                <ul className="navList" id="menu">
                    <li><Link to='/game'>Play!</Link></li>
                </ul>
                <Link to='/' id="navTitle">
                    <p>Drifting Between</p>
                    <p>Silence and Stardust</p>
                </Link>
                <ul className="navList" id="menu">
                    <li><Link to='/scoreboard'>Scoreboard</Link></li>
                </ul>

            </nav>
        )
    }
}