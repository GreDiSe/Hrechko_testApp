import React, { Component } from 'react';
import './_circle.css'

export default class Circle extends Component {

    render () {
        const { name, circleData } = this.props;


        return (
            <div>
                <p className="title">{name}</p>
                <div className="innerCircle">
                    <p className="circleName">{circleData.name}</p>
                    <p className="circleValue">{circleData.value}</p>

                    <div>
                        <div className="ytd">
                            <p>{circleData.trends.ytl || "--"}</p>
                            <p>YTD</p>
                        </div>
                        <div className="pp">
                            <p className="ppValue">{circleData.trends.pp + " %"}</p>
                            <p>PP</p>
                        </div>
                    </div>

                </div>
            </div>
        )
    }

}
