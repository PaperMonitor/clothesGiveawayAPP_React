import React, { Component } from 'react'

export default class HomeStats extends Component {
    render() {
        return (
            <section className="homeStats">
                <div className="first-counter">
                    <h3>10</h3>
                    <p>oddanych worków</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lacinia, orci ut lacinia hendrerit, purus velit lacinia dui, a aliquet justo metus eu est.</p>
                </div>
                <div className="second-counter">
                    <h3>5</h3>
                    <p>wspartych organizacji</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lacinia, orci ut lacinia hendrerit, purus velit lacinia dui, a aliquet justo metus eu est.</p>
                </div>
                <div className="third-counter">
                    <h3>7</h3>
                    <p>zorganizowanych zbiórek</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lacinia, orci ut lacinia hendrerit, purus velit lacinia dui, a aliquet justo metus eu est.</p>
                </div>
            </section>
        )
    }
}