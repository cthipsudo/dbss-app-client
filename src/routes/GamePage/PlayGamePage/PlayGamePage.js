import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import PlayScreenMain from '../../../components/GamePage/PlayScreenMain/PlayScreenMain';
import PlayScreenInventory from '../../../components/GamePage/PlayScreenInventory/PlayScreenInventory';
import NoGameSession from '../../../components/LandingPage/NoGameSession/NoGameSession';
import GameContext from '../../../contexts/GameContext';

export default class ClassName extends Component {

    static contextType = GameContext;

    makeGameRoutes = () => {
        //console.log(this.context.characterSelected);
        if(this.context.gameInSession){
            return (
                <>
                    <Route path="/game/play" component={PlayScreenMain}></Route>
                    <Route path="/game/play/inventory" component={PlayScreenInventory}></Route>
                </>
            )
        } else {
            return (
                <>
                    <Route path="/game/play" component={NoGameSession}></Route>
                </>
            )
        }
        
    }

    render() {
        return (
            <>
                {this.makeGameRoutes()}
            </>
        )
    }
}

