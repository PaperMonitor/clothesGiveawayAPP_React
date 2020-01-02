import React, { Component } from 'react';
import logo from '../assets/logo_oddamwdobrerece.png'

export default class Menu extends Component {
    render() {
        return (
            <nav className="mobile">
                <img src={logo} className="mobile__img" alt="logo"></img>
                <div className="mobile__hamburger"></div>
            </nav>
        )
    }
}