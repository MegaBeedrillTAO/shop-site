import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Settings extends Component {
    render() {
        return (
            <div>
                
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
