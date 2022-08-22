import React, { Component } from 'react'
import styles from './button.module.scss'

export default class Button extends Component {
    render() {
        return (
            <button className={styles.button} onClick={this.props.onCLick}>
                {this.props.buttonTitle}
            </button>
        )
    }
}
