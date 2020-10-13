import React from 'react'
import ReactDOM from 'react-dom'
import LoadingSpinner from './LoadingSpinner'
import { BrowserRouter } from 'react-router-dom'

it('LoadingSpinner Renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <LoadingSpinner />
    </BrowserRouter>,
    div);
  ReactDOM.unmountComponentAtNode(div);
});