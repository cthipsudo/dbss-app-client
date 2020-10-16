import React, { Component } from 'react'

export default class AboutGameSection extends Component {
    render() {
        return (
            <section className="lpSection">
                <h3>About the Game:</h3>
                <p className="noMargin">Drifting Between Silence and Startdust is a variant on a "Choose-your-own-Adventure" game where you can create a character and journey across the stars along to overcome a randomly generated situation from a pool of scenarios, if the player can overcome the hardships and make the right choices, their character will be placed in the Hall of Fame among the other successful "pilots".</p>
                <h4>Features:</h4>
                <ul>
                    <li>Randomly shuffled encounters after the 1st Tutorial question on each playthrough.</li>
                    <li>Unique responses are generated for each encounter based on your choices.</li>
                    <li>Character specific choices based on a character's race and class.</li>
                </ul>
            </section>
        )
    }
}
