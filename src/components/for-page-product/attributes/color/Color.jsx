import React, { Component } from 'react'

import './color.scss'

import addActiveClass from '../../../common-functions/addActiveClass'

export default class Color extends Component {
    render() {
        return (
            <div className='product__colors-container' style={{margin: this.props.margin}}>
                <p className="product__colors">
                    COLOR: 
                </p>
                <div className="product__colors-item-box">
                    {this.props.colorsItem.map(({value}) => 
                        <div className="product__colors-item" key={value} style={{background: `${value}`}} 
                            onClick={(e) => {
                                addActiveClass(e, '.product__colors-item', 'product__colors-item_active')
                            }}
                        />
                    )}
                </div>
            </div>
        )
    }
}

// TODO: доработать с классами