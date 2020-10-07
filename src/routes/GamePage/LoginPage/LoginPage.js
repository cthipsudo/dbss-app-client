import React, { Component } from 'react';
import LoginForm from '../../../components/GamePage/LoginForm/LoginForm';

export default class LoginPage extends Component {
    static defaultProps = {
        location: {},
        history: {
            push: () => { },
        },
    }
    handleLoginSuccess = () => {
        console.log('tyring to go to char select');
        const { location, history } = this.props
        history.push('/game/select-char')
    }
    render() {
        return (
            <section>
                <h1>Login</h1>
                <LoginForm onLoginSuccess={this.handleLoginSuccess}></LoginForm>
            </section>
        )
    }
}