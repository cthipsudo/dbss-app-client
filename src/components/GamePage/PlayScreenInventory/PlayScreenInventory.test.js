import React from 'react'
import ReactDOM from 'react-dom'
import PlayScreenInventory from './PlayScreenInventory'
import { BrowserRouter } from 'react-router-dom'
import GameSessionContext from '../../../contexts/GameSessionContext';

it('PlayScreenInventory Renders without crashing', () => {
  const div = document.createElement('div');
  const value = {
    
  }
  ReactDOM.render(
    <BrowserRouter>
      <GameSessionContext.Provider value={value}>
        <PlayScreenInventory />
      </GameSessionContext.Provider>
    </BrowserRouter>,
    div);
  ReactDOM.unmountComponentAtNode(div);
});