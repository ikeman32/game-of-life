import React, { Component } from 'react';
import { Square } from "../index"

class Board extends Component {
    constructor(props) {
        super(props);

        this.state = {
            //Determine if a square is zero or not
            'isZero': true,
            //Declare an 2D array with the length of 50
            //Fill array with zeros
            'grid': Array(50).fill().map(x => Array(50).fill(0)),
        };
        this.handlePattern = this.handlePattern.bind(this)
        this.handleState = this.handleState.bind(this)
    }

    handleStart() {
        //Start the game
        alert('You clicked start')
    }

    handleStop() {
        //Stop the game
        alert('You clicked stop')
    }

    handleState(x,y){
        if(this.state.grid[x][y] === 0){
            const g = this.state.grid
            g[x][y] = this.state.isZero === true ? 'burlywood': 'black';

            this.setState({'grid': g, 'isZero': !this.state.isZero});
        }
    }

    handlePattern(e) {
        //Insert pattern
        var nextGeneration = this.state.grid
        switch (e.target.value) {
            case 'Random':
                //alert('You clicked Random');
                for(let i = 0; i < 50; i++){
                    for(let j = 0; j < 50; j++){
                        nextGeneration[i][j] = (Math.floor(Math.random() * 2))
                    }
                }
                //Update state of grid
                this.setState({grid:nextGeneration})
                //console.table(this.state.grid)
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
        //const ng = this.state.nextGen;

        //Put array into a board
        let board = g.map((row, i) => {
            return (
                <tr key={'row_' + i}>
                    {row.map((col, j) => {
                        const color_ = g[i][j] === 0 ? 'burlywood': 'black';
                        return (<Square handleState={()=> this.handleState(i,j)} color={color_} key={i + '_' + j} />)
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