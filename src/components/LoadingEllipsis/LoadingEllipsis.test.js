import React from 'react'
import ReactDOM from 'react-dom'
import LoadingEllipsis from './LoadingEllipsis'
import { BrowserRouter } from 'react-router-dom'

it('LoadingEllipsis Renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <LoadingEllipsis />
    </BrowserRouter>,
    div);
  ReactDOM.unmountComponentAtNode(div);
});