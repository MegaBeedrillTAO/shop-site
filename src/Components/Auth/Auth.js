import React, { Component } from 'react'
import Login from './Login'
import Register from './Register'

export default class Auth extends Component {
    constructor(){
        super();
        this.state = {
            type: 'login',
            buttonText: "Don't have an account?"
        }
    }

    changeAuth = () => {
        if (this.state.type === 'login'){
            this.setState({type: 'register', buttonText: 'Already have an account?'})
        }
        else {
            this.setState({type: 'login', buttonText: "Don't have an account?"})
        }
    }

    render() {
        return (
            <div className='auth'>
                <main>
                    {this.state.type === 'login' ? 
                    <Login/> : 
                    this.state.type === 'register' ? 
                    <Register/> : 
                    null}
                </main>
                <div>
                    <button onClick={this.changeAuth}>{this.state.buttonText}</button>
                </div>
            </div>
            
        )
    }
}
