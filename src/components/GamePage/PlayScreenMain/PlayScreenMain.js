import React, { Component } from 'react';
import './PlayScreenMain.css'
export default class PlayScreenMain extends Component {
    render() {
        return (
            <section className="gameSpace">
                <div className="playerProgress">Star Map/Player Progression</div>
                <div className="displayAndQuestionContainer">
                    <div className="spaceDisplay">
                        <div className="characterInfo">
                            <div>Character <br /> Picture</div>
                            <div>Character Name</div>
                        </div>
                        <button>Show Inventory</button>
                        <p>[background Rocket in space]</p>
                    </div>
                    <div className="questionDisplay">
                        <div className="questionContainer">
                            <p>Question here/Question Response:</p>
                        </div>
                        <div className="choiceContainer">
                            <button className="choice">Choice 1</button>
                            <button className="choice">Choice 2</button>
                            <button className="choice">Choice 3</button>
                            <button className="choice">Choice 4</button>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

