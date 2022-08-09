import React, { Component } from 'react'
import addActiveClass from '../../functions/addActiveClass'
import './SelectedItem.scss'

export default class SelectedItem extends Component {
    selectConverter(value) {
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
            <div className='selectedItem-container' style={{margin: this.props.margin}}>
                <p className="selectedItem__title">
                    {this.props.selectTitle}
                </p>
                <div className="selectedItem-item-box">
                    {this.props.attributesItem.map(({ displayValue }) => 
                        <div className='selectedItem__item' key={displayValue} 
                            onClick={(e) => {
                                addActiveClass(e, '.selectedItem__item', 'selectedItem__item_active')
                            }}>
                            <p>{this.selectConverter(displayValue)}</p>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}

// TODO: обработать снятие выделения; доработать с классами
