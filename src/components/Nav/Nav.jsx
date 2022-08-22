import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import styles from'./nav.module.scss';

import NavLink from './link/NavLink';
import Cart from './cart/Cart';
import CurrencyСonverter from './currency-converter/CurrencyConverter';

import logo from '../../images/icons/logo.svg'

const navLinksData = [
    { linkTitle: 'all', linkTo: '/' },
    { linkTitle: 'clothes', linkTo: '/clothes' },
    { linkTitle: 'tech', linkTo: '/tech' }
]

export default class Nav extends Component {
    render() {
        return (
            <nav className={styles.nav}>
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
                <Link to="/"><img src={logo} alt="logo" /></Link>
                <div className={styles.right_side}>
                    <CurrencyСonverter />
                    <Cart />
                </div>
            </nav>
        )
    }
}
