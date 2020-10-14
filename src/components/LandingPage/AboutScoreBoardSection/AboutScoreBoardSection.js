import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class AboutScoreBoardSection extends Component {
    render() {
        return (
            <section className="lpSection">
                <h3>Scoreboard:</h3>
                <p>Successful Players will be immortalized in the hall of fame.</p>
                <Link to="/scoreboard" className="buttonWhite">See Scoreboard</Link>
            </section>
        )
    }
}
