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
        return (
            <Link to={this.props.linkTo} className={currentPage(currentPath, this.props.linkTo)}>{this.props.linkTitle}</Link>
        )
    }
}

export default NavLink
