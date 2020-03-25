import React, { Component } from 'react'
import { connect } from 'react-redux'
import Specials from './Specials'
import {get_info} from '../../ducks/Reducers/infoReducer'

export class LandingPage extends Component {
    
    componentDidMount(){
        this.props.get_info();
    }

    render() {
        const specials = this.props.specials.map((el, i) =>(
            <Specials
                key = {i}
                content = {el.content}
                price = {el.price}
            />
        ))
        return (
            <div>
               {/* <h1>Hi</h1> */}
                <section>
                    {specials}
                </section>
                <section>
                    {this.props.announcments}
                </section>
                <section>
                    <img src={this.props.menu_img} alt='Menu not found'/>
                </section>
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => ({
    announcments: reduxState.infoReducer.announcments,
    menu_img: reduxState.infoReducer.menu_img,
    specials: reduxState.infoReducer.specials
})

const mapDispatchToProps = {
    get_info
}

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage)
