import React, { Component } from 'react';
import { Square } from "../index"

class Board extends Component {
    constructor(props) {
        super(props);

        this.state = {
            'isRunning': false,
            //Determine if a square is zero or not
            'isZero': true,
            //Declare an 2D array with the length of 50
            //Fill array with zeros
            'grid': new Array(50).fill([]).map(x => new Array(50).fill(0)),
        };
        //Bind all methods to this
        this.handlePattern = this.handlePattern.bind(this)
        this.handleState = this.handleState.bind(this)
        this.handleStart = this.handleStart.bind(this)
        this.handleStop = this.handleStop.bind(this)
        this.countCells = this.countCells.bind(this)
        this.handleLoop = this.handleLoop.bind(this)
    }

    handleLoop() {
        if (this.state.isRunning) {

            let nextGen = new Array(50).fill([]).map(x => new Array(50).fill(0))
            for (let i = 0; i < 50; i++) {
                for (let j = 0; j < 50; j++) {
                    let cells = this.countCells(this.state.grid, i, j)
                    if (this.state.grid[i][j] === 0 && cells === 3) {
                        nextGen[i][j] = 1

                    }
                    else if (this.state.grid[i][j] === 1 && (cells < 2 || cells > 3)) {
                        nextGen[i][j] = 0

                    }
                    else {
                        nextGen[i][j] = this.state.grid[i][j]
                    }
                }

            }

            this.setState({ grid: nextGen })
        }
    }

    handleStart() {

        //Start the game
        this.setState({ 'isRunning': true })
        this.intervalid = setInterval(this.handleLoop, 1000)

    }

    handleStop() {
        //Stop the game
        this.setState({ 'isRunning': false })
        clearInterval(this.intervalid)
    }

    countCells(grid, x, y) {
        //Count the surrounding cells
        let sum = 0;
        for (let i = -1; i < 2; i++) {
            for (let j = -1; j < 2; j++) {
                let col = (x + i + 50) % 50;
                let row = (y + j + 50) % 50;
                sum += grid[col][row];
            }
        }
        //Don't count original cell
        sum -= grid[x][y];
        return sum;
    }

    handleState(x, y) {
        //Update the board if the state changes
        const g = this.state.grid
        if (this.state.grid[x][y] === 0) {
            g[x][y] = this.state.isZero === true ? 'burlywood' : 'black';

            this.setState({ 'grid': g, 'isZero': !this.state.isZero });

        }
    }

