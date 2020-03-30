import React, { Component } from 'react'
import { connect } from 'react-redux'
import {registerUser} from '../../ducks/Reducers/authReducer'

export class Register extends Component {
    constructor(){
        super();

        this.state = {
            email: '',
            password: '',
            name: ''
        }
    }

    handleInput = e => {
        this.setState({[e.target.name]: e.target.value})
     }

    handleRegister = () => {
        const {email, password, name} = this.state
        this.props.registerUser({
            email,
            password,
            name
        })
    }

    render() {
        return (
            <div className='register'>
                <section>
                    <p>Email:</p>
                    <input name='email' onChange={this.handleInput}/>
                </section>
                <section>
                    <p>Name:</p>
                    <input name='name' onChange={this.handleInput}/>
                </section>
                <section>
                    <p>Password:</p>
                    <input name='password' onChange={this.handleInput}/>
                </section>
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => ({
    
})

const mapDispatchToProps = {
    registerUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)
