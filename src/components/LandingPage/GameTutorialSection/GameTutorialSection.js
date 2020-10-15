import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class AboutScoreBoardSection extends Component {
    render() {
        return (
            <section className="lpSection">
                <h3>First time playing?</h3>
                <p>Not quite sure how this works?</p>
                <Link to="/tutorial" className="buttonWhite">See Tutorial</Link>
            </section>
        )
    }
}
