import React, { Component } from 'react'
import { connect } from 'react-redux'

export class AdminSettings extends Component {
    render() {
        return (
            <div className='admin_settings'>
                <h1>Admin Stuff</h1>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminSettings)
