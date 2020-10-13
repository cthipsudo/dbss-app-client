import React from 'react'
import ReactDOM from 'react-dom'
import PlayerProgress from './PlayerProgress'
import { BrowserRouter } from 'react-router-dom'
import GameContext from '../../../contexts/GameContext';

it('PlayerProgress Renders without crashing', () => {
    const div = document.createElement('div');
    const value = {
        progress: 0
    }
    ReactDOM.render(
        <BrowserRouter>
            <GameContext.Provider value={value}>
                <PlayerProgress />
            </GameContext.Provider>
        </BrowserRouter>,
        div);
    ReactDOM.unmountComponentAtNode(div);
});