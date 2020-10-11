import React, { Component } from 'react';
import './LoadingEllipsis.css'
export default class LoadingEllipsis extends Component {
    render() {
        return (
            <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
        )
    }
}