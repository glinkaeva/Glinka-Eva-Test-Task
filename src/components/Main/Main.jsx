import React, { Component } from 'react'
import styles from './main.module.scss'

export default class Main extends Component {
    render() {
        return (
            <main className={styles.main}>
                {this.props.children}
            </main>
        )
    }
}
