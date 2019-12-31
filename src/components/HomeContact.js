import React, { Component } from 'react';
import Decoration from '../assets/Decoration.svg';

export default class HomeContact extends Component {
    render() {
        return (
            <section className="homeContact">
                <h3>Skontaktuj się z nami</h3>
                <img src={Decoration} alt="dekoracja"></img>
                <div className="form-name">
                    <label htmlFor="name">Wpisz swoje imię</label>
                    <input type="text" className="form-control" placeholder="Krzysztof" />
                </div>
                <div className="form-email">
                    <label htmlFor="exampleInputEmail1">Wpisz swój email</label>
                    <input type="email" className="form-control" aria-describedby="emailHelp" placeholder="abc@xyz.pl"/>
                </div>
                <div className="form-message">
                    <label htmlFor="message">Wpisz swoją wiadomość</label>
                    <textarea className="form-control" rows="5" placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consectetur erat sapien, a ornare tortor commodo ac. Quisque finibus justo vitae ex porttitor pretium."></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Wyślij</button>
            </section>
        )
    }
}