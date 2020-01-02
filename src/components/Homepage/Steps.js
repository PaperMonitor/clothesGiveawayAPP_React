import React, { Component } from 'react'
import Decoration from '../../assets/Decoration.svg'
import firstIcon from '../../assets/Icon-1.svg'
import secondIcon from '../../assets/Icon-2.svg'
import thirdIcon from '../../assets/Icon-3.svg'
import fourthIcon from '../../assets/Icon-4.svg'
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
  } from 'react-router-dom';

export default class Steps extends Component {
    render() {
        return (
            <section className="steps">
                <h3 className="steps__title">Wystarczą 4 proste kroki</h3>
                <img src={Decoration} className="steps__img" alt="dekoracja"></img>
                <div className="steps__DIY">
                    <div className="steps__DIY__one">
                        <img src={firstIcon} alt="t-shirt"></img>
                        <p>Wybierz rzeczy</p>
                        <span></span>
                        <p>ubrania, zabawki, sprzęt i inne</p>
                    </div>
                    <div className="steps__DIY__two">
                        <img src={secondIcon} alt="pack"></img>
                        <p>Spakuj je</p>
                        <span></span>
                        <p>skorzystaj z worków na śmieci</p>
                    </div>
                    <div className="steps__DIY__three">
                        <img src={thirdIcon} alt="search"></img>
                        <p>Zdecyduj komu chcesz pomóc</p>
                        <span></span>
                        <p>wybierz zaufane miejsce</p>
                    </div>
                    <div className="steps__DIY__four">
                        <img src={fourthIcon} alt="order"></img>
                        <p>Zamów kuriera</p>
                        <span></span>
                        <p>kurier przyjedzie w dogodnym terminie</p>
                    </div>
                </div>
                <Link to="/logowanie"><button className="steps__btn">oddaj rzeczy</button></Link>
                
            </section>
        )
    }
}