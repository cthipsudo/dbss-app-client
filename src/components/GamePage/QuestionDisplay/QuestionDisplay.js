import React, { Component } from 'react';
import GameSessionContext from '../../../contexts/GameSessionContext';

export default class QuestionDisplay extends Component {
    static contextType = GameSessionContext;

    progressToResponse = (choiceAlignment) => {
        this.context.setResponse(choiceAlignment);
        this.context.progressGame();
        this.context.setResponseStateTrue();
    }

    render() {
        let questionText = "";
        let buttons = [];
        //Let question load in
        if (this.context.question.question) {
            //console.log('loading a new question',this.context.question);
            questionText = this.context.question.question
            //Sets the newlines
            questionText = questionText.replace(/\\n/g, '\n')
        }
        //Choices load in
        if (this.context.choices[0]) {
           // console.log(this.context.choices)
            buttons = this.context.choices.map((choice, index) => {
                return (<button key={index + choice.choice} onClick={() => this.progressToResponse(choice.alignment)}>{choice.choice}</button>)
            })
        }
        return (
            <div className="questionDisplay">
                <div className="questionContainer">
                    <p className="noFormat">{questionText}</p>
                </div>
                <div className="choiceContainer">
                    {buttons}
                </div>
            </div>
        )
    }
}