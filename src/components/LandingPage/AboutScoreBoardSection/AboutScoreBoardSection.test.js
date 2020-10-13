import React from 'react'
import ReactDOM from 'react-dom'
import AboutScoreBoardSection from './AboutScoreBoardSection'
import { BrowserRouter } from 'react-router-dom'

it('AboutScoreBoardSection Renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <AboutScoreBoardSection />
    </BrowserRouter>,
    div);
  ReactDOM.unmountComponentAtNode(div);
});