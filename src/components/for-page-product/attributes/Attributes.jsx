import React, { Component } from 'react'

import styles from './attributes.module.scss'

import addActiveClass from '../../common-functions/addActiveClass'

export default class Attributes extends Component {
    selectConverter(value) {
        switch(value) {
            case 'Extra Small': 
                return 'XS'
            case 'Small': 
                return 'S'
            case 'Medium':
                return 'M'
            case 'Large':
                return 'L'
            case 'Extra Large':
                return 'XL'
            case 'Extra Extra Large':
                return 'XXL'
            default: 
                return value
        }
    }
    render() {
        return (
            <div style={{margin: this.props.margin}}>
                <p className={styles.title}>
                    {this.props.selectTitle}
                </p>
                <div className={styles.item_box}>
                    {this.props.attributesItem.map(({ displayValue }, index) => 
                        <div className={index===0 ? `${styles.item} ${styles.item_active}` : `${styles.item}`} key={displayValue} 
                            onClick={(e) => {
                                addActiveClass(e, `${styles.item}`, `${styles.item_active}`)
                                
                            }}>
                            <p>{this.selectConverter(displayValue)}</p>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}
