import React, { Component } from 'react';
import GameSessionContext from '../../../contexts/GameSessionContext';

export default class ResponseDisplay extends Component {
    static contextType = GameSessionContext;
    state = {
        responseText: "",
        counter: 0,
    }
    progressToQuestion = () => {
        //console.log(this.context.response)
        if(this.context.response.game_ending){
            console.log('Set the game to lose')
            this.context.setGameLost();
        }else if (this.context.lastQuestion) {
            console.log('Set the game to complete');
            this.context.setGameComplete();
        } else {
            this.context.grabNewData();
            this.context.setResponseStateFalse();
        }
    }

    renderResponse = (responseText) => {
        //console.log(responseText);
        const textArr = responseText.split('');
        let renderText = "";

        this.renderInterval = setInterval(() => {
            if (this.state.counter < textArr.length) {
                renderText = this.state.responseText + textArr[this.state.counter];
                //console.log(this.state.counter);
                this.setState({
                    responseText: renderText,
                    counter: this.state.counter + 1,
                })
            }
        }, 400);
    }

    componentWillUnmount() {
        clearInterval(this.renderInterval);
    }

    render() {
        let responseText = "";
        //Let response load in
        if (this.context.response.response) {
            //console.log(this.context.response);
            responseText = this.context.response.response
            //Sets the newlines
            responseText = responseText.replace(/\\n/g, '\n');
            this.renderResponse(responseText);
        }
        return (
            <div className="responseDisplay">
                <div className="responseContainer">
                    <p className="narrator">B.O.B.B.Y:</p>
                    <p className="noFormat">{this.state.responseText}</p>
                    <button onClick={this.progressToQuestion}>Continue</button>
                </div>
            </div>
        )
    }
}