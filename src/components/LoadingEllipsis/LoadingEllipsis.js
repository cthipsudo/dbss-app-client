import React, { Component } from 'react';
import './LoadingEllipsis.css'

export default class LoadingEllipsis extends Component {
    render() {
        return (
            <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
        )
    }
}