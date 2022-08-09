import React, { Component } from 'react'
import './pageItem.scss'

import { connect } from "react-redux"

import { client } from '../..'
import GET_PRODUCT_BY_ID from '../../queries/getProductById.ts'
import Nav from '../../components/Nav/Nav'

import TitleProduct from '../../components/ForPageItem/TitleProduct/TitleProduct'
import SelectedItem from '../../components/ForPageItem/SelectedItem/SelectedItem'
import Color from '../../components/ForPageItem/Color/Color'
import Button from '../../components/Button/Button'

import { motion } from 'framer-motion'

const mapStateToProps = state =>{
    return {
        currencies: state.currencies
    }
}

class PageItem extends Component {
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
                <motion.div 
                    initial={{ y: '-120%' }}
                    animate={{ y: '0%' }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: .7 }}
                >
                    <Nav />
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
                                    <TitleProduct 
                                        margin="0px 0px 43px 0px"
                                        title={this.state.data.product.name}
                                    />
                                    {this.state.data?.product.attributes.map(({name}, index) => {
                                        if(name==='Size') {
                                            return <SelectedItem 
                                                key={name}
                                                margin="0px 0px 24px 0px"
                                                selectTitle="Size"
                                                attributesItem={this.state.data?.product.attributes[index].items}
                                            />
                                        } 
                                        if (name === 'Capacity') {
                                            return <SelectedItem 
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

export default connect(mapStateToProps)(PageItem)