import React, { Component } from 'react';
import data from '../data';
import Slider from "react-slick";
import './App.css';

import ColumnBlock from './ColumnContainer/ColumnContainer';

export default class App extends Component {

    render() {

        return (
            <div>
                <div className="App">
                    {
                        data.columns.map(column => (
                            <ColumnBlock
                                column={column}
                                key={column.name}
                            />
                        ))
                    }
                </div>
                <div className="AppMobile">
                    {
                        <Slider>
                            {
                                data.columns.map(column => (
                                    <ColumnBlock
                                        column={column}
                                        key={column.name}
                                    />
                                ))
                            }
                        </Slider>
                    }
                </div>
            </div>
        );
    }

}

