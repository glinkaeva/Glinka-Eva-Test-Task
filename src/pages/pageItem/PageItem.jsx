import React, { Component } from 'react'
import './pageItem.scss'

import { client } from '../..'
import GET_PRODUCT_BY_ID from '../../queries/getProductById.ts'
import Nav from '../../components/Nav/Nav'

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
        console.log(this.state.data?.product.attributes)
        // {this.state.data.product.name}
        return (
            <>
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
                        </>)
                    }
                </div>
            </>
        )
    }
}

export default PageItem