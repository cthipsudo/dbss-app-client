import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class PlayGameSection extends Component {
    render() {
        return (
            <section className="lpSection bottom">
                {/* <h4>Why are you still on this page, click the button below  to start your adventure!</h4> */}
                <Link to="/game" className="playButton"><h3>Play now!</h3></Link>
            </section>
        )
    }
}
