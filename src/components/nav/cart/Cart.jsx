import React, { Component } from 'react'
import './cart.scss'
import cart from '../../../images/icons/basket.svg'

export default class Cart extends Component {
    render() {
        return (    
            <div className='navBasket'>
                <div className='navBasket__container'>
                    <img src={cart} alt='cart' />
                    <div className="navBasket__circle">
                        <p>{this.props.counter}</p>
                    </div>
                </div>
                <div className='navBasket_extended'>
                    
                </div>
            </div>
        )
    }
}
