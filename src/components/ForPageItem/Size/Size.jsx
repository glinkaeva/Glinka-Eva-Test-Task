import React, { Component } from 'react'
import './size.scss'

export default class Size extends Component {
    sizeConverter(value) {
        switch(value) {
            case 'Extra Small': 
                return 'XS'
            case 'Small': 
                return 'S'
            case 'Medium':
                return 'M'
            case 'Large':
                return 'L'
            case 'Extra Large':
                return 'XL'
            case 'Extra Extra Large':
                return 'XXL'
            default: 
                return value
        }
    }
    render() {
        return (
            <div className='product__size-container' style={{margin: this.props.margin}}>
                <p className="product__size">
                    Size:
                </p>
                <div className="product__size-item-box">
                    {this.props.attributesItem.map(({ displayValue }) => 
                        <div className='product__size-item' key={displayValue} onClick={(e) => {e.target.classList.add('product__size-item_active')}}>
                            <p>{this.sizeConverter(displayValue)}</p>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}

// TODO: обработать снятие выделения; доработать с классами
