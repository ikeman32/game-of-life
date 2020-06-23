import React from 'react';
import './App.scss';
import { Board } from './components'

function App() {
  return (
    <div className="App">
      <header><h3 id='title'>Conway's Game of Life</h3></header>
      <div className='container'>
        <div className='game'>
          <div className='board'>
            <Board />
          </div>

        </div>
        <div className='rules'>
          <h2>Rules</h2>
          <p>
            <ul>
              <li>
                Rule 1: Any cell with two or three neighbors survives.
              </li>
              <li>
                Rule 2: Any dead cell with two or three live cells is resurected.
              </li>
              <li>
                Rule 3: All other live cells die in the next generation and any remaining dead cells remain dead.
              </li>
            </ul>
          </p>
        </div>
        <div className='about'>
          <h2>About this Algorithm</h2>
          <p>
            <a href="https://en.wikipedia.org/wiki/Conway's_Game_of_Life">Conway’s Game of Life</a> was devised by British mathematician John Horton Conway and is a demonstration of cellular automaton. Cellular automaton is a discrete model studied in automata theory, which is the study of abstract machines and automata, as well as the computational problems that can be solved by them. His primary motivations came from questions in mathematical logic and by work on simulation games by Ulam (<a href="https://en.wikipedia.org/wiki/Stanislaw_Ulam">Stainslaw Marcin Ulam</a>, a Polish scientist in the field of mathematics and nuclear physics) and others. Conway started doing experiments in 1968 with a variety of two-dimensional cellular automaton rules.
          </p>
          <p>
            The first appearance of the game came in October 1970 issue of Scientific American, in Martin Gardner’s “Mathematical Games” column. In the column he wrote, “Because of Life’s analogies with the rise, fall and alterations of a society of living organisms, it belongs to a growing class of what are called ‘simulation games’ (games that resemble real life processes).
          </p>
          <p>
            The game is considered <a href="https://en.wikipedia.org/wiki/Turing_completeness">Turing Complete</a> and can simulate a <a href="https://en.wikipedia.org/wiki/Von_Neumann_universal_constructor">Universal Constructor</a> or any other <a href="https://en.wikipedia.org/wiki/Turing_machine">Turing Machine</a>. A Turing Machine is an abstract mathematical computational device named after <a href="https://en.wikipedia.org/wiki/Alan_Turing">Alan Turing</a>, who developed the <a href="https://en.wikipedia.org/wiki/Turing_test">Turing Test</a>, at test to determine if a machine exhibits intelligent behavior.
          </p>
        </div>
      </div>
      <footer><p>By David Isakson</p></footer>
    </div>
  );
}

export default App;
