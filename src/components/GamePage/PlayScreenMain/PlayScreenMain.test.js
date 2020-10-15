import React from 'react'
import ReactDOM from 'react-dom'
import PlayScreenMain from './PlayScreenMain'
import { BrowserRouter } from 'react-router-dom'
import GameContext from '../../../contexts/GameContext';

it('PlayScreenMain Renders without crashing', () => {
    const div = document.createElement('div');
    const value = {
        unselectCharacter: () => {},
    }
    ReactDOM.render(
        <BrowserRouter>
            <GameContext.Provider value={value}>
                <PlayScreenMain />
            </GameContext.Provider>
        </BrowserRouter>,
        div);
    ReactDOM.unmountComponentAtNode(div);
});