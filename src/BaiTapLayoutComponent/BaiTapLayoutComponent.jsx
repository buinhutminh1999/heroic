import React, { Component } from 'react'
import style from '../style/main.css'
import Header from './Header'
import Footer from './Footer'
import Body from './Body'

export default class BaiTapLayoutComponent extends Component {
    render() {
        return (
            <>
                <Header />
                <Body />
                <Footer />
            </>
        )
    }
}
