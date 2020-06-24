import React, { Component } from 'react';
import { Square } from "../index"

class Board extends Component {
    constructor(props) {
        super(props);

        this.state = {
            //Declare an 1D array with the length of 50
            'grid': Array(50).fill().map(x => Array(50).fill('+')),
            //'nextGen': Array(50).fill().map()(x => Array(50).fill('+')),
        };
    }

    handleStart() {
        //Start the game
        alert('You clicked start')
    }

    handleStop() {
        //Stop the game
        alert('You clicked stop')
    }

    handlePattern(e) {
        //Insert pattern
        switch (e.target.value) {
            case 'Random':
                alert('You clicked Random')
                break;
            case 'Pattern1':
                alert('You clicked Pattern1')
                break;
            case 'Pattern2':
                alert('You clicked Pattern2')
                break;
            case 'Pattern3':
                alert('You clicked Pattern3')
                break;
            default:
                break;
        }
    }

    render() {
        const g = this.state.grid;

        //Put array into a board
        const board = g.map((row, i) => {
            return (
                //Loop through array and add an array to each slot of the array
                //to create a 2D array
                <tr key={'row_' + i}>
                    {row.map((col, j) => {
                        return (<Square key={i + '_' + j} />)
                    })}
                </tr>
            )

        });

        //Render the board
        return (
            <div id='outter' style={{ width: '100%' }}>
                <div id='inner' style={{ width: '100%' }}>
                    <table cellSpacing='0' style={{ float: 'left' }}>
                        <tbody>
                            {board}
                        </tbody>
                    </table>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <button style={{ marginLeft: '1rem', marginTop: '1rem' }} value='Random' onClick={this.handlePattern}>Random</button>
                        <button style={{ marginLeft: '1rem', marginTop: '1rem' }} value='Pattern1' onClick={this.handlePattern}>Pattern1</button>
                        <button style={{ marginLeft: '1rem', marginTop: '1rem' }} value='Pattern2' onClick={this.handlePattern}>Pattern2</button>
                        <button style={{ marginLeft: '1rem', marginTop: '1rem' }} value='Pattern3' onClick={this.handlePattern}>Pattern3</button>
                    </div>
                </div>

                <br></br>
                <div style={{ width: '50%' }}>
                    <button style={{ marginLeft: '40%' }} onClick={this.handleStart}>Start</button>
                    <button style={{ marginLeft: '1rem', marginTop: '1rem' }} onClick={this.handleStop}>Stop</button>
                </div>

            </div>
        )
    }

}

export default Board;