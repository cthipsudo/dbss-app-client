import React, { Component } from 'react';

import './Footer.css'

export default class Footer extends Component {
    render() {
        return (
            <footer id="footer">
                <p>Built by cthipsudo</p>
                <p className="footerSpacer">|</p>
                <p>All Rights Reserved.</p>
                <p className="footerSpacer">|</p>
                <a href="https://oscarthipp.com/"><p>See my other projects!</p></a>
            </footer>
        )
    }
}