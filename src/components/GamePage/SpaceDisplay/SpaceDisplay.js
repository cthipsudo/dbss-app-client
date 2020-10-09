import React, { Component } from 'react';

export default class SpaceDisplay extends Component {
    render() {
        return (
            <div className="spaceDisplay">
                <div className="characterInfo">
                    <div>Character <br /> Picture</div>
                    <div>Character Name</div>
                </div>
                {/* No inventory for now <button>Show Inventory</button> */}
                <p>[background Rocket in space]</p>
            </div>
        )
    }
}