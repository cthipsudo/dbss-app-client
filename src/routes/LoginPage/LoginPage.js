import React, { Component } from 'react';
import LoginForm from '../../components/GamePage/LoginForm/LoginForm';

export default class LoginPage extends Component {
    constructor(props) {
        super(props)
        this.myRef = React.createRef()  
    }

    static defaultProps = {
        location: {},
        history: {
            push: () => { },
        },
    }
    handleLoginSuccess = () => {
        const { history } = this.props
        history.push('/game/select-char')
    }
    scrollToMyRef = () => window.scrollTo(0, this.myRef.current.offsetTop)
    
    componentDidMount(){
        this.scrollToMyRef();
    }
    render() {
        return (
            <section className="loginSection" ref={this.myRef}>
                <h1>Login</h1>
                <LoginForm onLoginSuccess={this.handleLoginSuccess}></LoginForm>
            </section>
        )
    }
}