import React from 'react'
import ReactDOM from 'react-dom'
import CharSelect from './CharSelectSection'
import { BrowserRouter } from 'react-router-dom'
import GameContext from '../../../contexts/GameContext';

it('CharSelect Renders without crashing', () => {
    const div = document.createElement('div');
    const value = {
        characterSelected: {},
        unselectCharacter: ()=>{},
    }
    ReactDOM.render(
        <BrowserRouter>
            <GameContext.Provider value={value}>
                <CharSelect />
            </GameContext.Provider>
        </BrowserRouter>,
        div);
    ReactDOM.unmountComponentAtNode(div);
});