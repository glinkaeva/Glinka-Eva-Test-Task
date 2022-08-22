import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styles from'../nav.module.scss';

function currentPage(currentPage, currentPageProps) {
    if(currentPage===currentPageProps) {
        return `${styles.link} ${styles.link_active}`
    } else return `${styles.link}`
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
