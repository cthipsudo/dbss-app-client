import { set } from 'date-fns';
import React, { Component } from 'react';
import GameSessionContext from '../../../contexts/GameSessionContext';

export default class QuestionDisplay extends Component {
    static contextType = GameSessionContext;

    state = {
        questionText: "",
        questionLength: 0,
        counter: 0,
        loading: false,
    }

    progressToResponse = (choiceAlignment) => {
        this.context.setResponse(choiceAlignment);
        this.context.progressGame();
        this.context.setResponseStateTrue();
    }

    renderQuestion = (questionText) => {
        const textArr = questionText.split('');
        let renderText = "";

        this.renderInterval = setInterval(() => {
            if(this.state.counter < textArr.length){
                renderText= this.state.questionText + textArr[this.state.counter];
                //console.log(this.state.counter);
                this.setState({
                    loading: true,
                    questionText: renderText,
                    counter: this.state.counter + 1,
                })
            } else{
                //Done loading
                this.setState({
                    loading: false,
                })
            }
        }, 500);
    }

    grabQuestion = () => {
        let questionText = "";
        //Let question load in
        if (this.context.question.question) {
            //console.log('loading a new question',this.context.question);
            questionText = this.context.question.question
            //Sets the newlines
            questionText = questionText.replace(/\\n/g, '\n')
            this.renderQuestion(questionText)
            if(this.state.questionLength === 0){
                this.setState({
                    questionLength: this.context.question.question.length,
                }) 
            }
            //console.log(this.state.questionLength);
        }
        clearInterval(this.renderInterval)
        return this.state.questionText
    };

    componentDidMount(){
        
    }

    componentWillUnmount(){
        clearInterval(this.renderInterval);
    }

    checkQuestionDoneLoading(){
        console.log(this.state.loading);
        if(this.state.loading){
            return true;
        }
        return false;
    }

    render() {
        let buttons = [];
        //Choices load in
        if (this.context.choices[0]) {
            // console.log(this.context.choices)
            buttons = this.context.choices.map((choice, index) => {
                return (<button key={index + choice.choice} onClick={() => this.progressToResponse(choice.alignment)} disabled={this.checkQuestionDoneLoading()} >{choice.choice}</button>)
            })
        }

        return (
            <div className="questionDisplay">
                <div className="questionContainer">
                    <p className="narrator">B.O.B.B.Y:</p>
                    <p className="noFormat">{this.grabQuestion()}</p>
                </div>
                <div className="choiceContainer">
                    {buttons}
                </div>
            </div>
        )
    }
}