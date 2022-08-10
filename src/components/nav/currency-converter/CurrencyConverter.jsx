import React, { Component } from 'react'
import { connect } from "react-redux"

import './currencyConverter.scss'

import { client } from '../../../index'
import GET_CURRENCIES from '../../../queries/getCurrencies'
import {setCurrentCurrencies} from '../../../store/slices/currentCurrenciesSlice'

import arrow from '../../../images/icons/arrow.svg'

const mapStateToProps = state =>{
    return {
        currencies: state.currencies
    }
}

const mapDispatchToProps = { setCurrentCurrencies }

class CurrencyСonverter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            error: '',
            data: '',
            loading: ''
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
        const symbolMass = e.target.innerHTML.trim().split('');
        const symbol = symbolMass[0] + symbolMass[1]
        this.props.setCurrentCurrencies(symbol.trim())
        this.listRef.current.classList.remove('options-list_active')
        this.imageRef.current.classList.remove('active')
    }

    render() {
        return (
            <div className='select-container'>
                <div className="select" onClick={this.optionHandleClick}>
                    <p>{this.props.currencies.currentCurrencies}</p>
                    <img src={arrow} alt="arrow" ref={this.imageRef}/>
                </div>
                <ul className="options-list" ref={this.listRef}>
                    {this.state.loading && '<p>Loading...</p>'}
                    {this.state.error && '<p>Error...</p>'}
                    {this.state.data && 
                        this.state.data.currencies.map(({label, symbol}) => 
                        (
                            <li key={symbol} onClick={this.listSelected}>{symbol} {label}</li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CurrencyСonverter);