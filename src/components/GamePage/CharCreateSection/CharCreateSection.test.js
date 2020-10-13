import React from 'react'
import ReactDOM from 'react-dom'
import CharCreateSection from './CharCreateSection'
import { BrowserRouter } from 'react-router-dom'
import GameContext from '../../../contexts/GameContext';

it('CharCreateSection Renders without crashing', () => {
    const div = document.createElement('div');
    const value = {
        characterOne: {},
        characterTwo: {},
        characterThree: {},
    }
    ReactDOM.render(
        <BrowserRouter>
            <GameContext.Provider value={value}>
                <CharCreateSection />
            </GameContext.Provider>
        </BrowserRouter>,
        div);
    ReactDOM.unmountComponentAtNode(div);
});