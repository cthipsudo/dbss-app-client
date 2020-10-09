import React, { Component } from 'react'

export default class AboutScoreBoardSection extends Component {
    render() {
        const somestring = "[Screenshot of Scoreboard here]"
        return (
            <section>
                <h2>Successful Players will be immortalized in the hall of fame</h2>
                <p id="testFormat">{somestring}</p>
            </section>
        )
    }
}
