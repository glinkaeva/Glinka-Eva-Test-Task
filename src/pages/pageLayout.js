import React, { Component } from 'react'
import Main from '../components/Main/Main';

import { connect } from "react-redux"

import { client } from '../index'
import GET_ALL_PRODUCTS from '../queries/getAllProducts'
import CardProduct from '../components/cardProduct/cardProduct';

import { setCurrentProduct } from '../store/slices/currentProductSlice';

import { motion } from 'framer-motion'
import Nav from '../components/Nav/Nav';

const mapStateToProps = state =>{
    return {
        currencies: state.currencies,
        product: state.product
    }
}

const mapDispatchToProps = { setCurrentProduct }

class PageLayout extends Component {
    constructor(props) {
        super(props)
        this.state = {
            error: '',
            data: '',
            loading: ''
        }
        this.state = {
            massIndex: 0
        }
    }

    async componentDidMount() {
        const { error, data, loading} = await client.query({ query: GET_ALL_PRODUCTS })
        this.setState({
            error: error,
            data: data,
            loading: loading
        })
        this.setState({massIndex: Number(this.props.massIndex)})
        console.log(data)
    }

    render() {
        return (
            <motion.div 
                inital={{transform: 'translateX(0px)'}}
                animate={{transform: 'translateX(0px)'}}
                exit={{transform: 'translateX(-100%)'}}
            >
                <Nav />
                <p className ='category-name'>{this.props.titlePage}</p>
                <Main>
                    {this.state.loading && '<p>Loading...</p>'}
                    {this.state.error && '<p>Error...</p>'}
                    {this.state.data &&
                        this.state.data.categories[this.state.massIndex].products.map(({id, name, inStock, gallery, prices, category}) => 
                        (
                            <CardProduct 
                                key={id}
                                color={inStock ? '#1D1F22' : '#8D8F9A'}
                                image={gallery[0]}
                                display={inStock ? 'none' : 'flex'}
                                cardTitle={name}
                                cardPrice={prices[this.props.currencies.currentCurrenciesIndex].amount} //TODO: Current currencies
                                cardSymbol={this.props.currencies.currentCurrencies}
                                linkTo={`/${category}/${name}`}
                                onClick={() => this.props.setCurrentProduct(id)}
                                // onclick -> id в глобальное состояние/переадрисация -> новый запрос/шаблонная страница наполняется данныеми
                            />
                        ))
                    }
                </Main>
            </motion.div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PageLayout);