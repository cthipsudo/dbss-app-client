import React, { Component } from 'react';
import GameServerService from '../../services/game-server-service';
import GameFunctions from '../../services/GameFunctions';
import './Scoreboard.css';

export default class ScoreBoard extends Component {
    state = {
        scoreBase: null,
        recentScoreBase: null,
        topScores: false,
        classNameRecent: "",
        classNameTop: "inactive",
    }
    componentDidMount() {
        //grab the scores
        GameServerService.getGameScores()
            .then(res => {
                this.setState({
                    scoreBase: res
                })
            })
        GameServerService.getRecentGameScores()
            .then(res => {
                this.setState({
                    recentScoreBase: res
                })
            })
    }

    renderScores = () => {
        let scores = [];
        if (this.state.topScores) {
            scores = this.state.scoreBase;
        } else {
            scores = this.state.recentScoreBase;
        }
        //scores = []
        return GameFunctions.setUpScoreList(scores)
    }

    filterScoreTop = () =>{
        this.setState({
            topScores: true,
            classNameRecent: "inactive",
            classNameTop: "",
        });
    }
    filterScoreRecent = ()=> {
        this.setState({
            topScores: false,
            classNameRecent: "",
            classNameTop: "inactive",
        });
    }

    render() {

        let scoreEntries = null;
        //Check if scores are loaded
        if (this.state.scoreBase && this.state.recentScoreBase) {
            scoreEntries = this.renderScores();
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
                        <p onClick={this.filterScoreTop} className={this.state.classNameTop}>Top Scores</p>
                        <p onClick={this.filterScoreRecent} className={this.state.classNameRecent}>Recent</p>
                    </div>
                    <h2>{title} Scores</h2>
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