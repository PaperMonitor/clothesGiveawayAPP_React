import React, { Component } from 'react';
import Menu from './Menu';
import Header from './Header';
import Stats from './Stats';
import Steps from './Steps';
import About from './About';
import Help from './Help';
import Contact from './Contact';

export default class Home extends Component {
    render() {
        return (
            <div>
                <Menu />
                <Header />
                <Stats />
                <Steps />
                <About />
                <Help />
                <Contact />
            </div>
        )
    }
}