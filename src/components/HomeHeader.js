import React, { Component } from 'react'
import Decoration from '../assets/Decoration.svg'

export default class HomeHeader extends Component {
    render() {
        return (
            <header>
                <h1>Zacznij pomagać!</h1>
                <h1>Oddaj niechciane rzeczy w zaufane ręce</h1>
                <img src={Decoration} alt="dekoracja"></img>
                <div className="header-buttons">
                    <button>oddaj<br></br>rzeczy</button>
                    <button>zorganizuj<br></br>zbiórkę</button>
                </div>
            </header>
        )
    }
}