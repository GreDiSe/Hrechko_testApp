import React, { Component } from 'react';
import './_circle.css'

export default class Circle extends Component {

    render () {
        const { name, circleData } = this.props;


        return (
            <div>
                <p className="title">{name}</p>
                <div className="circle_container">
                    <p className="circle_container__name">{circleData.name}</p>
                    <p className="circle_container__value">{circleData.value}</p>

                    <div>
                        <div className="ytd">
                            <p className="circle_text">{circleData.trends.ytl || "--"}</p>
                            <p className="circle_text">YTD</p>
                        </div>
                        <div className="pp_container">
                            <p className="circle_text pp_container__value">{circleData.trends.pp + " %"}</p>
                            <p className='circle_text pp_container__text'>PP</p>
                        </div>
                    </div>

                </div>
            </div>
        )
    }

}
