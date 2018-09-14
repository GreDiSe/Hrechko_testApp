import React, { Component } from 'react';
import data from '../data';
import './App.css';

import ColumnBlock from './ColumnContainer/ColumnContainer';

export default class App extends Component {

    render() {
        return (
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
        );
    }

}

