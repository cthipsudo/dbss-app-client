import React, { Component } from 'react';
import GameSessionContext from '../../../contexts/GameSessionContext';

export default class ResponseDisplay extends Component {
    static contextType = GameSessionContext;
    state = {
        fullResponse: "",
        responseText: "",
        counter: 0,
        questionLength: 1,
        rendering: true,
        responseClass: "noFormat"
    }
    progressToQuestion = () => {
        if(this.context.response.game_ending){
            this.context.setGameLost();
        }else if (this.context.lastQuestion) {
            this.context.setGameComplete();
        } else {
            this.context.grabNewData();
            this.context.setResponseStateFalse();
        }
    }

    renderResponse = (responseText) => {
        const textArr = responseText.split('');
        let renderText = "";
        let counter = 0;
        this.renderInterval = setInterval(() => {
            if (counter < textArr.length && counter === this.state.counter) {
                counter++;
                renderText = this.state.responseText + textArr[this.state.counter];
                this.setState({
                    responseText: renderText,
                    counter: this.state.counter + 1,
                    questionLength: textArr.length,
                    fullResponse: responseText,
                    responseClass: "noFormat loading",
                })
            }
        }, 70);
    }

    componentWillUnmount() {
        clearInterval(this.renderInterval);
    }

    checkResponseDoneLoading(){
        if(this.state.counter === this.state.questionLength){
            return false;
        }
        return true;
    };

    fullyRenderResponse = () => {
        //prevent constant rendering on click
        if(this.state.counter !== this.state.questionLength){
            console.log('render full! response');
            console.log();
            this.setState({
                rendering: false,
                responseText: this.state.fullResponse,
                counter: this.state.questionLength,
                responseClass: "noFormat"
            })
        }
    }

    render() {
        let responseText = "";
        //Let response load in
        if (this.context.response.response) {
            responseText = this.context.response.response
            //Sets the newlines
            responseText = responseText.replace(/\\n/g, '\n');
            this.renderResponse(responseText);
        }

        let responseClass = this.state.responseClass;
        if(this.state.counter === this.state.questionLength){
            responseClass = "noFormat"
        }
        return (
            <div className="responseDisplay">
                <div className="responseContainer">
                    <p className="narrator">B.O.B.B.Y.</p>
                    <p className={responseClass} onClick={this.fullyRenderResponse}>{this.state.responseText}</p>
                    { this.state.counter === this.state.questionLength && <p className="continue" onClick={this.progressToQuestion} disabled={this.checkResponseDoneLoading()}>Continue</p>}
                </div>
            </div>
        )
    }
}