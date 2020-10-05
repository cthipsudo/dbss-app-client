import React, { Component } from 'react';
import CharCreateSection from '../../../components/GamePage/CharCreate/CharCreate'

export default class CharCreatePage extends Component {
    // static defaultProps = {
    //     match: { params: {} },
    // }
    render() {
        return (
            <CharCreateSection slot={this.props.match.params.slotNum}/>
        )
    }
}