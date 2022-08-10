import React, { Component } from 'react'
import { connect } from "react-redux"
import { motion } from 'framer-motion'

import Nav from '../components/nav/Nav';
import Main from '../components/main/Main';
import CardProduct from '../components/card-product/CardProduct';
import { client } from '../index'
import GET_ALL_PRODUCTS from '../queries/getAllProducts'

const mapStateToProps = state => {
    return {
        currencies: state.currencies
    }
}

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
            <>
                    <Nav />
                    <motion.div 
                        initial={{ x: '-120%' }}
                        animate={{ x: '0%' }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: .7 }}
                    >
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
                                        linkTo={`/${category}/${id}`}
                                    />
                                ))
                            }
                        </Main>
                    </motion.div>
            </>
        )
    }
}

export default connect(mapStateToProps)(PageLayout);