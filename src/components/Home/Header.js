import React, { Component } from 'react'
import Decoration from '../assets/Decoration.svg'

export default class HomeHeader extends Component {
    render() {
        return (
            <header className="start">
                <h1 className="start__title">Zacznij pomagać!</h1>
                <h1 className="start__subtitle">Oddaj niechciane rzeczy w zaufane ręce</h1>
                <img src={Decoration} className="start__img" alt="dekoracja"></img>
                <div className="start__btns">
                    <button className="start__btns__btn">oddaj<br></br>rzeczy</button>
                    <button classname="start__btns__btn">zorganizuj<br></br>zbiórkę</button>
                </div>
            </header>
        )
    }
}