import React from 'react'
import ReactDOM from 'react-dom'
import QuestionDisplay from './QuestionDisplay'
import { BrowserRouter } from 'react-router-dom'
import GameSessionContext from '../../../contexts/GameSessionContext';

it('QuestionDisplay Renders without crashing', () => {
    const div = document.createElement('div');
    const value = {
        question: {
            question: "test question"
        },
        questions: [{},{}],
        character: {
            name: "Test Joey"
        },
        setLastQuestionTrue: () => {},
    }
    ReactDOM.render(
        <BrowserRouter>
            <GameSessionContext.Provider value={value}>
                <QuestionDisplay />
            </GameSessionContext.Provider>
        </BrowserRouter>,
        div);
    ReactDOM.unmountComponentAtNode(div);
});