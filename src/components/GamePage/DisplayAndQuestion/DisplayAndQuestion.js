import React, { Component } from 'react';
import QuestionDisplay from '../QuestionDisplay/QuestionDisplay'
import ResponseDisplay from '../ResponseDisplay/ResponseDisplay'
import GameSessionContext from '../../../contexts/GameSessionContext';
import GameMusic from '../../GameMusic/GameMusic'
export default class DisplayAndQuestion extends Component {
    static contextType = GameSessionContext;

    checkForResponseOrQuestion = () => {
        if(this.context.inResponseState){
            return <ResponseDisplay />
        } else {
            return <QuestionDisplay />
        }
    }

    render() {
        return (
            <div className="displayAndQuestionContainer">
                <GameMusic />
                {this.checkForResponseOrQuestion()}
            </div>
        )
    }
}