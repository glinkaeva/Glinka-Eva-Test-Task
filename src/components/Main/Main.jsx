import React, { Component } from 'react'
import './main.scss'

export default class Main extends Component {
    render() {
        return (
            <main className='main'>
                {this.props.children}
            </main>
        )
    }
}
