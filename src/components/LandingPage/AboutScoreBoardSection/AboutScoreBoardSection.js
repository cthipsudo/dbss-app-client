import React, { Component } from 'react'

export default class AboutScoreBoardSection extends Component {
    render() {
        const somestring = "[Screenshot of Scoreboard here]"
        return (
            <section className="lpSection">
                <h3>Scoreboard:</h3>
                <p>Successful Players will be immortalized in the hall of fame</p>
                <p id="testFormat">{somestring}</p>
            </section>
        )
    }
}
