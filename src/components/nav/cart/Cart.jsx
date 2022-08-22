import React, { Component } from 'react'
import styles from './cart.module.scss'
import cart from '../../../images/icons/cart.svg'

export default class Cart extends Component {
    render() {
        return (    
            <div className={styles.wrapper}>
                <div className={styles.cart}>
                    <img src={cart} alt='cart' />
                    <div className={styles.cart_circle}>
                        <p>{this.props.counter}</p>
                    </div>
                </div>
                <div className={styles.extended}>
                    
                </div>
            </div>
        )
    }
}
