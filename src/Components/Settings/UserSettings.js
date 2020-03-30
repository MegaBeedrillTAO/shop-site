import React, { Component } from 'react'
import { connect } from 'react-redux'
import {editUser, deleteUser} from '../../ducks/Reducers/authReducer'

export class UserSettings extends Component {

    constructor(){
        super();

        this.state = {
            email: '',
            password: '',
            name: ''
        }
    }

    componentDidMount(){
        this.setState({
            email: this.props.email,
            password: this.props.password,
            name: this.props.name
        })
    }

    handleInput = e => {
        this.setState({[e.target.name]: e.target.value})
    }


    

    render() {
        return (
            <div className='user_settings'>
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
                <button>Save Changes</button>
                <button>Delete Profile</button>
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => ({
    email: reduxState.authReducer.email,
    password: reduxState.authReducer.password,
    name: reduxState.authReducer.name
})

const mapDispatchToProps = {
    editUser,
    deleteUser
}

export default connect(mapStateToProps, mapDispatchToProps)(UserSettings)
