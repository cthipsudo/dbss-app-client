import React, { Component } from 'react';
import PlayerProgression from '../PlayerProgress/PlayerProgress'

import GameContext from '../../../contexts/GameContext';
import STORE from '../../../STORE';
import GameFunctions from '../../../services/GameFunctions';

import './PlayScreenMain.css'

export default class PlayScreenMain extends Component {
    static contextType = GameContext;

    state = {
        questions: [],
        character: this.context.characterSelected,
        question: {},
        choices: [],
        progess: 0,
    }
    

    componentDidMount() {
        const initalQuestions = GameFunctions.makeShuffledQuestions(STORE.QUESTIONS);
        const firstQuestion = initalQuestions[this.state.progess];
        const charRace = this.context.characterSelected.race;
        const charClass = this.context.characterSelected.class;
        const initialChoices = GameFunctions.grabChoices(STORE.CHOICES, charRace, charClass, firstQuestion);
        //console.log("This is the question base", initalQuestions);
        //console.log("Game loading starting with first question", firstQuestion);
        this.setState({
            questions: initalQuestions,
            question: firstQuestion,
            choices: initialChoices,
        });
    }

    setinitialChoices = (question, char) => {
        return GameFunctions.grabChoices(question.choices, char.race, char.class).map((choice, index) => {
            return (<button key={index + choice}> {choice} </button>)
        })
    }
    grabNewQuestion = () => {
        const newQuestion = this.state.questions[this.state.progess];
        console.log();
        this.setState({
            question: newQuestion
        })
    }

    grabNewChoices = () => {
        console.log("grabbing choices");
        let currentChoices = this.state.question.choices;
        const charRace = this.state.character.race;
        const charClass = this.state.character.class;

        const newChoices = GameFunctions.grabChoices(currentChoices, charRace, charClass).map((choice, index) => {
            return (<button key={index + choice}> {choice} </button>)
        })
        // console.log(newChoices);
        this.setState({
            choices: newChoices,
        })

    }

    render() {
        console.log("Questions", this.state.questions);
        console.log("Starting with question", this.state.question);
        console.log("With choices", this.state.choices);

        if(!this.state.question.length){
             //loading component here
        }
        //const buttons = this.state.choices;
        return (
            <section className="gameSpace">
                <PlayerProgression />
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
                            <button>Choice 1</button>
                            <button>Choice 2</button>
                            <button>Choice 3</button>
                            <button>Choice 4</button>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

