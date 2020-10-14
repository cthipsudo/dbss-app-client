import React, { Component } from 'react';
import GameNav from '../GameNav/GameNav'
import DisplayAndQuestion from '../DisplayAndQuestion/DisplayAndQuestion'
import GameContext from '../../../contexts/GameContext';
import GameSessionContext from '../../../contexts/GameSessionContext';
import GameServerService from '../../../services/game-server-service';
import GameFunctions from '../../../services/GameFunctions';
import FareWellPrincess from '../../../music/farewell-princess.mp3'
import VideoGameLand from '../../../music/video-game-land.mp3';
import ResultScreen from '../ResultSection/ResultSection';

import './PlayScreenMain.css'

export default class PlayScreenMain extends Component {
    constructor(props) {
        super(props)
        this.myRef = React.createRef()  
    }

    static contextType = GameContext;

    state = {
        error: null,
        questions: [],
        character: null,
        question: {},
        choiceBase: [],
        choices: [],
        responseBase: [],
        response: {},
        progess: 0,
        score: 0,
        health: 100,
        inResponseState: false,
        lastQuestion: false,
        gameComplete: false,
        gameLost: false,
        song: FareWellPrincess,
    }

    componentDidMount() {
        //Grab the questions
        //console.log();
        this.scrollToMyRef();
        this.setState({
            character: this.context.characterSelected
        })
        const p1 = GameServerService.getGameQuestions();
        const p2 = GameServerService.getGameChoices();
        const p3 = GameServerService.getGameResponses();
        Promise.all([p1, p2, p3])
            .then(data => {
                this.setState({
                    questions: data[0],
                    choiceBase: data[1],
                    responseBase: data[2],
                    error: null,
                })

                const initalQuestions = GameFunctions.makeShuffledQuestions(this.state.questions);
                const firstQuestion = initalQuestions[this.state.progess];
                const charRace = this.context.characterSelected.race;
                const charClass = this.context.characterSelected.class;
                const initialChoices = GameFunctions.grabChoices(this.state.choiceBase, charRace, charClass, firstQuestion);
                this.setState({
                    questions: initalQuestions,
                    question: firstQuestion,
                    choices: initialChoices,
                });
            })
            .catch(res => {
                this.setState({
                    error: res.error,
                })
            })
    }

    grabNewData = () => {
        const newQuestion = this.state.questions[this.state.progess];
        let currentChoices = this.state.choiceBase;
        const charRace = this.state.character.race;
        const charClass = this.state.character.class;
        const newChoices = GameFunctions.grabChoices(currentChoices, charRace, charClass, newQuestion)
        this.setState({
            question: Object.assign(newQuestion),
            choices: newChoices,
        })

    }

    setResponse = (choiceAlignment) => {
        const gameResponse = GameFunctions.grabResponse(this.state.responseBase, this.state.question.id, choiceAlignment);

        this.setState({
            response: gameResponse,
        })
    }
    setResponseStateTrue = () => {
        this.setState({
            inResponseState: true
        })
    }
    setResponseStateFalse = () => {

        this.setState({
            inResponseState: false
        })

    }

    progressGame = () => {
        this.setState({
            progess: this.state.progess + 1
        })
    }

    setGameComplete = () => {
        this.setState({
            gameComplete: true,
        })
    }

    setGameLost = () => {
        this.setState({
            gameLost: true,
            gameComplete: true,
        })
    }

    setLastQuestionTrue = () => {
        this.setState({
            lastQuestion: true,
        });
    }

    updateScore = (addScore) => {
        this.setState({
            score: this.state.score + addScore,
        })
    }
    updateSong = (song) => {
        this.setState({
            song: VideoGameLand,
        })
    }

    renderGeneralScreens = () => {
        //if we're in a question
        if (this.state.gameComplete) {
            return (
                <>
                    <ResultScreen ref={this.myRef}/>
                </>
            )
        } else {
            const { error } = this.state;
            return (
                <section className="gameSpace" ref={this.myRef}>
                    {error && <p>{error}</p>}
                    <GameNav />
                    <DisplayAndQuestion />
                </section>
            )
        }
    }

    scrollToMyRef = () => window.scrollTo(0, this.myRef.current.offsetTop) 

    render() {
        if (!this.state.question.length) {
            //loading
        } else {
            //done loading
        }
        const value = {
            question: this.state.question,
            questions: this.state.questions,
            choices: this.state.choices,
            response: this.state.response,
            character: this.state.character,
            inResponseState: this.state.inResponseState,
            lastQuestion: this.state.lastQuestion,
            gameLost: this.state.gameLost,
            score: this.state.score,
            health: this.state.health,
            song: this.state.song,
            progressGame: this.progressGame,
            setResponse: this.setResponse,
            setResponseStateTrue: this.setResponseStateTrue,
            setResponseStateFalse: this.setResponseStateFalse,
            grabNewData: this.grabNewData,
            setLastQuestionTrue: this.setLastQuestionTrue,
            setGameComplete: this.setGameComplete,
            setGameLost: this.setGameLost,
            updateScore: this.updateScore,
        }

        return (
            <GameSessionContext.Provider value={value}>
                {this.renderGeneralScreens()}
            </GameSessionContext.Provider>
        )
    }
}