    handlePattern(e) {
        //Insert pattern
        var nextGeneration = new Array(50).fill([]).map(x => new Array(50).fill(0))
        this.setState({ 'grid': nextGeneration })
        switch (e.target.value) {
            case 'Random':
                for (let i = 0; i < 50; i++) {
                    for (let j = 0; j < 50; j++) {
                        nextGeneration[i][j] = (Math.floor(Math.random() * 2))
                    }
                }
                //Update grid state
                this.setState({ grid: nextGeneration })
                break;
            case 'Pattern1':
                //Loop through 2D array
                for (let i = 0; i < 50; i++) {
                    for (let j = 0; j < 50; j++) {
                        //Stop at 1st dimension and check the 2nd dimension
                        //then change the nextGeneration array if there are
                        //any matches otherwise nextGeneration[i][j] is 0
                        switch (i) {
                            case 21:
                                if (j === 23 || j === 24) {
                                    nextGeneration[i][j] = 1;
                                }
                                break;
                            case 22:
                                if (j === 22 || j === 23 || j === 24) {
                                    nextGeneration[i][j] = 1;
                                }
                                break;
                            case 23:
                                if (j === 22 || j === 23 || j === 25 || j === 26) {
                                    nextGeneration[i][j] = 1;
                                }
                                break;
                            case 24:
                                if (j === 22 || j === 23 || j === 24 || j === 25) {
                                    nextGeneration[i][j] = 1;
                                }
                                break;
                            case 25:
                                if (j === 22 || j === 23 || j === 25 || j === 26) {
                                    nextGeneration[i][j] = 1;
                                }
                                break;
                            case 26:
                                if (j === 22 || j === 23 || j === 25 || j === 26) {
                                    nextGeneration[i][j] = 1;
                                }
                                break;
                            case 27:
                                if (j === 22 || j === 23 || j === 25 || j === 26 || j === 27) {
                                    nextGeneration[i][j] = 1
                                }
                                break;
                            case 28:
                                if (j === 22 || j === 23 || j === 26 || j === 27) {
                                    nextGeneration[i][j] = 1
                                }
                                break;
                            case 29:
                                if (j === 22 || j === 23 || j === 26 || j === 27 || j === 28) {
                                    nextGeneration[i][j] = 1
                                }
                                break;
                            case 30:
                                if (j === 22 || j === 23 || j === 27 || j === 28) {
                                    nextGeneration[i][j] = 1
                                }
                                break;
                            case 31:
                                if (j === 22 || j === 23 || j === 27 || j === 28 || j === 29) {
                                    nextGeneration[i][j] = 1
                                }
                                break;
                            case 32:
                                if (j === 22 || j === 23 || j === 28 || j === 29) {
                                    nextGeneration[i][j] = 1
                                }
                                break;
                            case 33:
                                if (j === 21 || j === 22 || j === 23 || j === 24 || j === 28 || j === 29) {
                                    nextGeneration[i][j] = 1
                                }
                                break;
                            case 34:
                                if (j === 21 || j === 22 || j === 23 || j === 24 || j === 28 || j === 29) {
                                    nextGeneration[i][j] = 1
                                }
                                break;
                            default:
                                nextGeneration[i][j] = 0
                                break;
                        }
                    }
                }
                //Update the state of grid
                this.setState({ grid: nextGeneration })
                break;
            case 'Pattern2':
                for (let i = 0; i < 50; i++) {
                    for (let j = 0; j < 50; j++) {
                        switch (i) {
                            case 24:
                                if (j === 23 || j === 24 || j === 25) {
                                    nextGeneration[i][j] = 1
                                }
                                break;

                            default:
                                nextGeneration[i][j] = 0
                                break;
                        }
                    }
                }
                this.setState({ grid: nextGeneration })
                break;
            case 'Pattern3':
                for (let i = 0; i < 50; i++) {
                    for (let j = 0; j < 50; j++) {
                        switch (i) {
                            case 23:
                                if (j === 23 || j === 24) {
                                    nextGeneration[i][j] = 1
                                }
                                break;
                            case 24:
                                if (j === 23 || j === 24) {
                                    nextGeneration[i][j] = 1
                                }
                                break;
                            case 25:
                                if (j === 25 || j === 26) {
                                    nextGeneration[i][j] = 1
                                }
                                break;
                            case 26:
                                if (j === 25 || j === 26) {
                                    nextGeneration[i][j] = 1
                                }
                                break;
                            default:
                                nextGeneration[i][j] = 0
                                break;
                        }
                    }
                }
                this.setState({ grid: nextGeneration })
                break;
            default:
                break;
        }
    }

    render() {
        const g = this.state.grid;
        //Put array into a board
        let board = g.map((row, i) => {
            return (
                <tr key={'row_' + i}>
                    {row.map((col, j) => {
                        const color_ = g[i][j] === 0 ? 'burlywood' : 'black';
                        return (<Square handleState={() => this.handleState(i, j)} color={color_} key={i + '_' + j} />)
                    })}
                </tr>
            )

        });

        //Render the board
        return (
            <div id='outter' style={{ width: '100%' }}>
                <div id='inner' style={{ width: '100%' }}>
                    <table cellSpacing='0' style={{ float: 'left', border: '.5px solid black' }}>
                        <tbody>
                            {board}
                        </tbody>
                    </table>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <button style={{ marginLeft: '1rem', marginTop: '1rem' }} value='Random' onClick={this.handlePattern}>Random</button>
                        <button style={{ marginLeft: '1rem', marginTop: '1rem' }} value='Pattern1' onClick={this.handlePattern}>Lambda Pattern</button>
                        <button style={{ marginLeft: '1rem', marginTop: '1rem' }} value='Pattern2' onClick={this.handlePattern}>Blinker</button>
                        <button style={{ marginLeft: '1rem', marginTop: '1rem' }} value='Pattern3' onClick={this.handlePattern}>Beacon</button>
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