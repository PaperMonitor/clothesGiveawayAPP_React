import React, { Component } from 'react';
import logo from '../assets/logo_oddamwdobrerece.png'

export default class Menu extends Component {
    render() {
        return (
            <nav className="mobile-nav">
                <img src={logo} alt="logo"></img>
                <div></div>
            </nav>
        )
    }
}