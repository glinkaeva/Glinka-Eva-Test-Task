import React, { Component } from 'react'
import './pageItem.scss'

import { connect } from "react-redux"
import { client } from '../..'
import GET_PRODUCT_BY_ID from '../../queries/getProductById.ts'

const mapStateToProps = state =>{
    return {
        product: state.product
    }
}

class PageItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            error: '',
            data: '',
            loading: ''
        }
    }

    async componentDidMount() {
        console.log(this.props.product)
        const { error, data, loading} = await client.query({ 
            query: GET_PRODUCT_BY_ID, 
            variables: {
                id: this.props.product.currentProductId
            }
        })

        this.setState({
            error: error,
            data: data,
            loading: loading
        })
    }

    render() {
        console.log(this.state.data)
        return (
            <>
                {this.state.loading && '<p>Loading...</p>'}
                {this.state.error && '<p>Error...</p>'}
                {this.state.data &&
                    <p>{this.state.data.product.name}</p>
                }
            </>
        )
    }
}

export default connect(mapStateToProps)(PageItem)