import React, { Component } from 'react'
import { connect } from 'react-redux'
import {loginUser} from '../../ducks/Reducers/authReducer'
import {Redirect} from 'react-router-dom';

export class Login extends Component {
    constructor(){
        super();

        this.state = {
            email: '',
            password: ''
        }
    }

    handleInput = e => {
        this.setState({[e.target.name]: e.target.value})
     }

    handleLogin = () => {
        const {email, password} = this.state
        this.props.loginUser({
            email,
            password
        })
    }

    render() {
        if (this.props.user_id){
            return <Redirect to='/'/>
        }
        return (
            <div>
                <section>
                    <p>Email:</p>
                    <input name='email' onChange={this.handleInput}/>
                </section>
                <section>
                    <p>Password:</p>
                    <input name='password' onChange={this.handleInput}/>
                </section>
                <button onClick={this.handleLogin}>Login</button>
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => ({
    user_id: reduxState.authReducer.user_id
})

const mapDispatchToProps = {
    loginUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
