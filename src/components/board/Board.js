import React, { Component } from 'react';
import { Square } from "../index"

class Board extends Component {
    constructor(props) {
        super(props);

        this.state = {
            'grid': Array(50).fill().map(x => Array(50).fill('+')),
        };
    }

    render() {
        const g = this.state.grid;

        const board = g.map((row, i) => {
            return (
                <tr key={'row_' + i}>
                    {row.map((col, j) => {
                        return (<Square key={i + '_' + j} />)
                    })}
                </tr>
            )

        });

        return (
            <div id='outter' style={{width: '100%'}}>
                <div id='inner' style={{width: '100%'}}>
                    <table cellSpacing='0'style={{float: 'left'}}>
                        <tbody>
                            {board}
                        </tbody>
                    </table>
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                    <button style={{marginLeft: '1rem', marginTop: '1rem'}}>Test</button>
                    <button style={{marginLeft: '1rem', marginTop: '1rem'}}>Test</button>
                    <button style={{marginLeft: '1rem', marginTop: '1rem'}}>Test</button>
                    <button style={{marginLeft: '1rem', marginTop: '1rem'}}>Test</button>
                    </div>
                </div>
                
                <br></br>
                <div style={{width: '50%'}}>
                <button style={{marginLeft: '40%'}}>Start</button>
                <button style={{marginLeft: '1rem', marginTop: '1rem'}}>Stop</button>
                </div>
                
            </div>
        )
    }

}

export default Board;