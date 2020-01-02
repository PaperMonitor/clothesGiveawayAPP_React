import React, { Component } from 'react'
import Decoration from '../assets/Decoration.svg'
import Signature from '../assets/Signature.svg'

export default class HomeAbout extends Component {
    render() {
        return (
            <section className="about">
                <div className="about__description">
                    <h3 className="about__description__title">O nas</h3>
                    <img src={Decoration} className="about__description__img" alt="dekoracja"></img>
                    <p className="about__description__paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mattis, dui quis sollicitudin fringilla, ex ligula mollis urna, non aliquam odio orci sed massa</p>
                    <img src={Signature} className="about__description__signature" alt="podpis"></img>
                </div>
            </section>
        )
    }
}