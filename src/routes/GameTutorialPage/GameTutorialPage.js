import React, { Component } from 'react';

export default class GameTutorialPage extends Component {
    constructor(props) {
        super(props)
        this.myRef = React.createRef()  
    }

    componentDidMount(){
        this.scrollToMyRef();
    }

    scrollToMyRef = () => window.scrollTo(0, this.myRef.current.offsetTop) 

    render() {
        return (
            <>
                <header ref={this.myRef}>
                    <h1>DBSS Onboading</h1>
                </header>
                <section className="lpSection">
                    <h3>Start Game</h3>
                    <p>At the start screen you can login or play as a guest</p>
                    <p>[gif here]</p>
                </section>
                <section className="lpSection">
                    <h3>Character Select</h3>
                    <p>In Character select you can select or make a character</p>
                    <p>Once you have made a character, you can select one to start the game</p>
                    <p>[gif here]</p>
                </section>
                <section className="lpSection">
                    <h3>Character Create</h3>
                    <p>From here you can create a character using the character form</p>
                    <p>[gif here]</p>
                </section>
                <section className="lpSection">
                    <h3>Playscreen</h3>
                    <p>Once you have started the game. Your in-game AI will start debriefing you with a starter question.
                        <br/>
                        You can choose various choices that are catered to your character according to the current question.
                        <br />
                        You can also force the question to fully render by clicking on it.
                    </p>
                    <p>[gif here]</p>
                </section>
                <section className="lpSection">
                    <h3>Scoreboard</h3>
                    <p>At the Scoreboard you can filter the scoreboard by Top or Recent Scores.</p>
                    <p>[gif here]</p>
                </section>
            </>
        )
    }
}
