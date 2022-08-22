import React, { Component } from 'react'

import styles from './title.module.scss'

export default class Title extends Component {
    render() {
        return (
            <div style={{margin: this.props.margin}}>
                <p className={styles.title}>{this.props.title}</p>
                <p className={styles.describe}>{this.props.describe}</p>
            </div>
        )
    }
}
