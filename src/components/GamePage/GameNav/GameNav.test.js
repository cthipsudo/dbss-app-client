import React from 'react'
import ReactDOM from 'react-dom'
import GameNav from './GameNav'
import { BrowserRouter } from 'react-router-dom'
import GameContext from '../../../contexts/GameContext';

it('GameNav Renders without crashing', () => {
    const div = document.createElement('div');
    const value = {
        progress: 0
    }
    ReactDOM.render(
        <BrowserRouter>
            <GameContext.Provider value={value}>
                <GameNav />
            </GameContext.Provider>
        </BrowserRouter>,
        div);
    ReactDOM.unmountComponentAtNode(div);
});