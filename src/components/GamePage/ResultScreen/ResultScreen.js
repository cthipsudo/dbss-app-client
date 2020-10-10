import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import GameSessionContext from '../../../contexts/GameSessionContext';
import GameServerService from '../../../services/game-server-service';

export default class ResultScreen extends Component {
    static contextType = GameSessionContext;
    state = {
        playAgain: false
    }
    renderResult = () => {
        if (this.context.gameLost) {
            return (
                <section className="winScreen">
                    <h1>You lost!</h1>
                    <Link to="/game/select-char">Play again?</Link>
                </section>
            )
        } else if(this.state.playAgain){
            return (
                <section className="winScreen">
                    <h1>Thank you playing!</h1>
                    <Link to = "/scoreboard">Go to Scoreboard</Link>
                    <Link to ="/game/select-char">Play again?</Link>
                </section>
            )
        } else {
            return (
                <section className="winScreen">
                    <h1>You won!</h1>
                    <form className="submitInitials" onSubmit={(event) => { this.submitInitals(event) }}>
                        <div className="initalsField">
                            <label htmlFor="initials">Enter your Initals:</label>
                            <input type="text" name="initials" id="formInitials" maxLength="3" required />
                        </div>
                    </form>
                </section>
            )
        }
    }

    submitInitals = (ev) => {
        ev.preventDefault()
        const score = {
            nick_name: ev.target.initials.value,
            score: this.context.score
        }
        GameServerService.makeNewScore(score)
            .then(
                this.setState({
                    playAgain: true
                })
            )
        //console.log(score);
    }

    render() {
        return (
            <>
                {this.renderResult()}
            </>
        )
    }
}