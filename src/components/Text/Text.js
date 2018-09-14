import React, { Component } from 'react';
import './_text.css'

export default class Text extends Component {
    render () {
        const { name, value } = this.props.text;

        return (
            <div className="textWrapper">

                <p className="textTitle">{name}</p>
                <p className="textValue">{value}</p>

            </div>
        )
    }
}