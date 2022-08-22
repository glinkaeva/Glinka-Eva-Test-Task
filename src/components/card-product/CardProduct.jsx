import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import styles from './cardProduct.module.scss'

import cart from '../../images/icons/cart_white.svg'

export default class CardProduct extends Component {
    constructor(props) {
        super(props)
        this.cart = React.createRef();
    }
    render() {
        return (
            <div className={styles.wrapper}>
                <Link to={this.props.linkTo} id={this.props.id}>
                    <div className={styles.card}  style={{color: this.props.color}} 
                        onMouseOver={() => {this.cart.current.classList.add(`${styles.add_to_cart_active}`)}} 
                        onMouseOut={() => {this.cart.current.classList.remove(`${styles.add_to_cart_active}`)}}
                    >
                        <div className={styles.preview} style={{backgroundImage: `url(${this.props.image})`}}>
                            <div className={styles.out_of_stock} style={{display: this.props.display}}>
                                <p>out of stock</p>
                            </div>
                        </div>
                        <p className={`${styles.text} ${styles.title}`}>{this.props.cardTitle}</p>
                        <p className={`${styles.text} ${styles.price}`}>{this.props.cardSymbol}{this.props.cardPrice}</p>
                    </div>
                </Link>
                <div className={styles.add_to_cart} ref={this.cart} onClick={this.props.onClickCard}> 
                    <img src={cart} alt="add to cart" />
                </div>
            </div>
        )
    }
}

