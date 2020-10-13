import React from 'react'
import ReactDOM from 'react-dom'
import GameMusic from './GameMusic'
import { BrowserRouter } from 'react-router-dom'


it('GameMusic Renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <GameMusic />
    </BrowserRouter>,
    div);
  ReactDOM.unmountComponentAtNode(div);
});