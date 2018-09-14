import React, { Component } from 'react';

import Circle from '../Circle/Circle';
import Text from '../Text/Text';
import './_columnContainer.css'

export default class ColumnContainer extends Component {
    render () {
        const { name, main_kpi, secondary_kpis } = this.props.column;

        return (
            <div className="container">

                <Circle
                    name={name}
                    circleData={main_kpi}
                />

                <div className="contentWrapper">
                    {
                        secondary_kpis.map( element => (

                            <Text
                                text={element}
                                key={element.name}
                            />

                        ))
                    }
                </div>
            </div>
        )
    }
}