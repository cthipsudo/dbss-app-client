import React from 'react'
import ReactDOM from 'react-dom'
import LoginForm from './LoginForm'
import { BrowserRouter } from 'react-router-dom'
import GameContext from '../../../contexts/GameContext';

it('LoginForm Renders without crashing', () => {
    const div = document.createElement('div');
    const value = {
        
    }
    ReactDOM.render(
        <BrowserRouter>
            <GameContext.Provider value={value}>
                <LoginForm />
            </GameContext.Provider>
        </BrowserRouter>,
        div);
    ReactDOM.unmountComponentAtNode(div);
});