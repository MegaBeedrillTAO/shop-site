import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'

export class NavBar extends Component {



    render() {
        return (
            <div>
                <Link to = '/'><button>Home</button></Link>
                <Link to = '/auth'><button>Login</button></Link>
                <>
                {this.props.is_admin === true || this.props.is_admin === false ?
                <Link to = '/settings'><button>Settings</button></Link> : null
                }
                </>
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => ({
    is_admin : reduxState.authReducer.is_admin
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
