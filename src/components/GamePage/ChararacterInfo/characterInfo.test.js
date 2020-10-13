import React from 'react'
import ReactDOM from 'react-dom'
import CharacterInfo from './CharacterInfo'
import { BrowserRouter } from 'react-router-dom'
import GameSessionContext from '../../../contexts/GameSessionContext';
import Character from '../Character/Character';

it('CharacterInfo Renders without crashing', () => {
    const div = document.createElement('div');
    const value = {
        health: 100,
        character: {
            name: "Joey"
        }
    }
    ReactDOM.render(
        <BrowserRouter>
            <GameSessionContext.Provider value={value}>
                <CharacterInfo />
            </GameSessionContext.Provider>
        </BrowserRouter>,
        div);
    ReactDOM.unmountComponentAtNode(div);
});