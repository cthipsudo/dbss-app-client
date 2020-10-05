import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

export default class GeneralNav extends Component {
    render(){
        return (
            <nav className='appNav'>
                <Link to='/' id="navTitle">DBSS</Link>
                <ul className="navList">
                    <li><Link to='/game'>Play!</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/contact-me'>Contact Me!</Link></li>
                </ul>
            </nav>
        )
    }
}