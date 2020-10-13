import React from 'react'
import ReactDOM from 'react-dom'
import NoGameSession from './NoGameSession'
import { BrowserRouter } from 'react-router-dom'

it('NoGameSession Renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <NoGameSession />
    </BrowserRouter>,
    div);
  ReactDOM.unmountComponentAtNode(div);
});