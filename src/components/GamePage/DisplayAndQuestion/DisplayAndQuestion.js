import React, { Component } from 'react';
import SpaceDisplay from '../SpaceDisplay/SpaceDisplay'
import QuestionDisplay from '../QuestionDisplay/QuestionDisplay'
export default class DisplayAndQuestion extends Component {
    render() {
        return (
            <div className="displayAndQuestionContainer">
                <SpaceDisplay />
                <QuestionDisplay />
            </div>
        )
    }
}