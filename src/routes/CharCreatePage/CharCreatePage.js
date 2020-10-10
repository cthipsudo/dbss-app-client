import React, { Component } from 'react';
import CharCreateSection from '../../components/GamePage/CharCreateSection/CharCreateSection'

export default class CharCreatePage extends Component {
    // static defaultProps = {
    //     match: { params: {} },
    // }
    render() {
        return (
            <CharCreateSection slot={this.props.match.params.slotNum} goBack={this.props.history.goBack}/>
        )
    }
}