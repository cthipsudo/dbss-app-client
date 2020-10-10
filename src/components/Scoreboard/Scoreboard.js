import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import React, { Component } from 'react';
import GameServerService from '../../services/game-server-service';
import GameFunctions from '../../services/GameFunctions';
import './Scoreboard.css';

export default class ScoreBoard extends Component {
    state = {
        scoreBase: null,
        recentScoreBase: null,
        topScores: false,
    }
    componentDidMount() {
        //grab the scores
        GameServerService.getGameScores()
            .then(res => {
                //console.log(res)
                this.setState({
                    scoreBase: res
                })
            })
        GameServerService.getRecentGameScores()
            .then(res => {
                //console.log(res);
                this.setState({
                    recentScoreBase: res
                })
            })
    }

    renderScores = () => {
        //console.log('Trying to render scores');
        let scores = [];
        if (this.state.topScores) {
            //console.log('Grabbing Top Scores')
            scores = this.state.scoreBase;
        } else {
            scores = this.state.recentScoreBase;
        }
        //scores = []
        return GameFunctions.setUpScoreList(scores)
    }

    filterScoreTop = () =>{
        this.setState({
            topScores: true
        });
    }
    filterScoreRecent = ()=> {
        this.setState({
            topScores: false
        });
    }

    render() {

        let scoreEntries = null;
        //Check if scores are loaded
        if (this.state.scoreBase && this.state.recentScoreBase) {
            scoreEntries = this.renderScores();
            //console.log(scoreEntries);
        }
        let title = "Top";
        if (!this.state.topScores) {
            title = "Recent"
        }
        return (
            <>
                <header role="banner">
                    <h1>Hall of Fame</h1>
                </header>
                <section className="scoreSection">
                    <div className="scoreFilter">
                        <p onClick={this.filterScoreTop}>Top Scores</p>
                        <p onClick={this.filterScoreRecent}>Recent</p>
                    </div>
                    <h2 className="underline">{title} Scores:</h2>
                    <div className="scoreHeader">
                        <h2 className="underline">Initals</h2>
                        <h2 className="underline">Score</h2>
                    </div>
                    {scoreEntries}
                </section>
            </>
        )

    }
}