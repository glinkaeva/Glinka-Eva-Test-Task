import React, { Component } from 'react'
import { Link } from 'react-router-dom'

function currentPage(currentPage, currentPageProps) {
    if(currentPage===currentPageProps) {
        return 'nav__link nav__link_active'
    } else return 'nav__link'
}

class NavLink extends Component {
    render() {
        const currentPath = window.location.pathname;
        const strFirstIndex = window.location.pathname.indexOf('/')
        const strLastIndex = window.location.pathname.lastIndexOf('/')
        let str = [...currentPath].slice(strFirstIndex, strLastIndex).join('')
        if (!str) str = window.location.pathname;
        return (
            <Link to={this.props.linkTo} className={currentPage(str, this.props.linkTo)}>{this.props.linkTitle}</Link>
        )
    }
}

export default NavLink
