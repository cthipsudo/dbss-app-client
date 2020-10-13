import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class PlayGameSection extends Component {
    render() {
        return (
            <section className="lpSection">
                <h2>Play the game!</h2>
                <h3>Why are you still on this page, click the button below  to start your adventure!</h3>
                <Link to="/game" className="playButton">Play now</Link>
            </section>
        )
    }
}
