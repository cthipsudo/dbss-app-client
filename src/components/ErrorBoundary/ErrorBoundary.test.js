import React from 'react'
import ReactDOM from 'react-dom'
import ErrorBoundary from './ErrorBoundary'
import { BrowserRouter } from 'react-router-dom'

it('ErrorBoundary Renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <ErrorBoundary error={true}/>
    </BrowserRouter>,
    div);
  ReactDOM.unmountComponentAtNode(div);
});