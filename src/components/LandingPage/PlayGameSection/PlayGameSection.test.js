import React from 'react'
import ReactDOM from 'react-dom'
import PlayGameSection from './PlayGameSection'
import { BrowserRouter } from 'react-router-dom'

it('PlayGameSection Renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <PlayGameSection />
    </BrowserRouter>,
    div);
  ReactDOM.unmountComponentAtNode(div);
});