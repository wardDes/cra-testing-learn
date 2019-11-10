import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ListItem extends Component {
    render(){

        const { title, desc} = this.props

        if(!title){
            return null
        }

        return(
            <div data-test="ListItemComponent">
                <h2 data-test="componentTitle">{title}</h2>
                <section data-test="componentDesc">{desc}</section>
            </div>
        )
    }
}

ListItem.propTypes = {
    title: PropTypes.string,
    desc: PropTypes.string
}

export default ListItem