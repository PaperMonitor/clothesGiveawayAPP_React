import React, { Component } from 'react'
import Decoration from '../../assets/Decoration.svg'

export default class HomeHelp extends Component {
    render() {
        return (
            <section className="help">
                <h3 className="help__title">Komu pomagamy?</h3>
                <img src={Decoration} className="help__img" alt="dekoracja"></img>
                <div className="help__btns">
                    <button className="help__btns__first">Fundacjom</button>
                    <button className="help__btns__second">Organizacjom pozarządowym</button>
                    <button className="help__btns__third">Lokalnym zbiórkom</button>
                </div>
                <p className="help__paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mattis, dui quis sollicitudin fringilla, ex ligula mollis urna, non aliquam odio orci sed massa</p>
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