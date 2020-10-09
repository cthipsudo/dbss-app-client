import { cs } from 'date-fns/locale';
import React, { Component } from 'react';
import GameServerService from '../../services/game-server-service';

import './Scoreboard.css';

export default class ScoreBoard extends Component {
    state = {
        scoreBase: null
    }
    componentDidMount(){
        //grab the scores
        GameServerService.getGameScores()
            .then(res => {
                //console.log(res)
                this.setState({
                    scoreBase: res
                })
            })
    }

    renderScores = () => {
        
    }

    render() {
        console.log(this.state.scoreBase);
        return (
            <>
                <header role="banner">
                    <h1>Hall of Fame</h1>
                </header>
                <section>
                    <div className="scoreHeader">
                        <h2 className="underline">Initals</h2>
                        <h2 className="underline">Score</h2>
                    </div>
                    <div className="scoreEntry">
                        <h2>1. Score Initials</h2>
                        <h2>10750</h2>
                    </div>
                    <div className="scoreEntry">
                        <h3>2. Score Initials</h3>
                        <h3>10650</h3>
                    </div>
                    <div className="scoreEntry">
                        <h4>3. Score Initials</h4>
                        <h4>484</h4>
                    </div>
                    <div className="scoreEntry">
                        <p>4. Score Initials</p>
                        <p>484</p>
                    </div>
                </section>
            </>
        )

    }
}