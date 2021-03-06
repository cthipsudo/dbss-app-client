import React from 'react'

export default React.createContext({
    question: {},
    questions: [],
    choices: [],
    response: {},
    character: {},
    progess: 0,
    inResponseState: false,
    lastQuestion: false,
    gameLost: false,
    score: 0,
    health: 100,
    song: "",
    progressGame: () => { },
    setResponse: () => { },
    setResponseStateTrue: () => { },
    setResponseStateFalse: () => { },
    grabNewData: () => { },
    setLastQuestionTrue: () => { },
    setGameComplete: () => { },
    setGameLost: () => { },
    updateScore: () => { },
})
