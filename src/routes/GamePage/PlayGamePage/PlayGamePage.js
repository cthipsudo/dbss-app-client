import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import PlayScreenMain from '../../../components/GamePage/PlayScreenMain/PlayScreenMain';
import PlayScreenInventory from '../../../components/GamePage/PlayScreenInventory/PlayScreenInventory'
export default class ClassName extends Component {

    makeGameRoutes = () => {
        return (
            <>
                <Route exact path="/game/play" component={PlayScreenMain}></Route>
                <Route exact path="/game/play/inventory" component={PlayScreenInventory}></Route>
            </>
        )
    }

    render() {
        return (
            <>
                {this.makeGameRoutes()}
            </>
        )
    }
}

