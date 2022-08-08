import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './cardProduct.scss'

export default class CardProduct extends Component {
    render() {
        return (
            <Link to={this.props.linkTo}>
                <div className='card' style={{color: this.props.color}}>
                    <div className="card__image" style={{backgroundImage: `url(${this.props.image})`}}>
                        <div className="out-of-stock" style={{display: this.props.display}}>
                            <p>out of stock</p>
                        </div>
                    </div>
                    <p className="card__text card__title">{this.props.cardTitle}</p>
                    <p className="card__text card__price">{this.props.cardSymbol}{this.props.cardPrice}</p>
                </div>
            </Link>
        )
    }
}
