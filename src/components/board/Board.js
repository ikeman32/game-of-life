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
            'grid': Array(50).fill().map(x => Array(50).fill(0)),
        };
        this.handlePattern = this.handlePattern.bind(this)
        this.handleState = this.handleState.bind(this)
        this.handleStart = this.handleStart.bind(this)
        this.handleStop = this.handleStop.bind(this)
        this.countCells = this.countCells.bind(this)
        this.handleLoop = this.handleLoop.bind(this)
    }
    componentWillMount(){

    }

    componentWillUnmount(){
        
    }


    handleLoop(running) {
        //alert("It's running!")
        let nextGen = Array(50).fill().map(x => Array(50).fill(0))
        while (running === true) {
            for (let i = 0; i < 50; i++) {
                for (let j = 0; i < 50; j++) {
                    let cells = this.countCells(nextGen, i, j)
                    if (nextGen[i][j] === 0 && cells === 3) {
                        nextGen[i][j] = 1
                        //alert("yep")
                    }
                    else if (nextGen[i][j] === 1 && (cells < 2 || cells > 3)) {
                        nextGen[i][j] = 0
                        //alert("yep")
                    }
                    else {
                        nextGen[i][j] = nextGen
                        //alert("yep")
                    }
                    
                }

            }
            console.log("next", nextGen)
            this.setState({ 'grid': nextGen })
        }
    }

    handleStart() {
        //Start the game
        this.setState({ 'isRunning': true }, ()=>this.handleLoop(this.state.isRunning))
        
    }

    handleStop() {
        //Stop the game
        this.setState({ 'isRunning': false }, ()=>this.handleLoop(this.state.isRunning))

    }

    countCells(grid, x, y) {
        //alert("counting")
        let sum = 0;
        for (let i = -1; i < 2; i++) {
            for (let j = -1; j < 2; j++) {
                let col = (x + i + 50) % 50;
                let row = (y + j + 50) % 50;
                sum += grid[col][row];
            }
        }
        sum -= grid[x][y];
        return sum;
    }

    handleState(x, y) {
        if (this.state.grid[x][y] === 0) {
            g[x][y] = this.state.isZero === true ? 'burlywood' : 'black';

            this.setState({ 'grid': g, 'isZero': !this.state.isZero });
        }
        cb = this.handleLoop


        // if (this.state.isRunning === true) {

        // }

    }

    handlePattern(e) {
        //Insert pattern
        var nextGeneration = Array(50).fill().map(x => Array(50).fill(0))
        this.setState({ 'grid': nextGeneration })
        switch (e.target.value) {
            case 'Random':
                //alert('You clicked Random');
                for (let i = 0; i < 50; i++) {
                    for (let j = 0; j < 50; j++) {
                        nextGeneration[i][j] = (Math.floor(Math.random() * 2))
                    }
                }
                //Update state of grid
                this.setState({ grid: nextGeneration })
                //console.table(this.state.grid)
                break;
            case 'Pattern1':

                for (let i = 0; i < 50; i++) {
                    for (let j = 0; j < 50; j++) {
                        switch (i) {
                            case 21:

                                if (j === 23 || j === 24) {
                                    nextGeneration[i][j] = 1;
                                    console.log(i, j)
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
                //console.table(nextGeneration)
                this.setState({ grid: nextGeneration })
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