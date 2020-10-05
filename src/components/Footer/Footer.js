import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Footer.css'

export default class Footer extends Component {
    render() {
        return (
            <footer>
                <p>General Footer here</p>
                <ul className="navListFooter">
                    <li><Link to='/game'>Play!</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/contact-me'>Contact Me!</Link></li>
                </ul>
            </footer>
        )
    }
}