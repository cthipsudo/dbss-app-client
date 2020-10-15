import React from 'react'
import ReactDOM from 'react-dom'
import GameTutorialSection from './GameTutorialSection'
import { BrowserRouter } from 'react-router-dom'

it('GameTutorialSection Renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <GameTutorialSection />
    </BrowserRouter>,
    div);
  ReactDOM.unmountComponentAtNode(div);
});