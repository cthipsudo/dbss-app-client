import React, { Component } from 'react';
import SpaceDisplay from '../SpaceDisplay/SpaceDisplay'
import QuestionDisplay from '../QuestionDisplay/QuestionDisplay'
import ResponseDisplay from '../ResponseDisplay/ResponseDisplay'
import GameSessionContext from '../../../contexts/GameSessionContext';
export default class DisplayAndQuestion extends Component {
    static contextType = GameSessionContext;

    checkForResponseOrQuestion = () => {
        //console.log(this.context.inResponseState);
        if(this.context.inResponseState){
            //console.log("were in response state");
            return <ResponseDisplay />
        } else {
            return <QuestionDisplay />
        }
    }

    render() {
        return (
            <div className="displayAndQuestionContainer">
                <SpaceDisplay />
                {this.checkForResponseOrQuestion()}
            </div>
        )
    }
}