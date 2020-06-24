function handleClick(x, y){
    //only add a peice and check for wins if the clicked square is empty
    if (this.state.grid[x][y] === '+') {
        //we don't want to mutate state directly, so we store the reference to 'grid' in a const
        const g = this.state.grid;
        //set the grid square cooresponding to the clicked square to the color of the current player
        g[x][y] = this.state.isWhite === true ? 'w' : 'b';
        //set the state with the new grid data
        this.setState({ 'grid': g, 'isWhite': !this.state.isWhite })

        //helper function for
        function checkDir(x_, y_, color) {
            //track how many squares of a given color there are in a given dirention (specified by x_ and y_)
            //for example checkDir(0,1, 'w') checks how many white stones there are in a row to the right )
            let tracked = 0;
            let _x = x;
            let _y = y;
            //stop tracking stones when the color is not equal to the specified stone or we have gone past the edge of the board
            while (g[_x] !== undefined && g[_x][_y] === color) {
                //increment the number of tracked stones
                tracked += 1;
                //increment/decrement to check the next square in the specified direction
                _y += y_;
                _x += x_;
            }
            return tracked;
        }
        //sum the directions (left+right, up+down, 2 diagonals)
        const w_horizontal = checkDir(0, 1, 'w') + checkDir(0, -1, 'w') - 1;
        const b_horizontal = checkDir(0, 1, 'b') + checkDir(0, -1, 'b') - 1;

        const w_vertical = checkDir(1, 0, 'w') + checkDir(-1, 0, 'w') - 1;
        const b_vertical = checkDir(1, 0, 'b') + checkDir(-1, 0, 'b') - 1;

        const w_diag1 = checkDir(1, 1, 'w') + checkDir(-1, -1, 'w') - 1;
        const b_diag1 = checkDir(1, 1, 'b') + checkDir(-1, -1, 'b') - 1;

        const w_diag2 = checkDir(1, 1, 'w') + checkDir(-1, -1, 'w') - 1;
        const b_diag2 = checkDir(-1, 1, 'b') + checkDir(1, -1, 'b') - 1;

        //check to see if there are any sums greater than or equal to 5 and alert the players of a win
        //setTimeout is called so that the alert() function does not hold up the rendering of the board.
        if (w_horizontal >= 5 || w_vertical >= 5 || w_diag1 >= 5 || w_diag2 >= 5) {
            setTimeout(() => { alert('white wins') }, 1);
        }

        if (b_horizontal >= 5 || b_vertical >= 5 || b_diag1 >= 5 || b_diag2 >= 5) {
            setTimeout(() => { alert('black wins') }, 1);
        }
    }
};