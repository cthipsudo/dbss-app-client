import React from 'react'
import ReactDOM from 'react-dom'
import StartSection from './StartSection'
import { BrowserRouter } from 'react-router-dom'
import GameContext from '../../../contexts/GameContext';

it('StartSection Renders without crashing', () => {
    const div = document.createElement('div');
    const value = {
        
    }
    ReactDOM.render(
        <BrowserRouter>
            <GameContext.Provider value={value}>
                <StartSection />
            </GameContext.Provider>
        </BrowserRouter>,
        div);
    ReactDOM.unmountComponentAtNode(div);
});