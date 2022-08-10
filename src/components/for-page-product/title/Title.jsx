import React, { Component } from 'react'

import './title.scss'

export default class Title extends Component {
    render() {
        return (
            <div className='product__title-container' style={{margin: this.props.margin}}>
                <p className="product__title">{this.props.title}</p>
                <p className="product__describe">{this.props.describe}</p>
            </div>
        )
    }
}
