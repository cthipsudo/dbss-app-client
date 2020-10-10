import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

export default class GeneralNav extends Component {
    render() {
        return (
            <nav className='appNav'>

                <ul className="navList">
                    <Link to='/' id="navTitle">DBSS</Link>
                    <li><Link to='/game'>Play!</Link></li>
                    <li><Link to='/scoreboard'>Scoreboard</Link></li>
                    {/* <li><Link to='/contact-me'>Contact Me!</Link></li> */}
                </ul>
            </nav>
        )
    }
}