import React, { Component } from 'react';
import PlayerProgression from '../PlayerProgress/PlayerProgress'
import DisplayAndQuestion from '../DisplayAndQuestion/DisplayAndQuestion'
import GameContext from '../../../contexts/GameContext';
import GameSessionContext from '../../../contexts/GameSessionContext';
import GameServerService from '../../../services/game-server-service';
import GameFunctions from '../../../services/GameFunctions';
import './PlayScreenMain.css'

export default class PlayScreenMain extends Component {
    static contextType = GameContext;

    state = {
        questions: [],
        character: this.context.characterSelected,
        question: {},
        choiceBase: [],
        choices: [],
        responseBase: [],
        response: {},
        progess: 0,
        inResponseState: false,
    }

    componentDidMount() {
        //Grab the questions
        const p1 = GameServerService.getGameQuestions();
        const p2 = GameServerService.getGameChoices();
        const p3 = GameServerService.getGameResponses();
        Promise.all([p1, p2, p3]).then(data => {
            console.log(data)
            this.setState({
                questions: data[0],
                choiceBase: data[1],
                responseBase: data[2],
            });

            const initalQuestions = GameFunctions.makeShuffledQuestions(this.state.questions);
            const firstQuestion = initalQuestions[this.state.progess];
            const charRace = this.context.characterSelected.race;
            const charClass = this.context.characterSelected.class;
            const initialChoices = GameFunctions.grabChoices(this.state.choiceBase, charRace, charClass, firstQuestion);
            //console.log("This is the question base", initalQuestions); 
            //console.log("Game loading starting with first question", firstQuestion);
            this.setState({
                questions: initalQuestions,
                question: firstQuestion,
                choices: initialChoices,
            });
        })

    }

    setinitialChoices = (question, char) => {
        return GameFunctions.grabChoices(question.choices, char.race, char.class).map((choice, index) => {
            return (<button key={index + choice}> {choice} </button>)
        })
    }
    grabNewQuestion = () => {
        const newQuestion = this.state.questions[this.state.progess];
        console.log();
        this.setState({
            question: newQuestion
        })
    }

    grabNewChoices = () => {
        //console.log("grabbing choices");
        let currentChoices = this.state.question.choices;
        const charRace = this.state.character.race;
        const charClass = this.state.character.class;

        const newChoices = GameFunctions.grabChoices(currentChoices, charRace, charClass).map((choice, index) => {
            return (<button key={index + choice}> {choice} </button>)
        })
        // console.log(newChoices);
        this.setState({
            choices: newChoices,
        })

    }

    setResponse = (choiceAlignment) => {
        const gameResponse = GameFunctions.grabChoices(this.state.responseBase, this.state.question.id, choiceAlignment);
        this.setState({
            response: gameResponse,
        })
    }
    setResponseState = () => {
        this.setState({
            inResponseState: !this.state.inResponseState,
        })
    }

    progressGame = () => {
        this.setState({
            progess: this.state.progess + 1
        })
    }

    render() {
        if (!this.state.question.length) {
            //loading
        } else {
            //done loading
        }
        const value = {
            question: this.state.question,
            choices: this.state.choices,
            response: this.state.response,
            character: this.state.character,
            progressGame: this.progressGame,
            setResponse: this.setResponse,
            setResponseState: this.setResponseState,
        }

        return (
            <GameSessionContext.Provider value={value}>
                <section className="gameSpace">
                    <PlayerProgression />
                    <DisplayAndQuestion />
                </section>
            </GameSessionContext.Provider>
        )
    }
}

