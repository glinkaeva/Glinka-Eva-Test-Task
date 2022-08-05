import React, { Component } from 'react'
import Nav from '../../components/Nav/Nav'
import Main from '../../components/Main/Main';

import { client } from '../../index'
import GET_ALL_PRODUCTS from '../../queries/getAllProducts'
import CardProduct from '../../components/cardProduct/cardProduct';

export default class PageAll extends Component {
    constructor(props) {
        super(props)
        this.state = {
            error: '',
            data: '',
            loading: ''
        }
    }

    async componentDidMount() {
        const { error, data, loading} = await client.query({ query: GET_ALL_PRODUCTS })
        this.setState({
            error: error,
            data: data,
            loading: loading
        })
    }

    render() {
        return (
            <div>
                <Nav />
                    <p className='category-name'>All</p>
                <Main>
                    {this.state.loading && '<p>Loading...</p>'}
                    {this.state.error && '<p>Error...</p>'}
                    {this.state.data && 
                        this.state.data.categories[0].products.map(({id, name, inStock, gallery, prices}) => (
                            <CardProduct 
                                key={id}
                                color={inStock ? '#1D1F22' : '#8D8F9A'}
                                image={gallery[0]}
                                display={inStock ? 'none' : 'flex'}
                                cardTitle={name}
                                cardPrice={prices[0].amount}
                            />
                        ))
                    }
                </Main>
            </div>
        )
    }
}
