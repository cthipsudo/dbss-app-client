import React from 'react'
import ReactDOM from 'react-dom'
import CharacterName from './CharacterName'
import { BrowserRouter } from 'react-router-dom'
import GameSessionContext from '../../../contexts/GameSessionContext';


it('Character Renders without crashing', () => {
  const div = document.createElement('div');
  const value = {
    character: {
      name: "test Joey"
    }
  }
  ReactDOM.render(
    <BrowserRouter>
      <GameSessionContext.Provider value={value}>
        <CharacterName />
      </GameSessionContext.Provider>
    </BrowserRouter>,
    div);
  ReactDOM.unmountComponentAtNode(div);
});