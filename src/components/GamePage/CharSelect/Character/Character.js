import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Character extends Component {
    renderEmptyChar() {
        return (
            <div className="characterContainer">
                <div className="characterSlot">
                    <p>No Character Data</p>
                    <p id="newChar">?</p>
                </div>
                <Link className="makeCharButton" to={`/game/create/slot-${this.props.slot}`}>Create</Link>
            </div>
        )
    }
    renderCreatedChar() {
        const character = this.props.character;

        return (
            <div className="characterContainer">
                <div className="characterSlot">
                    <p>Existing Character Picture here</p>
                    <p>{character.name}</p>
                </div>
                <div className="characterSlotButtons">
                    <Link className="editCharButton" to={`/game/edit/slot-${this.props.slot}`}>Edit</Link>
                    <button onClick={()=>this.props.deleteChar()}>Delete</button>
                </div>
            </div>
        )
    }
    render() {
        return (
            <>
                {!this.props.character.exist && this.renderEmptyChar()}
                {this.props.character.exist && this.renderCreatedChar()}
            </>
        )
    }
}

