import React, { Component } from 'react'
import { connect } from 'react-redux'
import UserSettings from './UserSettings'
import AdminSettings from './AdminSettings'

export class Settings extends Component {
    render() {
        return (
            <div className='settings'>
                {this.props.is_admin === true ?
                <AdminSettings/> :
                this.props.is_admin === false ?
                <UserSettings/>:
                null}
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => ({
    is_admin: reduxState.authReducer.is_admin
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings)
