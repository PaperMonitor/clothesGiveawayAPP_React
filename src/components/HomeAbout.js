import React, { Component } from 'react'
import Decoration from '../assets/Decoration.svg'
import Signature from '../assets/Signature.svg'


export default class HomeAbout extends Component {
    render() {
        return (
            <section className="homeAbout">
                <div className="description">
                    <h3>O nas</h3>
                    <img src={Decoration} alt="dekoracja"></img>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mattis, dui quis sollicitudin fringilla, ex ligula mollis urna, non aliquam odio orci sed massa</p>
                    <img src={Signature} alt="podpis"></img>
                </div>
            </section>
        )
    }
}