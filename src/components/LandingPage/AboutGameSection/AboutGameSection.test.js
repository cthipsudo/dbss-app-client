import React from 'react'
import ReactDOM from 'react-dom'
import AboutGameSection from './AboutGameSection'
import { BrowserRouter } from 'react-router-dom'

it('AboutGameSection Renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <AboutGameSection />
    </BrowserRouter>,
    div);
  ReactDOM.unmountComponentAtNode(div);
});