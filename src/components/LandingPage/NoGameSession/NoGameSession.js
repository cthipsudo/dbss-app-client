import React, { Component } from 'react';

import { Link } from 'react-router-dom';

export default class NoGameSession extends Component{
    render(){
        return (
            <section>
                <p>The page was refreshed</p>
                <p>No game session was found! Return back to game start!</p>
                <Link to="/game"> Back to Start of game </Link>
            </section>
        )
    }
}
