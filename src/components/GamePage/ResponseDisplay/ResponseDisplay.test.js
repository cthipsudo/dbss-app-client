import React from 'react'
import ReactDOM from 'react-dom'
import ResponseDisplay from './ResponseDisplay'
import { BrowserRouter } from 'react-router-dom'
import GameSessionContext from '../../../contexts/GameSessionContext';

it('ResponseDisplay Renders without crashing', () => {
    const div = document.createElement('div');
    const value = {
        response: {
            response:"test response"
        }
    }
    ReactDOM.render(
        <BrowserRouter>
            <GameSessionContext.Provider value={value}>
                <ResponseDisplay />
            </GameSessionContext.Provider>
        </BrowserRouter>,
        div);
    ReactDOM.unmountComponentAtNode(div);
});