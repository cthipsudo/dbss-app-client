import React from 'react'
import ReactDOM from 'react-dom'
import Character from './Character'
import { BrowserRouter } from 'react-router-dom'
import GameContext from '../../../contexts/GameContext';


it('Character Renders without crashing', () => {
  const div = document.createElement('div');
  const value = {
    character: {
      name: 'test joey'
    }
  }
  ReactDOM.render(
    <BrowserRouter>
            <GameContext.Provider value={value}>
                <Character />
            </GameContext.Provider>
        </BrowserRouter>,
    div);
  ReactDOM.unmountComponentAtNode(div);
});