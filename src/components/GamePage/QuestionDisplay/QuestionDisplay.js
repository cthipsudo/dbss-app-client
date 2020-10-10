
import React, { Component } from 'react';
import GameSessionContext from '../../../contexts/GameSessionContext';

export default class QuestionDisplay extends Component {
    
    static contextType = GameSessionContext;

    state = {
        questionText: "",
        questionLength: 1,
        loading: false,
        counter: 0,
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
            questionLength: textArr.length,
            counter: this.state.counter + 1,
        })
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
        return <p className="noFormat">{this.state.questionText}</p>
    };

    renderQuestion = (questionText) => {
        const textArr = questionText.split('');
        let renderText = "";
        let counter = 0;
        //GOES HERE
        this.renderInterval = setInterval( () => {
            if (counter < textArr.length && counter === this.state.counter) {
                counter++;
                renderText = this.state.questionText + textArr[this.state.counter];
                this.updateState(renderText, textArr);
            }
        }, 60);
    }

    checkQuestionDoneLoading() {
        if (this.state.counter === this.state.questionLength) {
            return false;
        }
        return true;
    };

    componentDidMount() {

    }

    componentWillUnmount() {
        //console.log(this.renderInterval);
        clearInterval(this.renderInterval);
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
                    {this.grabQuestion()}
                </div>
                <div className="choiceContainer">
                    {buttons}
                </div>
            </div>
        )
    }
}