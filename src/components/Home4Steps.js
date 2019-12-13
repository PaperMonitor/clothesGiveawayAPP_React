import React, { Component } from 'react'
import Decoration from '../assets/Decoration.svg'
import firstIcon from '../assets/Icon-1.svg'
import secondIcon from '../assets/Icon-2.svg'
import thirdIcon from '../assets/Icon-3.svg'
import fourthIcon from '../assets/Icon-4.svg'


export default class Home4Steps extends Component {
    render() {
        return (
            <section className="home4Steps">
                <h3>Wystarczą 4 proste kroki</h3>
                <img src={Decoration} alt="dekoracja"></img>
                <div className="steps">
                    <div className="stepOne">
                        <img src={firstIcon} alt="t-shirt"></img>
                        <p>Wybierz rzeczy</p>
                        <span></span>
                        <p>ubrania, zabawki, sprzęt i inne</p>
                    </div>
                    <div className="stepTwo">
                        <img src={secondIcon} alt="pack"></img>
                        <p>Spakuj je</p>
                        <span></span>
                        <p>skorzystaj z worków na śmieci</p>
                    </div>
                    <div className="stepThree">
                        <img src={thirdIcon} alt="search"></img>
                        <p>Zdecyduj komu chcesz pomóc</p>
                        <span></span>
                        <p>wybierz zaufane miejsce</p>
                    </div>
                    <div className="stepFour">
                        <img src={fourthIcon} alt="order"></img>
                        <p>Zamów kuriera</p>
                        <span></span>
                        <p>kurier przyjedzie w dogodnym terminie</p>
                    </div>
                </div>
                <button>oddaj rzeczy</button>
            </section>
        )
    }
}