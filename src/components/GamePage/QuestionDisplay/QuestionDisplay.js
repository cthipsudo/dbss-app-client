
import React, { Component } from 'react';
import GameSessionContext from '../../../contexts/GameSessionContext';
import GameFunctions from '../../../services/GameFunctions';
import LoadingEllipsis from '../../LoadingEllipsis/LoadingEllipsis';
import CharacterInfo from '../ChararacterInfo/CharacterInfo';
export default class QuestionDisplay extends Component {

    static contextType = GameSessionContext;

    state = {
        questionText: "",
        questionLength: 1,
        loading: false,
        counter: 0,
    }

    progressToResponse = (choiceAlignment, score) => {
        this.context.setResponse(choiceAlignment);
        this.context.updateScore(score);
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

    grabChoices = () => {
        let buttons = []
        if (this.context.choices[0]) {
            buttons = this.context.choices.map((choice, index) => {
                return (<button
                    key={index + choice.choice}
                    onClick={() => this.progressToResponse(choice.alignment, choice.score)}
                    className="choices"
                    disabled={this.checkQuestionDoneLoading()}>
                    {choice.choice}
                </button>)
            })
        }
        buttons = GameFunctions.shuffle(buttons)
        return buttons
    }

    grabLoaders = () => {
        return (
            <>
                <div className="loader">
                    <LoadingEllipsis />
                </div>
                <div className="loader">
                    <LoadingEllipsis />
                </div>
                <div className="loader">
                    <LoadingEllipsis />
                </div>
                <div className="loader">
                    <LoadingEllipsis />
                </div>
            </>
        )
    }

    renderQuestion = (questionText) => {
        const textArr = questionText.split('');
        let renderText = "";
        let counter = 0;
        //GOES HERE
        this.renderInterval = setInterval(() => {
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
        clearInterval(this.renderInterval);
        //If it leaves, check if we're at the alst question
        if (this.context.question.id === this.context.questions[this.context.questions.length - 1].id && this.context.lastQuestion !== true) {
            this.context.setLastQuestionTrue();
        }
    }


    render() {
        return (
            <div className="questionDisplay">
                <div className="questionContainer">
                    <h1 className="narrator">B.O.B.B.Y.</h1>
                    <CharacterInfo />
                    {this.grabQuestion()}
                </div>
                <div className="choiceContainer">
                    {this.state.counter === this.state.questionLength && this.grabChoices()}
                    {this.state.counter !== this.state.questionLength && this.grabLoaders()}
                </div>
            </div>
        )
    }
}