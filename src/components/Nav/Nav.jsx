import React, { Component } from 'react'

import NavLink from './navLink/NavLink';
import CurrencyСonverter from './currencyConverter/CurrencyСonverter';

import './nav.scss';

import logo from '../../images/icons/logo.svg'

const navLinksData = [
    { linkTitle: 'all', linkTo: '/' },
    { linkTitle: 'clothes', linkTo: '/clothes' },
    { linkTitle: 'tech', linkTo: '/tech' }
]

export default class Nav extends Component {
    render() {
        return (
            <nav className='nav'>
                <div>
                    {
                        navLinksData.map(({linkTitle, linkTo}) => {
                            return <NavLink 
                                key={linkTitle}
                                linkTo={linkTo}
                                linkTitle={linkTitle}
                            /> 
                        })
                    }
                </div>
                <img src={logo} alt="logo" />
                <div>
                    <CurrencyСonverter />
                </div>
            </nav>
        )
    }
}
