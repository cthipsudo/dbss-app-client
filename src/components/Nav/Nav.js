import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

export default class GeneralNav extends Component {
    render() {
        return (
            <nav className='appNav'>
                <ul className="navList">
                    <li><Link to='/game'>Play!</Link></li>
                </ul>
                <Link to='/' id="navTitle">
                    <p>Drifting Between</p>
                    <p>Silence and Stardust</p>
                </Link>
                <ul className="navList">
                    <li className=""><Link to='/scoreboard'>Scores</Link></li>
                </ul>

            </nav>
        )
    }
}