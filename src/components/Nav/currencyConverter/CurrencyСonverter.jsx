import React, { Component } from 'react'
import './currencyCoverter.scss'
import { client } from '../../../index'

import GET_CURRENCIES from '../../../queries/getCurrencies'

import arrow from '../../../images/icons/arrow.svg'

export default class CurrencyСonverter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            error: '',
            data: '',
            loading: ''
        }
        this.state = {
            currentCurrencies: '$'
        }
        this.listRef = React.createRef();
        this.imageRef = React.createRef();

        this.optionHandleClick = this.optionHandleClick.bind(this)
        this.listSelected = this.listSelected.bind(this)
    }

    async componentDidMount() {
        const { error, data, loading} = await client.query({ query: GET_CURRENCIES })
        this.setState({
            error: error,
            data: data,
            loading: loading
        })
    }

    optionHandleClick() {
        this.listRef.current.classList.toggle('options-list_active')
        this.imageRef.current.classList.toggle('active')
    }

    listSelected(e) {
        const symbol = e.target.innerHTML.trim().split('');
        this.setState({currentCurrencies: symbol[0] + symbol[1]})
        this.listRef.current.classList.remove('options-list_active')
        this.imageRef.current.classList.remove('active')
    }

    render() {
        return (
            <div className='select-container'>
                <div className="select" onClick={this.optionHandleClick}>
                    <p>{this.state.currentCurrencies}</p>
                    <img src={arrow} alt="arrow" ref={this.imageRef}/>
                </div>
                <ul className="options-list" ref={this.listRef}>
                    {this.state.loading && '<p>Loading...</p>'}
                    {this.state.error && '<p>Error...</p>'}
                    {this.state.data && 
                        this.state.data.currencies.map(({label, symbol}) => (
                            <li key={symbol} onClick={this.listSelected}>{symbol} {label}</li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}
