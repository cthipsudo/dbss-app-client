import React, { Component } from 'react';
import GameSessionContext from '../../../contexts/GameSessionContext';

export default class ResponseDisplay extends Component {
    static contextType = GameSessionContext;
    progressToQuestion = () =>{
        Promise.all([this.context.grabNewQuestion(), this.context.grabNewChoices()])
        this.context.setResponseStateFalse();
    }
    render() {
        let responseText = "";
        //Let response load in
        if (this.context.response.response) {
            //console.log(this.context.response);
            responseText = this.context.response.response
            //Sets the newlines
            responseText = responseText.replace(/\\n/g, '\n')
        }
        return (
            <div className="responseDisplay">
                <div className="responseContainer">
                    <p className="noFormat">{responseText}</p>
                    <button onClick={this.progressToQuestion}>Continue</button>
                </div>
            </div>
        )
    }
}