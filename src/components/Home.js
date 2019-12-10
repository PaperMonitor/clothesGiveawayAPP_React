import React, { Component } from 'react';
import Home4Steps from './Home4Steps';
import HomeAbout from './HomeAbout';
import HomeContact from './HomeContact';
import HomeHeader from './HomeHeader';
import HomeHelp from './HomeHelp';
import HomeStats from './HomeStats';
import Menu from './Menu';


export default class Home extends Component {
    render() {
        return (
            <div>
                <Menu />
                <HomeHeader />
                <HomeStats />
                <Home4Steps />
                <HomeAbout />
                <HomeHelp />
                <HomeContact />
            </div>
        )
    }
}