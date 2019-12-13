import React, { Component } from 'react'
import Decoration from '../assets/Decoration.svg'

export default class HomeHelp extends Component {
    render() {
        return (
            <section className="homeHelp">
                <h3>Komu pomagamy?</h3>
                <img src={Decoration} alt="dekoracja"></img>
                <div className="helpButtons">
                    <button className="firstButton">Fundacjom</button>
                    <button className="secondButton">Organizacjom pozarządowym</button>
                    <button className="thirdButton">Lokalnym zbiórkom</button>
                </div>
                <p className="helpDescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mattis, dui quis sollicitudin fringilla, ex ligula mollis urna, non aliquam odio orci sed massa</p>
                <div className="fundationEntries">
                    <div className="firstEntry">
                    <h5>Organizacja "Lorem Ipsum1"</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <p>Egestas, sed, tempus</p>
                    <button>1</button>
                    <button>2</button>
                </div>
            </section>
        )
    }
}