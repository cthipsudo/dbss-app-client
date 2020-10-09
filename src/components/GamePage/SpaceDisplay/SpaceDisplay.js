import React, { Component } from 'react';
import GameSessionContext from '../../../contexts/GameSessionContext';

export default class SpaceDisplay extends Component {
    static contextType = GameSessionContext;
    render() {
        let charName = "";
        if (this.context.character.name) {
            charName = this.context.character.name;
        }
        return (
            <div className="spaceDisplay">
                <div className="characterInfo">
                    <div>{charName} <br /> Picture</div>
                    <div className="charBox">{charName}</div>
                </div>
                {/* No inventory for now <button>Show Inventory</button> */}
                <p>[background Rocket in space]</p>
            </div>
        )
    }
}