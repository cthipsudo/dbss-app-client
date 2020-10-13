import React from 'react'
import ReactDOM from 'react-dom'
import CharacterPicture from './CharacterPicture'
import { BrowserRouter } from 'react-router-dom'
import GameSessionContext from '../../../contexts/GameSessionContext';

it('CharacterPicture Renders without crashing', () => {
  const div = document.createElement('div');
  const value = {
    character: {
      name:"Test Joey"
    }
  }
  ReactDOM.render(
    <BrowserRouter>
      <GameSessionContext.Provider value={value}>
        <CharacterPicture />
      </GameSessionContext.Provider>
    </BrowserRouter>,
    div);
  ReactDOM.unmountComponentAtNode(div);
});