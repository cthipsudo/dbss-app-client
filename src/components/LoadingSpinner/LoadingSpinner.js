import React, { Component } from 'react';
import './LoadingSpinner.css'
export default class LoadingSpinner extends Component {
    render() {
        return (
            <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        )
    }
}