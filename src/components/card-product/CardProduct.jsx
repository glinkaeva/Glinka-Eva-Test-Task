import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './cardProduct.scss'

import basket from '../../images/icons/basket_white.svg'

export default class CardProduct extends Component {
    constructor(props) {
        super(props)

        this.basket = React.createRef();
    }
    render() {
        return (
            <Link to={this.props.linkTo}>
                <div className='card' style={{color: this.props.color}} 
                    onMouseOver={() => {this.basket.current.classList.add('addToBasket_active')}} 
                    onMouseOut={() => {this.basket.current.classList.remove('addToBasket_active')}}
                >
                    <div className="card__image" style={{backgroundImage: `url(${this.props.image})`}}>
                        <div className="out-of-stock" style={{display: this.props.display}}>
                            <p>out of stock</p>
                        </div>
                        <div className="addToBasket" ref={this.basket}>
                            <img src={basket} alt="add to basket" />
                        </div>
                    </div>
                    <p className="card__text card__title">{this.props.cardTitle}</p>
                    <p className="card__text card__price">{this.props.cardSymbol}{this.props.cardPrice}</p>
                </div>
            </Link>
        )
    }
}
