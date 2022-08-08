import React, { Component } from 'react'

export default class Color extends Component {
    render() {
        return (
            <div className='product__colors-container' style={{margin: this.props.margin}}>
                <p className="product__colors">
                    COLOR: 
                </p>
                <div className="product__colors-item-box">
                    {this.props.colorsItem.map(({displayValue}) => 
                        <div className="product__colors-item" key={displayValue} style={{background: displayValue}} 
                            onClick={(e) => {
                                const colors = document.querySelectorAll('.product__colors-item')
                                for(let i=0; i<colors.length; i++) { colors[i].classList.remove("product__colors-item_active") }
                                e.target.classList.add("product__colors-item_active");
                            }}
                        />
                    )}
                </div>
            </div>
        )
    }
}

// TODO: доработать с классами