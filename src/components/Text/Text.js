import React, { Component } from 'react';
import './_text.css'

export default class Text extends Component {
    render () {
        const { name, value } = this.props.text;

        return (
            <div className="text_container">

                <p className="text_container__title text">{name}</p>
                <p className="text_container__value text">{value}</p>

            </div>
        )
    }
}