import React from 'react'
import ReactDOM from 'react-dom'
import DisplayAndQuestion from './DisplayAndQuestion'
import { BrowserRouter } from 'react-router-dom'
import GameSessionContext from '../../../contexts/GameSessionContext';

it('DisplayAndQuestion Renders without crashing', () => {
  const div = document.createElement('div');

  const value = {
    character: {
      name:"Test Joey"
    },
    questions: [{id: "t1", linkedTo:"t", question:"This is test question",}],
    question: {
        id: "t1",
        linkedTo:"t",
        question:"This is test question",
    },
    setLastQuestionTrue: () => {},
  }
  
  ReactDOM.render(
    <BrowserRouter>
      <GameSessionContext.Provider value={value}>
        <DisplayAndQuestion />
      </GameSessionContext.Provider>
    </BrowserRouter>,
    div);
  ReactDOM.unmountComponentAtNode(div);
});