import React from 'react'
import ReactDOM from 'react-dom'
import ScoreBoard from './ScoreBoard'
import { BrowserRouter } from 'react-router-dom'

it('ScoreBoard Renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <ScoreBoard />
    </BrowserRouter>,
    div);
  ReactDOM.unmountComponentAtNode(div);
});