import React from 'react'
import ReactDOM from 'react-dom'
import ResultSection from './ResultSection'
import { BrowserRouter } from 'react-router-dom'
import GameSessionContext from '../../../contexts/GameSessionContext';

it('ResultSection Renders without crashing', () => {
    const div = document.createElement('div');
    const value = {
        
    }
    ReactDOM.render(
        <BrowserRouter>
            <GameSessionContext.Provider value={value}>
                <ResultSection />
            </GameSessionContext.Provider>
        </BrowserRouter>,
        div);
    ReactDOM.unmountComponentAtNode(div);
});