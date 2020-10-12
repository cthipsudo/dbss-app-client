import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Footer.css'

export default class Footer extends Component {
    render() {
        return (
            <footer id="footer">
                <ul className="navListFooter">
                    <li><Link to='/game'>Play!</Link></li>
                    <li><Link to='/scoreboard'>Scoreboard</Link></li>
                    {/* <li><Link to='/contact-me'>Contact Me!</Link></li> */}
                </ul>
            </footer>
        )
    }
}