import React, { Component } from 'react'

import styles from './color.module.scss'

import addActiveClass from '../../../common-functions/addActiveClass'

export default class Color extends Component {
    render() {
        return (
            <div style={{margin: this.props.margin}}>
                <p className={styles.title}>
                    COLOR: 
                </p>
                <div className={styles.item_box}>
                    {this.props.colorsItem.map(({value}, index) => 
                        <div className={index===0 ? `${styles.item} ${styles.item_active}` : `${styles.item}`} key={value} style={{background: `${value}`}} 
                            onClick={(e) => {
                                addActiveClass(e, `${styles.item}`, `${styles.item_active}`)
                            }}
                        />
                    )}
                </div>
            </div>
        )
    }
}

// TODO: доработать с классами