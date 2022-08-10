import React, { Component } from 'react'
import { connect } from "react-redux"
import { motion } from 'framer-motion'

import './item.scss'

import { client } from '../..'
import GET_PRODUCT_BY_ID from '../../queries/getProductById.ts'

import Nav from '../../components/nav/Nav'
import Button from '../../components/button/Button'
import Title from '../../components/for-page-product/title/Title'
import Attributes from '../../components/for-page-product/attributes/Attributes'
import Color from '../../components/for-page-product/attributes/color/Color'

const mapStateToProps = state =>{
    return {
        currencies: state.currencies
    }
}

class Item extends Component {
    constructor(props) {
        super(props)
        this.state = {
            idProduct: null,
        }
        this.state = {
            error: '',
            data: '',
            loading: ''
        }
        this.state = {
            preview: 0,
        }
    }
    UNSAFE_componentWillMount() {
        let strIndex = window.location.pathname.lastIndexOf('/')
        let pathname = window.location.pathname
        
        let str = [...pathname].slice(strIndex+1, pathname.length).join('')
        this.setState({
            idProduct: str
        })
    }

    async componentDidMount() {
        const { error, data, loading} = await client.query({ 
            query: GET_PRODUCT_BY_ID, 
            variables: {
                id: this.state.idProduct
            }
        })

        this.setState({
            error: error,
            data: data,
            loading: loading
        })
    }

    render() {
        // console.log(this.state.data?.product.attributes)
        console.log(this.state.data?.product)
        // {this.state.data.product.name}
        return (
            <>
                <Nav />
                    <motion.div 
                        initial={{ y: '120%' }}
                        animate={{ y: '0%' }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: .7 }}
                    >
                        <div className='cardItem__wrapper'>
                            {this.state.loading && '<p>Loading...</p>'}
                            {this.state.error && '<p>Error...</p>'}
                            {this.state.data && 

                                (<>
                                    <div className="gallery">
                                        <div className="gallery__list">
                                            {this.state.data.product.gallery.map((source, index) => (
                                                <div className="gallery__item" key={index} style={{backgroundImage: `url(${source})`}} onClick={() => this.setState({preview: index})}/>
                                            ))}
                                        </div>
                                        <div className="gallery__item gallery__item_active" style={{backgroundImage: `url(${this.state.data.product.gallery[this.state.preview]})`}} />
                                    </div>
                                    <div className="cardItem__content">
                                        <Title 
                                            margin="0px 0px 43px 0px"
                                            title={this.state.data.product.name}
                                        />
                                        {this.state.data?.product.attributes.map(({name}, index) => {
                                                if(name==='Size') {
                                                    return <Attributes 
                                                        key={name}
                                                        margin="0px 0px 24px 0px"
                                                        selectTitle="Size"
                                                        attributesItem={this.state.data?.product.attributes[index].items}
                                                    />
                                                } 
                                                if (name === 'Capacity') {
                                                    return <Attributes 
                                                        key={name}
                                                        margin="0px 0px 24px 0px"
                                                        selectTitle="Capacity"
                                                        attributesItem={this.state.data?.product.attributes[index].items}
                                                    />
                                                }
                                                if (name==="Color") {
                                                    return <Color 
                                                        key={name}
                                                        margin="0px 0px 36px 0px"
                                                        colorsItem={this.state.data?.product.attributes[index].items}
                                                    />
                                                }
                                            }
                                        )}
                                        <p className='cardItem__priceTitle'>
                                            PRICE:
                                        </p>
                                        <p className='cardItem__price'>
                                            {this.state.data?.product.prices[this.props.currencies.currentCurrenciesIndex].currency.symbol}
                                            {this.state.data?.product.prices[this.props.currencies.currentCurrenciesIndex].amount}
                                        </p>
                                        <Button 
                                            buttonTitle="ADD TO CART"
                                        />
                                        <div className='cardItem__describe' dangerouslySetInnerHTML={{__html: `${this.state.data?.product.description}`}} />
                                    </div>
                                </>)
                            }
                        </div>
                    </motion.div>
            </>
        )
    }
}

export default connect(mapStateToProps)(Item)