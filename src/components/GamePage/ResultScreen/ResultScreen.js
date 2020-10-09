import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import GameSessionContext from '../../../contexts/GameSessionContext';

export default class ResultScreen extends Component {
    static contextType = GameSessionContext;
    renderResult = () => {
        if (this.context.gameLost) {
            return (
                <section className="winScreen">
                    <h1>You lost!</h1>
                    <Link to="/game/select-char">Play again?</Link>
                </section>
            )
        } else {
            return (
                <section className="winScreen">
                    <h1>You won!</h1>
                </section>
            )
        }
    }
    render() {
        return (
            <>
                {this.renderResult()}
            </>
        )
    }
}