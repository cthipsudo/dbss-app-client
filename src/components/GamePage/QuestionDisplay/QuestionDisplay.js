
import React, { Component } from 'react';
import GameSessionContext from '../../../contexts/GameSessionContext';

export default class QuestionDisplay extends Component {
    constructor() {
        super();
        this.intervalQuestion = null
    }

    static contextType = GameSessionContext;

    state = {
        questionText: "",
        questionLength: 1,
        counter: 0,
        loading: false,
    }

    progressToResponse = (choiceAlignment) => {
        this.context.setResponse(choiceAlignment);
        this.context.progressGame();
        this.context.setResponseStateTrue();
    }

    updateState = (renderText, textArr) => {
        this.setState({
            loading: true,
            questionText: renderText,
            counter: this.state.counter + 1,
            questionLength: textArr.length
        })
    }

    renderQuestion = (questionText) => {
        const textArr = questionText.split('');
        let renderText = "";
        this.intervalQuestion = setInterval( () => {
            if (this.state.counter < textArr.length) {
                renderText = this.state.questionText + textArr[this.state.counter];
                this.updateState(renderText, textArr)
            }
        }, 600);
    }
    grabQuestion = () => {
        let questionText = "";
        //Let question load in
        if (this.context.question.question) {
            questionText = this.context.question.question
            //Sets the newlines
            questionText = questionText.replace(/\\n/g, '\n')
            this.renderQuestion(questionText)

        }
    };

    checkQuestionDoneLoading() {
        if (this.state.counter === this.state.questionLength) {
            return false;
        }
        return true;
    };
    componentDidMount() {
        console.log('current question',this.context.question); 
        this.grabQuestion();
    }

    componentWillUnmount() {
        clearInterval(this.intervalQuestion);
        //If it leaves, check if we're at the alst question
        if (this.context.question.id === this.context.questions[this.context.questions.length - 1].id && this.context.lastQuestion !== true) {
            this.context.setLastQuestionTrue();
        }
    }


    render() {
        let buttons = [];
        //Choices load in
        if (this.context.choices[0]) {
            buttons = this.context.choices.map((choice, index) => {
                return (<button key={index + choice.choice} onClick={() => this.progressToResponse(choice.alignment)} disabled={this.checkQuestionDoneLoading()} >{choice.choice}</button>)
            })
        }

        return (
            <div className="questionDisplay">
                <div className="questionContainer">
                    <p className="narrator">B.O.B.B.Y.</p>
                    <p className="noFormat">{this.state.questionText}</p>
                </div>
                <div className="choiceContainer">
                    {buttons}
                </div>
            </div>
        )
    }
}