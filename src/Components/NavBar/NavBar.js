import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import {logoutUser} from '../../ducks/Reducers/authReducer'

export class NavBar extends Component {

    handleLogout = () =>{
        this.props.logoutUser()
        window.location.reload(false);
    }

    render() {
        return (
            <div>
                <Link to = '/'><button>Home</button></Link>
                <section>
                    {this.props.is_admin !== '' ? 
                        <Link to = '/' onClick={this.handleLogout}><button>Logout</button></Link> :
                        <Link to = '/auth'><button>Login</button></Link>
                    }
                </section>
                
                <section>
                {this.props.is_admin === true || this.props.is_admin === false ?
                <Link to = '/settings'><button>Settings</button></Link> : null
                }
                </section>
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => ({
    is_admin : reduxState.authReducer.is_admin
})

const mapDispatchToProps = {
    logoutUser
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
