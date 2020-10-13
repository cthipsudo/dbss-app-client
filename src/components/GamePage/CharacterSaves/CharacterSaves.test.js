import React from 'react'
import ReactDOM from 'react-dom'
import CharacterSaves from './CharacterSaves'
import { BrowserRouter } from 'react-router-dom'
import GameContext from '../../../contexts/GameContext';

it('CharacterSaves Renders without crashing', () => {
    const div = document.createElement('div');
    const value = {
        characterOne : {},
        characterTwo : {},
        characterThree : {},
    }
    ReactDOM.render(
        <BrowserRouter>
            <GameContext.Provider value={value}>
                <CharacterSaves />
            </GameContext.Provider>
        </BrowserRouter>,
        div);
    ReactDOM.unmountComponentAtNode(div);
});